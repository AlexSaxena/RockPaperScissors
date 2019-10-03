Feature: Play the game
    As a User
    In order to play a game of Rock, Paper or Scissors against the computer.
    I would like to be able to visit the site and pick one of three game options.
    I would like to get an output telling me if I win, lose or draw

Scenario: User visits the game site
    Given I visit the landing page
    Then I should see "Let's play some Rock, Paper, Scissors"
    And I should see "rock"

Scenario: User plays the game
    Given I visit the landing page
    And I click on "paper"
    Then I should see "Wow it looks like you"