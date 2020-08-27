<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;

class Publishers extends Model implements CrudInterface
{
    protected $table = 'publishers';

    public static function getAll()
    {
        //return $this->hasMany('App\Book', 'book_author_id', 'author_id');
        return DB::table('publishers')
                ->select('id', 'name')
                ->orderBy('name', 'ASC')
                ->get();
    }

    public static function insertTest()
    {
        return DB::table('publishers')->insert(
                ['id' => 1, 'name' => 'Helion'],
                ['id' => 2, 'name' => 'Czarne'],
                ['id' => 3, 'name' => 'Albatros']
        );
    }

    public static function search(int $id)
    {
        return Publishers::find($id);
    }

    public static function insert(array $input)
    {
        $publishers = new Publishers();
        self::saveIt($input, $authors);
    }

    public static function updateIt(int $id, array $input)
    {
        $publishers = Publishers::find($id);
        self::saveIt($input, $authors);
    }

    private static function saveIt(array $input, $model)
    {
        if (!empty($input['name'])) {
            $model->name = $input['name'];
            $model->save();
        } else {
            return true;
        }
    }
}
