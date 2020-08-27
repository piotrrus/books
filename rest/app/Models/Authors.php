<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;

class Authors extends Model implements CrudInterface
{

    protected $table = 'authors';

    public function books()
    {
        return $this->hasMany(Books::class);
		//->select('name', 'author_id');
    }

    public static function getAll()
    {
        //return $this->hasMany('App\Book', 'book_author_id', 'author_id');
        return DB::table('authors')
                        ->select('id', 'name')
                        ->orderBy('name', 'ASC')
                        ->get();
    }

    public static function search(int $id)
    {
        return Authors::find($id);
    }

    public static function insert(array $input)
    {
        $authors = new Authors();
        self::saveIt($input, $authors);
    }

    public static function updateIt(int $id, array $input)
    {
        $authors = Authors::find($id);
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
