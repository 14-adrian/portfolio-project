import fs from 'fs-extra';
import path from 'path';

// Copiar imágenes y archivos estáticos después del build
const assetsToCopy = [
    { from: 'static/img', to: 'public/img' },
    { from: 'static/docs', to: 'public/docs' }
];

assetsToCopy.forEach(({ from, to }) => {
    if (fs.existsSync(from)) {
        fs.copySync(from, to, { overwrite: true });
        console.log(`Copied ${from} to ${to}`);
    }
});