<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use App\Models\Genres;

class GenresController extends BaseController
{

    public function index()
    {
        $genres = Genres::getAll();
        return $this->response($genres, 'genres');
    }
}
