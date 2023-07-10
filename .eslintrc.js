module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ['@maru/eslint/common'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
};
