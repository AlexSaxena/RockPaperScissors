const { Given, Then, When, After } = require("cucumber");

   Given('I visit the landing page', function () {
    return this.openHomePage();
  });

  After(async function() {
  return await this.closeHomePage();
  })

  Then('I should see {string}', function (content) {
    return this.pageHasTextContent(content)
  });

  Then('I click {string} button', async function(button) {
    return await this.clickOnButton(button)
  });