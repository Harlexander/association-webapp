<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payments extends Model
{
    use HasFactory;

    protected $fillable = [
        'member_id',
        'payment_id',
        'trans_id',
        'amount',
        'purpose',
        'status'
    ];

    public function member(){
        return $this->belongsTo(User::class, 'member_id', 'member_id');
    }
}
