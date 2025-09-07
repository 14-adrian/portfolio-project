<?php

use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;

// API para traducciones
Route::get('/api/translations/{lang}', [LanguageController::class, 'getTranslations']);

// Todas las rutas van a React
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*');
