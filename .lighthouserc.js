module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000'],
            collect: {
                numberOfRuns: 5,
            },
        },
        assert: {
            assertions: {
                // performance 카테고리 점수가 90점 미만이면 warning
                'categories:performance': ['warn', { minScore: 0.9 }],
                // accessibility 가 100점 미만이면 error
                'categories:accessibility': ['error', { minScore: 1 }],
                // seo 가 100점 미만이면 error
                'categories:seo': ['error', { minScore: 1 }],
            },
        },
        upload: {
            startServerCommand: 'npm run start',
            target: 'temporary-public-storage',
        },
    },
    upload: {
        target: 'filesystem',
        outputDir: './lhci_reports',
        reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
};
