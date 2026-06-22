import { defineConfig } from 'eslint/config';
import azuriru, { svelte } from 'eslint-config-azuriru';
import svelteConfig from './svelte.config.js';

export default defineConfig([
    {
        // files: ['**/*.svelte'],
        'extends': [azuriru, svelte(svelteConfig)],
        rules: {
            'import/dynamic-import-chunkname': 'off'
        }
    }
]);