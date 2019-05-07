module.exports = {
  linters: {
    '*.{ts,tsx}': ['eslint --fix', 'git add'],
  },
  ignore: [
    '**/build',
    '**/dist',
    '**/react-app.env.d.ts',
    '**/serviceWorker.ts',
  ],
};