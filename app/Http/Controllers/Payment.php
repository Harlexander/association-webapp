<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Payments;
use App\Models\Tickets;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Inertia\Inertia;

use function Termwind\render;

class Payment extends Controller
{
    private $key;

    public function __construct(){
        $this->key = env("PAYSTACK_SECRET");
    }

    function initiatePayment(Request $req){
        try {
            $validate = $req->validate([
                "amount" => 'required',
                "purpose" => 'required',
                'callback_url' => 'nullable',
                'payment_id' => 'nullable'                
            ]);
            
            $url = "https://api.paystack.co/transaction/initialize";
            
            error_log("initiate_payment");

            $fields = [
                'email' => Auth::user()->email,
                'amount' => $validate['amount']*100,
                'callback_url' => $validate['callback_url'],
                'metadata' => [
                    'purpose' => $validate['purpose']
                ]
            ];

            $response = Http::withHeaders([
                "Authorization" => "Bearer ".$this->key,
                "Cache-Control" => "no-cache",
            ])->post($url, $fields);

            $result = $response->json()["data"];

            Payments::create([
                'member_id' => Auth::user()->member_id,
                'trans_id' => $result["reference"],
                'purpose' => $validate['purpose'],
                'amount' => $validate["amount"],
                'status' => 'pending',
                'payment_id' => $validate['payment_id']
            ]);

            return response($result, 200);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 200);
        }
    }

    public function verifyPayment(Request $req){
        try {
            $validate = $req->validate([
                "ref" => 'required'
            ]);

            error_log("verify_payment");

            $url = 'https://api.paystack.co/transaction/verify/'.$validate['ref'];

            $response = Http::withHeaders([
                "Authorization" => "Bearer ".$this->key,
                "Cache-Control" => "no-cache",
            ])->get($url);

            if(!$response->successful()){
                return response("Invalid Transaction", 401);
            }

            $result = $response->json()["data"];

            $status = $result["status"];

            if($status === "success"){
                $trans = Payments::where("trans_id", $validate['ref'])->first();
                $trans->status = $status;
                $trans->save();
            }

            return response($response, 200);
        } catch (\Throwable $th) {
            return response($th->getMessage(), 200);
        }
    }

    public function dueStatus(){
        try {
            $currentYear = Carbon::now()->year;

            $memberId = Auth::user()->member_id;
        
            $duesPayment = Payments::where('member_id', $memberId)
                ->where('status', 'success')
                ->where('payment_id', 'sjssaa')
                ->whereYear('created_at', $currentYear)
                ->exists();
            
            if ($duesPayment) {
                return response("true", 200);
            } else {
                return response("false", 200);
            }
        } catch (\Throwable $th) {
            return response($th->getMessage(), 200);
        }
    }

    public function getUserPayments()
    {
        $userId = Auth::user()->member_id;
        
        $payments = Payments::where('member_id', $userId)
        ->latest()
        ->get();

        $set = Auth::user()->set;

        $currentDate = date('Y-m-d');

        $paymentsQuery = Tickets::where('close_date', '>', $currentDate)
                                ->whereIn("set", ["all set", $set])
                                ->latest()
                                ->get();
        
        return Inertia::render("dashboard/dues", [ "data" => $payments, "activePayments" => $paymentsQuery ]);
    }

    public function getAdminPayments()
    {        
        $payments = Payments::with("member:id,firstName,lastName,member_id,set");
        $payments = $payments
        ->latest()
        ->paginate(20);

        $currentDate = date('Y-m-d');
        $paymentsQuery = Tickets::where('close_date', '>', $currentDate)
                                ->latest()
                                ->get();
        
        return Inertia::render("admin/payments", [ "data" => $payments, "activePayments" => $paymentsQuery ]);
    }
    
    public function getPayments(Request $req){    
        $payments = Payments::with("member:id,firstName,lastName,member_id,set");
        $req["status"] && $payments->where("status", $req["status"]);
        $payments = $payments
        ->latest()
        ->paginate(20);

        return response($payments, 200);
    }

    
    function createPaymentTicket(Request $req){
        try {

            $validate = $req->validate([
                "amount" => 'required',
                "title" => 'required',
                'description' => 'nullable',
                'close_date' => "required",
                'set' => "required",
            ]);
            
            $payment_id = Str::random(8);

            $timestamp = strtotime($validate["close_date"]);
            $close_date = date('Y-m-d H:i:s', $timestamp);

            Tickets::create([
                'payment_id' => $payment_id,
                'amount' => $validate["amount"],
                'title' => $validate['title'],
                'set' => $validate['set'],
                'description' => $validate["description"],
                'close_date' => $close_date
            ]);

            return back()->with("success");
            
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }
    
    function activePayments(Request $req){
        try {
            $admin = $req["admin"];
            $currentDate = date('Y-m-d');

            $set = Auth::user()->set;

            $paymentsQuery = Tickets::where('close_date', '>', $currentDate);

            if (!$admin) {
                $paymentsQuery->whereIn("set", ["all set", $set]);
            }
            
            $payments = $paymentsQuery->latest()->get();
    
            return response($payments, 200);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(), 401);
        }
    }
}
