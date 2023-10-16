module.exports = {
    ci: {
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
    },
    upload: {
        target: 'filesystem',
        outputDir: './lhci_reports',
        reportFilenamePattern: '%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%',
    },
};
