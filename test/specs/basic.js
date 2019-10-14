const assert = require('assert');

describe('webdriver.io page', () => {
  it('should run a custom script', () => {
    browser.url('https://webdriver.io');

    // IE11 fails here
    browser.execute(() => {
      // No contents needed
    });
  })
});
