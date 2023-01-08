import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const host = 'kool-php.test';
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        https: false,
        host: true,
        port: 3000,
        hmr: { host: host, protocol: 'ws' },
    },
});
