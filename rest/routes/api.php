<?php

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('authors', 'Api\AuthorsController@index');
Route::get('authors/show/{id}', 'Api\AuthorsController@show');
Route::get('authors/store', 'Api\AuthorsController@store');
Route::get('authors/update/{id}', 'Api\AuthorsController@update');

Route::get('books', 'Api\BooksController@index');
Route::get('books/show/{id}', 'Api\BooksController@show');
Route::get('books/title/{title}', 'Api\BooksController@title');
Route::get('books/author/{author}', 'Api\BooksController@author');

Route::get('genres', 'Api\GenresController@index');
Route::get('genres/update/{id}', 'Api\GenresController@update');
Route::get('genres/store', 'Api\GenresController@update');
Route::get('publishers', 'Api\PublishersController@index');
Route::get('publishers/update/{id}', 'Api\PublishersController@update');
Route::get('publishers/store', 'Api\PublishersController@store');

Route::get('popular', 'Api\BooksController@mostPopular');
Route::get('rated', 'Api\BooksController@rated');
Route::get('latest', 'Api\BooksController@latest');
