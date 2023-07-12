const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Library app scenarios', function () {
  let driver;

  before(async function () {
    this.timeout(10000);
    driver = await new Builder().forBrowser('chrome').build();
    
  });

  after(async function () {
    await driver.quit();
  });

  it('Changes button opacity upon email being filled out', async function () {
    await driver.get('https://library-app.firebaseapp.com/');
    const submitBtn = await driver.findElement(By.css('body > main > section > div > div.col-md-2 > button'));
    await driver.findElement(By.css('input')).sendKeys('user123@gmail.com');
    await driver.wait(async function () {
      const result = await submitBtn.getCssValue('opacity');
      return result === '1';
    }, 10000);
  });

  it('Get ID for success click', async function () {
    await driver.get('https://library-app.firebaseapp.com/');
    const submitBtn = await driver.findElement(By.css('body > main > section > div > div.col-md-2 > button'));
    await driver.findElement(By.css('input')).sendKeys('user123@gmail.com');
    await submitBtn.click();
    const successAlert = await driver.wait(until.elementLocated(By.css('.alert-success')), 10000);
    const successText = await successAlert.getText();
    console.log('Alert success text is: ' + successText);
  });

  it('Find all nav', async function () {
    await driver.get('https://library-app.firebaseapp.com/');
    const navText = await driver.findElement(By.css('nav')).getText();
    console.log(navText);
  });
});
