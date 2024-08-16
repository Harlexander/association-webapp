<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Events;
use App\Models\JobBoard;
use App\Models\News;
use App\Models\Payments;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Statistics extends Controller
{
        public function getStatistics()
        {
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
    
            return response()->json([
                'memberCount' => $memberCount,
                'jobCount' => $jobCount,
                'upcomingEventCount' => $upcomingEventCount,
                'jobs' => $jobs,
                'trans' => $transactions,
                'totalTrans' => $totalTrans
            ]);
        }
        
        public function getAdminStatistics()
        {
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
    
            return response()->json([
                'memberCount' => $memberCount,
                'jobCount' => $jobCount,
                'newsCount' => $newsUpdate,
                'events' => $upcomingEventCount,
                'trans' => $transactions,
                'totalTrans' => $totalTrans,
                'members' => $members
            ]);
        }
}
