<?php

namespace App\Http\Controllers\Api;

// use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;
use App\Models\Books;
// use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController;
use App\Http\Requests\BookFormRequest;
use App\Http\Resources\BooksResource;

class BooksController extends BaseController
{

    public function index()
    {

        $books = Books::getAll();
        return $this->response($books, 'Books');
    }

    public function mostPopular()
    {
        $books = Books::mostPopular();
        return $this->response($books, 'Most popular books');
    }

    public function rated()
    {
        $books = Books::rated();
        return $this->response($books, 'Highest rated books');
    }

    public function latest()
    {
        $books = Books::latest();
        return $this->response($books, 'Latest publishing');
    }
}
