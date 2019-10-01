const { Given, Then, When, After } = require("cucumber");

Given('I visit the landing page', function () {
  return this.openHomePage();

});

After(async function() {
  return await this.closeHomePage();
})

Then('I should see {string}', function (content) {
  return this.pageHasTextContent(content);
});

Given('I click on {string}', function (string) {
  return this.clickOnButton(string);
});

