import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '')
    const host = env.APP_URL;
    return {
        plugins: [
            laravel({
                input: [
                    'resources/css/app.css',
                    'resources/js/app.js',
                ],
                refresh: true,
            }),
            {
                name: 'blade',
                handleHotUpdate({ file, server }) {
                    if (file.endsWith('.blade.php')) {
                        server.ws.send({
                            type: 'full-reload',
                            path: '*',
                        });
                    }
                },
            },
        ],
        server: {
            https: false,
            host: true,
            port: 3000,
            hmr: { host: host, protocol: 'ws' },
        },
    }
});
