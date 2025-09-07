import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leer archivos de traducción
const en = JSON.parse(fs.readFileSync(path.join(__dirname, '../lang/en/portfolio.json')));
const es = JSON.parse(fs.readFileSync(path.join(__dirname, '../lang/es/portfolio.json')));

// Crear archivo combinado
const translations = { en, es };

// Escribir en public/
fs.writeFileSync(
    path.join(__dirname, '../public/translations.json'),
    JSON.stringify(translations, null, 2)
);

console.log('Translations generated successfully!');