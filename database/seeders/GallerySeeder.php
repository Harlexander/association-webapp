<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $gallery = [
            [
                'category' => 1,
                'images' => [
                    '/storage/images/sjss1986 (1).jpg',
                    '/storage/images/sjss1986 (2).jpg',
                    '/storage/images/sjss1986 (3).jpg',
                    '/storage/images/sjss1986 (4).jpg',
                    '/storage/images/sjss1986 (5).jpg',
                    '/storage/images/sjss1986 (6).jpg',
                    '/storage/images/sjss1986 (7).jpg',
                ],
            ],
            [
                'category' => 2,
                'images' => [
                    '/storage/images/1992set1.jpeg',
                    '/storage/images/1992set2.jpeg',
                    '/storage/images/1992set3.jpeg',
                    '/storage/images/1992set4.jpeg',
                    '/storage/images/1992set5.jpeg',
                    '/storage/images/1992set6.jpeg',
                    '/storage/images/1992set7.jpeg',
                    '/storage/images/1992set8.jpeg',
                    '/storage/images/1992set9.jpeg',
                ],
            ],
            [
                'category' => 3,
                'images' => [
                    '/storage/images/1986donations (1).jpg',
                    '/storage/images/1986donations (2).jpg',
                    '/storage/images/1986donations (3).jpg',
                    '/storage/images/1986donations (4).jpg',
                    '/storage/images/1986donations (5).jpg',
                    '/storage/images/1986donations (6).jpg',
                ],
            ],
            [
                'category' => 4,
                'images' => [
                    '/storage/images/principal (1).jpg',
                    '/storage/images/principal (2).jpg',
                    '/storage/images/principal (3).jpg',
                    '/storage/images/principal (4).jpg',
                ],
            ],
            [
                'category' => 5,
                'images' => [
                    '/storage/images/exercisebook.jpeg',
                    '/storage/images/exercisebook (2).jpeg',
                ],
            ],
            [
                'category' => 6,
                'images' => [
                    '/storage/images/sjss1995.jpeg',
                    '/storage/images/sjss1995 (2).jpeg',
                    '/storage/images/sjss1995 (3).jpeg',
                ],
            ],
            [
                'category' => 7,
                'images' => [
                    '/storage/images/mentalhealth (1).jpeg',
                    '/storage/images/mentalhealth (2).jpeg',
                    '/storage/images/mentalhealth (3).jpeg',
                ],
            ],
            [
                'category' => 8,
                'images' => [
                    '/storage/images/87set (1).jpeg',
                    '/storage/images/87set (2).jpeg',
                    '/storage/images/87set (3).jpeg',
                ],
            ],
            [
                'category' => 9,
                'images' => [
                    '/storage/images/pioneer (1).jpeg',
                    '/storage/images/pioneer (2).jpeg',
                    '/storage/images/pioneer (3).jpeg',
                    '/storage/images/pioneer (4).jpeg',
                    '/storage/images/pioneer (5).jpeg',
                ],
            ],
            [
                'category' => 10,
                'images' => [
                    'handwash (1).jpeg',
                ],
            ],
            [
                'category' => 11,
                'images' => [
                    '/storage/images/gallery1.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                    '/storage/images/placeholder.jpeg',
                ],
            ],
        ];

        foreach ($gallery as $gal) {
            foreach ($gal['images'] as $image) {
                Gallery::create([
                    'category_id' => $gal['category'],
                    'image_path' => $image,
                    'caption' => 'null'
                ]);
            }
        }
    }
}
