<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Election extends Model
{
    use HasFactory;

    protected $table = 'election';

    protected $fillable = [
        'firstName',
        'email',
        'lastName',
        'occupation',
        'biography',
        'manifesto',
        'position',
        'image'
    ];

    public function member(){
        return $this->belongsTo(User::class, 'email', 'email');
    }
}
