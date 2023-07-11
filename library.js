const { Builder, By, until } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com/');

var submitBtn = driver.findElement(By.css('body > main > section > div > div.col-md-2 > button'));
driver.findElement(By.css('input')).sendKeys('user123');

driver.wait(function() {
  return submitBtn.getCssValue('opacity')
  .then(function(result) {
    return result === '1';
  });
}, 15000).then(function() {
  submitBtn.click();
});

driver.wait(until.elementLocated(By.css('.alert-success')), 10000)
  .then(function () {
    return driver.findElement(By.css('.alert-success')).getText();
  })
  .then(function (txt) {
    console.log('Alert success text is : ' + txt);
  })
  .catch(function (error) {
    // Handle any errors that occur
    console.log("Error: " + error);
  })
  



// driver.wait(until.elementLocated(By.css('.alert-success')), 10000)
//   .then(function () {
//     return driver.findElement(By.css('.alert-success')).getText();
//   })
//   .then(function (txt) {
//     console.log('Alert success text is : ' + txt);
//   })
//   .catch(function (error) {
//     // Handle any errors that occur
//     console.log("Error: " + error);
//   })
//   .finally(function () {
//     driver.quit();
//   });

// driver.findElements(By.css('nav li'))
//   .then(function (elements) {
//     // Map and log the text of each element
//     elements.map(function (element) {
//       element.getText().then(function (txt) {
//         console.log('txt all menu : ' + txt)
//       });
//     });
//   })
//   .catch(function (error) {
//     // Handle any errors that occur
//     console.log("Error: " + error);
//   });

 
