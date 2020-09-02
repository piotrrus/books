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
Route::post('authors/create', 'Api\AuthorsController@create');
Route::post('authors/update/{id}', 'Api\AuthorsController@update');

Route::get('books', 'Api\BooksController@index');
Route::get('books/show/{id}', 'Api\BooksController@show');
Route::get('books/update/{id}', 'Api\BooksController@update');
Route::get('books/create', 'Api\BooksController@create');
Route::post('books/title/{title}', 'Api\BooksController@title');
Route::post('books/author/{author}', 'Api\BooksController@author');

Route::get('genres', 'Api\GenresController@index');
Route::post('genres/update/{id}', 'Api\GenresController@update');
Route::post('genres/create', 'Api\GenresController@create');
Route::get('publishers', 'Api\PublishersController@index');
Route::post('publishers/update/{id}', 'Api\PublishersController@update');
Route::post('publishers/store', 'Api\PublishersController@store');

Route::get('popular', 'Api\BooksController@mostPopular');
Route::get('rated', 'Api\BooksController@rated');
Route::get('latest', 'Api\BooksController@latest');
