Feature: Visit the game site
    As a User
    In order to play a game of Rock, Paper or Scissors against the computer.
    I would like to be able to visit the site and see the title

		Scenario: User visits the game site
			Given I visit the landing page
			Then I should see "Let's play some Rock, Paper, Scissors"
			And I should see "rock"
			And I should see "paper"
			And I should see "scissors"