<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_id',
        'title',
        'set',
        'type',
        'reg_fee',
        'date',
        'image',
        'description'
    ];

    public function registeredMembers()
    {
        return $this->hasMany(EventReg::class, 'event_id', 'event_id');
    }

}
