<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function settings(){
        $data = Settings::find(1);

        return Inertia::render("admin/settings", [
            "data" => $data
        ]);
    }

    public function updateSettings(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'subtext' => 'required|string',
            'footerText' => 'required|string',
            'about_us' => 'required|string',
            'facebook' => 'nullable|url',
            'instagram' => 'nullable|url',
            'twitter' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'mobile1' => 'nullable|string',
            'mobile2' => 'nullable|string',
            'email1' => 'nullable|email',
            'email2' => 'nullable|email',
            'home_image' => 'nullable|image|mimes:jpg,png,jpeg', // Adjust as needed
        ]);
    
        // Find the settings record with ID 1
        $settings = Settings::find(1);
    
        if (!$settings) {
            return back()->with('error', 'Settings not found.');
        }
    
        // Handle the file upload for home_image
        if ($request->hasFile('home_image')) {
            // Delete the old image if it exists
            if ($settings->home_image) {
                Storage::disk('public')->delete($settings->home_image);
            }
    
            // Store the new image
            $imagePath = $request->file('home_image')->store('home_images', 'public');
            $imagePath = "/"."storage/".$imagePath;
            $validatedData['home_image'] = $imagePath;
        } else {
            // Keep the existing image path if no new image is uploaded
            $validatedData['home_image'] = $settings->home_image;
        }
    
        // Update the settings record
        $settings->update($validatedData);
    
        // Redirect back with a success message
        return back()->with('success', 'Settings updated successfully.');
    }


    public function gallery(Request $request){
        $categories = GalleryCategory::get();
        return Inertia::render("admin/gallery/gallery", [
            'categories' => $categories
        ]);
    }

    public function addCategory(Request $request){
       $request->validate([
        "category" => 'required'
       ]);

       $create = GalleryCategory::create([
        "name" => $request->category
       ]);


       return back()->with(['Category created']);
    }

    public function galleryCategory(Request $request, $categoryId){
        $images = Gallery::where("category_id", $categoryId)->get();
        $name = GalleryCategory::find($categoryId);

        return Inertia::render("admin/gallery/category", [
            'images' => $images,
            'category' => $name
        ]);
    }


    public function newImage(Request $request)
    {
        // Validate the request
        $request->validate([
            'image' => 'required|image|mimes:jpg,jpeg,png|max:2048', // Adjust validation rules as needed
            'id' => 'required|exists:gallery_categories,id',
        ]);

        // Handle the file upload
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $path = "/"."storage/".$file->store('images', 'public'); // Store in 'storage/app/public/images'

            // Create a new gallery entry
            $gallery = new Gallery();
            $gallery->category_id = $request->id;
            $gallery->image_path = $path;
            $gallery->caption = $request->caption ?? ''; // Optional: use request caption if provided
            $gallery->save();

            return back()->with([
                'message' => 'Image uploaded successfully!',
                'gallery' => $gallery,
            ]);
        }

        return back()->with([
            'error' => 'No image file provided.'
        ]);
    }

    public function removeImage(Request $request)
    {
        // Validate the request
        $request->validate([
            'id' => 'required|exists:gallery,id',
        ]);

        // Find the image by ID
        $gallery = Gallery::find($request->id);

        // Delete the physical image file
        if (Storage::disk('public')->exists($gallery->image_path)) {
            Storage::disk('public')->delete($gallery->image_path);
        }

        // Delete the gallery record
        $gallery->delete();

        return back()->with([
            'message' => 'Image deleted successfully.'
        ]);
    }
}
