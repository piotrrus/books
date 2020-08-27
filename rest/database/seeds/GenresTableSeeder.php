<?php

use Illuminate\Database\Seeder;

class GenresTableSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('genres')->insert([
            ['name' => 'Literatura piękna', 'id' => 1],
            ['name' => 'Literatura popularnonaukowa', 'id' => 2],
            ['name' => 'Literatura podróżnicza', 'id' => 3],
            ['name' => 'Informatyka', 'id' => 4],
            ['name' => 'Kryminał', 'id' => 5],
            ['name' => 'Pamiętniki', 'id' => 6],
            ['name' => 'Powieść historyczna', 'id' => 7],
            ['name' => 'Poezja', 'id' => 8]
        ]);
    }
}
