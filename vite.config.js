import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    server: {
        proxy: {
          // Proxy API requests to Laravel
          '/api': 'http://localhost', // Adjust this if needed based on your API base URL
        },
        cors: {
          origin: 'http://laravel-fortify-demo.local', // Allow your Laravel app to access Vite
          methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
          allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        },
      },
});
