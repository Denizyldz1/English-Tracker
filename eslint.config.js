import js from '@eslint/js';
import sonarjs from 'eslint-plugin-sonarjs';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        ignores: [
            'tools/**',     // Node build script'leri (ESM, ayrı ortam)
            'data/**',
            '**/*.min.js'
        ]
    },
    js.configs.recommended,
    sonarjs.configs.recommended,
    {
        files: ['js/**/*.js'],
        languageOptions: {
            parser: tsParser,        // tip-farkında SonarJS kuralları için
            ecmaVersion: 2022,
            sourceType: 'script',    // IIFE/script tarzı (module değil)
            globals: {
                ...globals.browser,
                $: 'readonly',
                jQuery: 'readonly',
                Swal: 'readonly',
                supabase: 'readonly',
                KTConfig: 'readonly',
                KTSwal: 'readonly',
                KTHelpers: 'readonly',
                KTData: 'readonly',
                KTAuth: 'readonly'
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: true
        },
        rules: {
            'sonarjs/cognitive-complexity': ['error', 15],
            'no-var': 'error',
            'prefer-const': 'error',
            // KT* modülleri hem const olarak tanımlanır hem global olarak okunur;
            // config global'ini "yeniden tanım" sayma.
            'no-redeclare': ['error', { builtinGlobals: false }],
            // KT* module nesneleri tanımlandığı dosyada değil, diğer dosyalarda
            // kullanılır; "unused" sanılmasınlar.
            'no-unused-vars': ['error', { varsIgnorePattern: '^KT' }]
        }
    }
];
