<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\BaseController;
use Illuminate\Http\Request;
use App\Models\Publishers;

class PublishersController extends BaseController
{

    public function index()
    {
        //$test = Publishers::insertTest();
        //var_dump($test);
        $publishers = Publishers::getAll();
        return $this->response($publishers, 'publishers');
    }
}
