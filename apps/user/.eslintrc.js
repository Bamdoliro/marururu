module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-custom`
    extends: ['@maru/eslint/custom', '@maru/eslint/query'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
};
