<?php

namespace App\Models;

use DB;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use App\Interfaces\CrudInterface;

class Books extends Model implements CrudInterface
{
    const AUTHOR = 'author';
    const TITLE  = 'title';

    protected $table    = 'books';
    protected $fillable = [
        'author_id',
        'title'
    ];

    public function authors()
    {
        return $this->belongsTo('App\Models\Authors', 'author_id', 'id')
                ->select(array('id', 'name'));
    }

    /**
     *
     * @return Collection with book status
     * according to when book is rented or not
     */
    public static function getAll()
    {
        $table = self::getDBTable();
        return $table->orderBy('id', 'ASC')
                ->get();

//        return DB::table('books')
//                ->select(
//                    'books.id', 'title', 'id_author', 'publishers.name',
//                    'authors.name', 'rate', 'votes'
//                )
//                ->leftJoin('genres', 'genres.id', '=', 'books.id_genre')
//                ->leftJoin('authors', 'authors.id', '=', 'books.id_author')
//                ->leftJoin('publishers', 'publishers.id', '=',
//                    'books.id_publisher')
//                ->orderBy('id', 'ASC')
//                ->get();
    }

    /**
     * shows choosen book data
     * @param int $id
     * @return type
     */
    public static function search(int $id)
    {
        return Books::find($id);
    }

    public static function searchBy($param, $method)
    {
        $table = $this->getSearchMethod($param, $method);
        return $table->leftJoin('authors', 'authors.id', '=',
                'books.id_author')
            ->leftJoin('rentals', 'rentals.id_book', '=', 'books.id')
            ->get();
        // return $table;
    }

    private static function getDBTable()
    {
        return DB::table('books')
                ->select(
                    'books.id', 'title', 'id_author', 'publishers.name',
                    'authors.name', 'rate', 'votes'
                )
                ->leftJoin('genres', 'genres.id', '=', 'books.id_genre')
                ->leftJoin('authors', 'authors.id', '=', 'books.id_author')
                ->leftJoin('publishers', 'publishers.id', '=',
                    'books.id_publisher');
    }

    private function getSearchMethod($param, $method)
    {
        $table = self::getDBTable();

        if ($method == self::TITLE) {
            $table = self::queryForTitle($table, $param);
        } elseif ($method == self::AUTHOR) {
            $table = self::queryForAuthor($table, $param);
        }
        return $table;
    }

    public static function searchByTitle(string $title)
    {
        $table = self::getDBTable();
        $table = self::queryForTitle($table, $title);
        $table = $table->get();
        return $table;
    }

    public static function searchByAuthor(string $author)
    {
        $table = self::getDBTable();
        $table = self::queryForAuthor($table, $author);
        $table = $table->get();
        return $table;
    }

    private static function queryForTitle($table, $param)
    {
        return $table->where('books.title', 'LIKE', '%' . $param . '%');
    }

    private static function queryForAuthor($table, $param)
    {
        //dd($param);
        return $table->where('authors.name', 'LIKE', '%', $param . '%');
    }

    public static function mostPopular()
    {
        $table = self::getDBTable();
        return $table->orderBy('votes', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function rated()
    {
        $table = self::getDBTable();
        return $table->orderBy('rate', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function latest()
    {
        $table = self::getDBTable();
        return $table->orderBy('books.created_at', 'DESC')
                ->limit(4)
                ->get();
    }

    public static function insert(array $request)
    {
        $books = new Books();
        return self::saveIt($request, $books);
    }

    public static function updateIt(int $id, array $request)
    {
        $books = Books::find($id);
        return self::saveIt($request, $books);
    }

    private static function saveIt($input, $model)
    {
        $input = array_filter($request->all());
        if (!empty($input['title']) && !empty($input['id_author'])) {
            $model->title     = $input['title'];
            $model->id_author = $input['id_author'];
            $model->save();
        } else {
            return true;
        }
    }
}
