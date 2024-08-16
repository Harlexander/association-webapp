<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Events;
use App\Models\JobBoard;
use App\Models\News;
use App\Models\Payments;
use App\Models\User;
use Carbon\Carbon;

class AdminController extends Controller
{
    public function admin(){
        $memberCount = User::count();
        $jobCount = JobBoard::count();
        $upcomingEventCount = Events::where('date', '>', Carbon::now())->count();
        $newsUpdate = News::count();

        $transactions = Payments::where("status", "success")
        ->select("amount", "purpose", "created_at", "status")
        ->latest()
        ->limit(8)
        ->get();

        $members = User::select("firstName", "lastName", "set", "city", "created_at")
        ->latest()
        ->limit(8)
        ->get();
        
        $totalTrans = Payments::where("status", "success")
        ->count();

        return Inertia::render('admin/index', [
            "data" => [
                'memberCount' => $memberCount,
                'jobCount' => $jobCount,
                'newsCount' => $newsUpdate,
                'events' => $upcomingEventCount,
                'trans' => $transactions,
                'totalTrans' => $totalTrans,
                'members' => $members
            ]
        ]);
    }
}
