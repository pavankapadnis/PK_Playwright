const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './Own_Palywright_Proj/tests',
  projects: [
    {
      name: 'Own_Palywright_Proj',
      use: {
        browserName: 'chromium',
        launchOptions: {
          args: ['--start-maximized'],
        },
        viewport: null,
      },
    },
  ],
});
