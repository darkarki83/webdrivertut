const { Builder, By, until } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');

suite(function (env) {
  describe('Library app scenarios ', function () {
    let driver;

    before(async function () {
      driver = new Builder().forBrowser('chrome').build();
      driver.get('https://library-app.firebaseapp.com/');
    });

    after(() => driver.quit());

    it('Changes button opacity upon email being filled out', async function () {
      var submitBtn = driver.findElement(By.css('body > main > section > div > div.col-md-2 > button'));
      driver.findElement(By.css('input')).sendKeys('user123@gmail.com');
      driver.wait(function () {
        return submitBtn.getCssValue('opacity')
          .then(function (result) {
            return result === '1';
          });
      }, 5000)
    });
    it('GetID for success click', async function () {
      var submitBtn = driver.findElement(By.css('body > main > section > div > div.col-md-2 > button'));
      driver.findElement(By.css('input')).sendKeys('user123');
      submitBtn.click();
      driver.wait(until.elementLocated(By.css('.alert-success')), 10000)
        .then(function () {
          return driver.findElement(By.css('.alert-success')).getText();
        })
        .then(function (txt) {
          console.log('Alert success text is : ' + txt);
        })

    });
    it('Find all nav', async function () {
      driver.findElement(By.css('nav')).getText().then(function (txt) {
        console.log(txt)
      } );
    });
  });
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


