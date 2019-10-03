Feature: Play the game
    As Player
    In order to play a game of Rock, Paper or Scissors against the computer.
    I would like to be able to pick one of three game options.

    Scenario: Player visits site and plays the game
      Given I visit the landing page
      Then I should see "Pick your weapon!"
      And I click "rock" button
      Then I should see "1"