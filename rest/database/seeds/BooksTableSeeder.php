<?php

use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            ['title' => 'Wzorce projektowe', 'id_author' => 1, 'id_publisher' => 1, 'id_genre' => 4],
            ['title' => 'Czysty kod', 'id_author' => 2, 'id_publisher' => 1, 'id_genre' => 4],
            ['title' => 'Niewinny człowiek', 'id_author' => 3, 'id_publisher' => 4, 'id_genre' => 1],
            ['title' => 'Sen nocy letniej', 'id_author' => 4, 'id_publisher' => 6, 'id_genre' => 8],
            ['title' => 'Żmijowisko', 'id_author' => 5, 'id_publisher' => 3, 'id_genre' => 5],
            ['title' => 'Biesy', 'id_author' => 6, 'id_publisher' => 6, 'id_genre' => 1],
            ['title' => 'Jadąc do Babadag', 'id_author' => 7, 'id_publisher' => 2, 'id_genre' => 3],
            ['title' => 'Heban', 'id_author' => 8, 'id_publisher' => 3, 'id_genre' => 3],
            ['title' => 'Szelmostwa niegrzecznej dziewczynki', 'id_author' => 9, 'id_publisher' => 5, 'id_genre' => 1]
        ]);
    }
}
