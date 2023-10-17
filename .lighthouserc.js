module.exports = {
    ci: {
        collect: {
            startServerCommand: 'pnpm dev',
            numberOfRuns: 1,
            url: ['http://localhost:3000', 'http://localhost:3001'],
            settings: { preset: 'desktop' },
        },
        upload: {
            target: 'filesystem',
            outputDir: './lhci_reports',
            reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
        },
    },
};
