module.exports = {
  ci: {
    collect: {
      // Dynamic site
      startServerCommand: 'npx nx serve spiderumapp',
      url: ['http://localhost:4200'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
