<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;

Route::get('/translations/{lang}', [LanguageController::class, 'getTranslations']);