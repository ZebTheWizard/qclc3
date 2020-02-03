<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('spa');
});

Route::get('/files', function () {
    return view('filemanager');
});

Route::get('/page/{file}', function ($file) {
    return view("pages.$file");
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
