module.exports = {
    extends: ['next', 'turbo', 'prettier'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react-hooks/rules-of-hooks': 'off',
    },
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
};
