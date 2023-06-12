<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserControllerr;
use App\Http\Controllers\EventController;
use Illuminate\Console\Scheduling\Event;
use PHPUnit\Framework\Attributes\Group;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//---------group---------
Route::middleware('auth:sanctum')->get('/group', function (Request $request) {
    return $request->group();
});

Route::get('/group', [GroupController::class, 'index']);
Route::post('/group', [GroupController::class, 'store']);
Route::get('/group/{id}', [GroupController::class, 'show']);
Route::put('/group/{id}', [GroupController::class, 'update']);
Route::delete('/group/{id}', [GroupController::class, 'destroy']);


//--------USERs---------
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']);
Route::delete('/users/{id}', [UserController::class, 'destroy']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');



//--------Event
Route::middleware('auth:sanctum')->get('/event', function (Request $request) {
    return $request->user();
});

Route::get('/event', [EventController::class, 'index']);
Route::get('/event/{id}', [EventController::class, 'show']);
Route::post('/event', [EventController::class, 'store']);
Route::put('/event/{id}', [EventController::class, 'update']);
Route::delete('/event/{id}', [EventController::class, 'destroy']);
Route::post('/login', [EventController::class, 'login']);
Route::post('/logout', [EventController::class, 'logout'])->middleware('auth:sanctum');
