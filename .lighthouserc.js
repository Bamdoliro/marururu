module.exports = {
    ci: {
        collect: {
            startServerCommand: 'pnpm start',
            numberOfRuns: 1,
            url: ['http://localhost:3000'],
            settings: { preset: 'desktop' },
        },
        upload: {
            target: 'filesystem',
            outputDir: './lhci_reports',
            reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
        },
    },
};
