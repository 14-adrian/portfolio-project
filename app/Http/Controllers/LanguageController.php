<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function getTranslations($lang)
    {
        $translations = [];

        if (in_array($lang, ['en', 'es'])) {
            $filePath = lang_path("{$lang}/portfolio.json");

            if (file_exists($filePath)) {
                $translations = json_decode(file_get_contents($filePath), true);
            }
        }

        return response()->json($translations);
    }
}
