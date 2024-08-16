<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtext',
        'footerText',
        'about_us',
        'facebook',
        'instagram',
        'twitter',
        'linkedin',
        'mobile1',
        'mobile2',
        'email1',
        'email2',
        'home_image',
    ];
}
