<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\JobBoard as ModelsJobBoard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class JobBoard extends Controller
{
    public function createJob(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string',
            'org' => 'required|string',
            'link' => 'nullable',
            'contact' => 'nullable',
            'exp_date' => 'nullable',
            'description' => 'required|string',
        ]);

        $validatedData['member_id'] = Auth::user()->member_id;

        ModelsJobBoard::create($validatedData);

        return back()->with("success", "job created");
    }

    public function getJobs(Request $request){
        try {
            $job = ModelsJobBoard::latest()
            ->get();

            return Inertia::render("dashboard/job-board", [
                "jobs" => $job
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function getAdminJobs(Request $request){
        try {
            $job = ModelsJobBoard::latest()
            ->get();

            return Inertia::render("admin/job-board", [
                "jobs" => $job
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

}
