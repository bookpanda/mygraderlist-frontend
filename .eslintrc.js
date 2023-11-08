// @ts-check

/** @satisfies {import('eslint').Linter.Config} */
const config = {
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/jsx-runtime',
    ],
    plugins: ['prettier', 'simple-import-sort'],
    rules: {
        'no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};

module.exports = config;
