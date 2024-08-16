<?php

namespace App\Models;

use Illuminate\Console\Scheduling\Event;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventReg extends Model
{
    use HasFactory;

    protected $table = 'event_registration';

    protected $fillable = [
        'event_id',
        'member_id'
    ];

    public function member(){
        return $this->belongsTo(User::class, 'member_id', 'member_id');
    }

    public function event(){
        return $this->belongsTo(Events::class, 'event_id', 'event_id');
    }
}
