<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News as ModelsNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class News extends Controller
{

public function postNews(Request $request)
{
    try {
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png', // Validate the image
        ]);

        // Get the authenticated user's ID
        $user_id = Auth::user()->member_id;

        // Initialize image path
        $imagePath = null;

        // Check if the request has an image file
        if ($request->hasFile('image')) {
            // Get the image file
            $image = $request->file('image');

            // Store the image file
            $imagePath = $image->store('news', 'public');
            $imagePath = "/"."storage/".$imagePath;
        }

        // Create a new news entry
        $news = ModelsNews::create([
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
            'image' => $imagePath, // Save the path of the stored image
            'member_id' => $user_id,
        ]);

        // Return a response or redirect as desired
        return back()->with('message', 'News posted successfully');

    } catch (\Throwable $th) {
        // Handle exceptions and return a response
        return response()->json(['error' => $th->getMessage()], 401);
    }
}


    public function getNews(Request $request){
        try {
            $news = ModelsNews::with('member')->get();

            error_log($news);
            
            return Inertia::render("dashboard/news", [ "news" => $news ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function getAdminNews(Request $request){
        try {
            $news = ModelsNews::with('member')->get();

            error_log($news);

            return Inertia::render("admin/news", [ "data" => $news ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function deleteNews(Request $request)
    {
        try {
            $id = $request['id'];
            $news = ModelsNews::findOrFail($id);
            $news->delete();

            return response('News deleted successfully', 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 401);
        }
    }

}
