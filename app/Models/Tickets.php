<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    use HasFactory;

    protected $fillable = [
        "payment_id",
        "set",
        "amount",
        "title",
        "description",
        "close_date"
    ];
}
