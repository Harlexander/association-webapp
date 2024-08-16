<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\EventReg;
use App\Models\Events as ModelsEvents;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class Events extends Controller
{
    public function createEvent(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'set' => 'required|string',
            'type' => 'required|string',
            'reg_fee' => 'nullable|numeric',
            'date' => 'required|date',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif', // Validate file
            'description' => 'required|string',
        ]);
    
        // Generate a unique event ID
        $validatedData['event_id'] = Str::random(8);
    
        // Handle the image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('events', 'public'); // Save image in the 'public/events' directory
            $imagePath = "/"."storage/".$imagePath;
            $validatedData['image'] = $imagePath; // Store the path in the database
        }
    
        // Create the event
        $event = ModelsEvents::create($validatedData);
    
        // Redirect back with a success message
        return back()->with([
            'message' => 'Event created successfully',
            'event' => $event
        ]);
    }
    

    
    public function getEvents(Request $request){
        try {
            $set = $request->set;
            $event = ModelsEvents::whereIn("set", [$set, 'all set'])
            ->latest()
            ->get();

            $member_id = Auth::user()->member_id;

            $events = EventReg::with("event")->where("member_id", $member_id)
            ->latest()
            ->get();

            return Inertia::render("dashboard/events", [ "events" => $event, "reg_event" => $events ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function getAdminEvents(Request $request){
        try {
            $event = ModelsEvents::with("registeredMembers")
            ->latest()
            ->get();

            return Inertia::render("admin/events", [
                "events" => [
                    "data" => $event
                ]
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function register(Request $req)
    {
        try {
            //code...
            $event_id = $req->id;
            $member_id = Auth::user()->member_id;

            EventReg::create([
                'event_id' => $event_id,
                'member_id' => $member_id
            ]);

            return response("Registered", 200);

        } catch (\Throwable $th) {
            //throw $th;
            if ($th->getCode() === '23000') {
                return response('Member already registered', 400);
            } else {
                return response($th->getMessage(), 401);
            }
        }
    }

    public function getRegEvents(Request $request){
        try {
            $member_id = Auth::user()->member_id;

            $events = EventReg::with("event")->where("member_id", $member_id)
            ->latest()
            ->get();
            return response($events, 200);

        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function removeEvent(Request $req){
        $req->validate([
            "id" => 'required'
        ]);

        $event = ModelsEvents::find($req->id);

        $event->delete();

        return back();
    }
}
