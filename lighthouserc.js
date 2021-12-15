module.exports = {
  ci: {
    collect: {
      // Static site
      staticDistDir: 'dist/apps/spiderumapp/.next',
      // Dynamic site
      startServerCommand: 'npx nx serve spiderumapp',
      url: ['http://localhost:4200'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
