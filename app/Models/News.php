<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'member_id',
        'image',
        'content'
    ];

    public function member()
    {
        return $this->belongsTo(User::class, 'member_id', 'member_id');
    }
}
