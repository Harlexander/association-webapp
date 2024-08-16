<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobBoard extends Model
{
    use HasFactory;

    protected $table = 'job_board';

    protected $fillable = [
            "title",       
            "org",
            "link",          
            "contact",     
            "description",
            "member_id",
            "exp_date"
    ];
}
