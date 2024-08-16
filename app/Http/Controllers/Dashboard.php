<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Events;
use App\Models\JobBoard;
use App\Models\Payments;
use App\Models\PaymentsModel;
use App\Models\Settings;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class Dashboard extends Controller
{
    public function dashboard(){
        $memberCount = User::count();
            $jobCount = JobBoard::count();
            $upcomingEventCount = Events::where('date', '>', Carbon::now())->count();

            $jobs = JobBoard::latest()->limit(6)->get();

            $transactions = Payments::where("member_id", Auth::user()->member_id)
            ->latest()
            ->limit(5)
            ->get();

            $totalTrans = Payments::where("member_id", Auth::user()->member_id)
            ->where("status", "success")
            ->count();
    

        return Inertia::render("dashboard/index",[
            "data" => [
                'memberCount' => $memberCount,
                'jobCount' => $jobCount,
                'upcomingEventCount' => $upcomingEventCount,
                'jobs' => $jobs,
                'trans' => $transactions,
                'totalTrans' => $totalTrans
            ]
        ]);
    }
    public function update(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'subtext' => 'nullable|string',
            'footerText' => 'nullable|string',
            'about_us' => 'nullable|string',
            'facebook' => 'nullable|url',
            'instagram' => 'nullable|url',
            'twitter' => 'nullable|url',
            'linkedin' => 'nullable|url',
            'mobile1' => 'nullable|string',
            'mobile2' => 'nullable|string',
            'email1' => 'nullable|email',
            'email2' => 'nullable|email',
            'home_image' => 'nullable|image|mimes:jpeg,png,jpg,gif', // Validate image
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        // Find the existing settings record or create one if it doesn't exist
        $settings = Settings::first() ?? new Settings();

        // Handle the home_image upload
        if ($request->hasFile('home_image')) {
            $file = $request->file('home_image');
            $path = $file->store('home_images', 'public'); // Store image in the public disk
            $path = "/"."storage/".$path;

            // Remove 'public/' from the path to store in database
            $settings->home_image = $path;
        }

        // Use fill method to update the other fields
        $settings->fill($request->except('home_image'));

        // Save the settings
        $settings->save();

        return redirect()->route('settings.edit')->with('success', 'Settings updated successfully!');
    }
}
