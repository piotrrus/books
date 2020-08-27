<?php

use Illuminate\Database\Seeder;

class PublishersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('publishers')->insert([
            ['id' => 1, 'name' => 'Helion'],
            ['id' => 2, 'name' => 'Czarne'],
            ['id' => 3, 'name' => 'Albatros'],
            ['id' => 4, 'name' => 'Wydawnictwo MG'],
            ['id' => 5, 'name' => 'Znak'],
            ['id' => 6, 'name' => 'Czytelnik']
        ]);
    }
}
