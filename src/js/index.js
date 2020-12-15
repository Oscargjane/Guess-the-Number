import '../scss/main.scss';
import Scores from './model';
import * as appView from './view';
import { DOMElements } from './base';

const stateApp = {
  scores: new Scores(),
};

const initApp = () => {
  // Generate secret number
  stateApp.secretNumber = stateApp.scores.generateRandomNumber();

  // Reset score in data model and UI
  const resetScore = (stateApp.scores.score = 20);
  appView.displayScore(resetScore);

  // Reset secret number box of the data model and UI
  appView.displaySecretNumber();

  // Clear user input
  appView.cleanUserInput();

  // Show game start message
  DOMElements.message.textContent = 'Start guessing...';

  // Reset style theme
  appView.removeWinnerTheme();
};

const checkNumberController = () => {
  // Get number entered by user and secret number generated randomly
  const guess = appView.getUserInput();
  const secretNumber = stateApp.secretNumber;

  // Compare secret number with user input
  const newScore = stateApp.scores.decreaseScore(guess);
  const newHighScore = stateApp.scores.setHighScore(guess);

  // Show message in UI based on number entered by user
  appView.displayMessage(newScore, secretNumber, guess);

  // Display score and high score on the UI
  appView.displayScore(newScore);
  appView.displayHighScore(newHighScore);

  // Show secret number in UI when guessing hidden number
  appView.displaySecretNumber(secretNumber, guess);
  appView.addWinnerTheme(secretNumber, guess);
};

// Event Listener Init App
window.addEventListener('load', initApp);
DOMElements.newGameButton.addEventListener('click', initApp);

// Event Listener check button
DOMElements.checkButton.addEventListener('click', checkNumberController);
