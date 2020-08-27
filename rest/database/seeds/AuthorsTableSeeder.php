<?php

use Illuminate\Database\Seeder;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('authors')->insert([
            ['id' => 1, 'name' => 'Gamma Erich, Vlissides John, Johnson Ralph, Helm Richard'],
            ['id' => 2, 'name' => 'Robert C. Martin'],
            ['id' => 3, 'name' => 'John Grisham'],
            ['id' => 4, 'name' => 'William Shakespeare'],
            ['id' => 5, 'name' => 'Wojciech Chmielarz'],
            ['id' => 6, 'name' => 'Fiodor Dostojewski'],
            ['id' => 7, 'name' => 'Andrzej Stasiuk'],
            ['id' => 8, 'name' => 'Ryszard Kapuściński'],
            ['id' => 9, 'name' => 'Mario Vargas Llosa']
        ]);
    }
}
