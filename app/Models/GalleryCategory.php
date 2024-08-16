<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryCategory extends Model
{
    use HasFactory;

    protected $table = 'gallery_categories';

    protected $fillable = [
        'name',
        'description'
    ];

    public function images(){
        return $this->hasMany(Gallery::class, "category_id", "id");
    }
}
