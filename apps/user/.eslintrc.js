module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ['custom', 'plugin:@tanstack/eslint-plugin-query/recommended'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
};
