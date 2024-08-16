<?php

namespace Database\Seeders;

use App\Models\GalleryCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class GalleryCategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'name' => 'SJSS 1986 set socials and networking reception',
                'description' => 'SJSS 1986 Set June 2022 Socials and Networking reception. Thanks to Mr. Oladipo Otuyelu for hosting',
            ],
            [
                'name' => '2009 set 10th anniversary',
                'description' => '2009 Set 10th anniversary celebration with giveaways to their Set members.',
            ],
            [
                'name' => '1986 set donation',
                'description' => '1986 Set donation of a projector and computer to St. Joseph Junior Secondary School (November 2021)',
            ],
            [
                'name' => 'celebrating the 2021 birthday of the first principal',
                'description' => '1986 Set celebrating the 2021 birthday of the first principal of St. Joseph Secondary School, Surulere Lagos',
            ],
            [
                'name' => 'distribution of exercise book by 1992 set',
                'description' => 'Distribution of exercise book to both Junior and Senior schools by 92 Set last month',
            ],
            [
                'name' => 'chairs for library and generator by 1995 set',
                'description' => 'Chairs for the library and generator capable of pumping water for the school. Donated by SJSS class of 1995',
            ],
            [
                'name' => 'rural mental health advocacy 2004 set',
                'description' => 'Onyeche James 2004 Set. 2019 Rural mental health advocacy and motivational speech at St. Joseph Secondary School Suru Lere.',
            ],
            [
                'name' => 'donation of exercise book by 1987 set',
                'description' => 'June 2021, Mr. Tony Agbugba (right) and Mr. Akeem Ajayi (extreme left) Pose with the principal and some St. Joseph Junior Secondary School, Suru Lere,  after donating some exercise books by the 1987 Set.',
            ],
            [
                'name' => 'august 2021 maiden reunion',
                'description' => 'August 2021, some members of the 1987 Set pose with our pioneer principal, Mrs. Olagbemi, during their maiden reunion.',
            ],
            [
                'name' => 'covid 19 hand wash facility',
                'description' => 'COVID 19 hand wash facility built and donated to St. Joseph Secondary School, Suru Lere, by the 1987 Set',
            ],
            [
                'name' => 'presentation of talking drums',
                'description' => 'The presentation of talking drums, Sekere and Agogo was done today 30th March 2022. Many thanks to Mr. Anthony Ashikodi (1986 set)',
            ],
        ];

        foreach ($categories as $category) {
            GalleryCategory::create($category);
        }
    }
}
