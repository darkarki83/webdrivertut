const { Builder, By, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com/');

driver.findElement(By.css('input')).sendKeys('user123@gmail.com');

driver.findElement(By.css('body > main > section > div > div.col-md-2 > button')).click();

driver.findElements(By.css('nav li'))
  .then(function (elements) {
    // Map and log the text of each element
    elements.map(function (element) {
      element.getText().then(function (txt) {
        console.log('txt all menu : ' + txt)
      });
    });
  })
  .catch(function (error) {
    // Handle any errors that occur
    console.log("Error: " + error);
  });

 
