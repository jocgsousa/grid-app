module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        radix: 'off',
        'react/state-in-constructor': 'off',
        'react/jsx-n-bind': 'off',
        'react/destructuring-assignment': 'off',
        'no-alert': 'off',
        'jsx-a11y/alt-text': 'off',
        'react/jsx-props-no-spreading': 'off',
        'consistent-return': 'off',
    },
};
