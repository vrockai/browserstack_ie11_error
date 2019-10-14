exports.config = {
  runner: 'local',
  path: '/',
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [],
  maxInstances: 10,

  // Browserstack config part 1
  capabilities: [{
    browser: 'IE',
    browser_version: '11.0'
  }],
  user: process.env.BROWSER_STACK_USERNAME,
  key: process.env.BROWSER_STACK_ACCESS_KEY,
  browserstackLocal: true,

  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://webdriver.io',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  // Browserstack config part 2
  services: ['browserstack'],

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
};
