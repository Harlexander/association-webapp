<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Events;
use App\Models\Gallery;
use App\Models\GalleryCategory;
use App\Models\Settings;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index () {
        $data = Settings::find(1);
        $events = Events::get();
        $data->events = $events;
        return Inertia::render('Welcome', [ "data" => $data ]);
    }
    public function about(){
        $about = Settings::select("about")->first();

        return Inertia::render("About", [
            "about" => $about
        ]);
    }
    public function contact(){
        return Inertia::render("Contact");
    }
    public function mission(){
        return Inertia::render("Mission-vision");
    }
    public function events(){
        return Inertia::render("Events");
    }
    public function gallery(){
        $categories = GalleryCategory::with("images")->get();

        return Inertia::render("gallery/index", [
            "categories" => $categories
        ]);
    }
    public function galleryCat(Request $request, $category){
        $images = GalleryCategory::with('images')->find($category);

        return Inertia::render("gallery/category", [
            'name' => $images['name'],
            'images' => $images['images']
        ]);
    }
}
