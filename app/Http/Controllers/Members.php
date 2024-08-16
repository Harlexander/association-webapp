<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Members extends Controller
{
    public function getMembers(){
        try {
            $members = User::latest()->paginate(10);

            return Inertia::render("dashboard/members", [
                "data" => $members
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }
    public function adminMembers(){
        try {
            $members = User::latest()->paginate(10);

            return Inertia::render("admin/members", [
                "data" => $members
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }

    public function userStatus(Request $request){
        $request->validate([
            'id' => 'required',
            'status' => 'required'
        ]);


        $user = User::find($request->id);

        
        if($user){
            $user->status = $request->status;
            $user->save();
        }

        return back();
    }

    public function removeUser(Request $request){
        $request->validate([
            'id' => 'required'
        ]);
        $user = User::find($request->id);
        $user->delete();
        
        return back();
    }
}
