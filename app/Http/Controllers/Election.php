<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Election as ModelsElection;
use Illuminate\Http\Request;

class Election extends Controller
{
    //
    public function apply(Request $request){
        try {
            //code...
            $rules = [
                'firstName' => 'required|string|max:255',
                'lastName' => 'required|string|max:255',
                'email' => 'required|email|unique:election,email', // Make sure "email" is unique in the "election" table
                'image' => 'required|string|max:255',
                'position' => 'required|string|max:255',
                'occupation' => 'required|string|max:255',
                'biography' => 'required|string',
                'manifesto' => 'required|string',
            ];

            $validatedData = $request->validate($rules);

            $apply = ModelsElection::create($validatedData);
        
            return response()->json([
                'message' => "User applied successfully"
            ]);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 400);
        }
    }


    public function getCandidates(Request $request){
        try {
            //code...
            $candidatesGrouped = ModelsElection::with("member")->get();

            return response()->json($candidatesGrouped);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 400);
        }
    }

    public function getCandidate(Request $request, $id){
        try {
            $candidatesGrouped = ModelsElection::where("id", $id)
            ->first();

            return response()->json($candidatesGrouped);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 400);
        }
    }

    public function removeCandidate(Request $req, $id){
            $remove = ModelsElection::where("id", $id)->delete();

            return response()->json($remove);
    }
}

