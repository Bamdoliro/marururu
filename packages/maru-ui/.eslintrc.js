/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@maru/eslint-config/react-ts'],
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
