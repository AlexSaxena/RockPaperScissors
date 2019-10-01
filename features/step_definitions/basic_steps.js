const { Given, Then, When } = require("cucumber");

Given('I visit the landing page', function () {
  return this.openHomePage();

});

Then('I should see {string}', function (content) {
  return this.pageHasTextContent(content);
});

Then('I should see {string} button', function (string) {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});

Given('I click on {string} button', function (string) {
  return await this.clickOnButton(string);
});

