import { DOMElements } from './base';

export const getUserInput = () => parseInt(DOMElements.checkInput.value);

export const cleanUserInput = () => (DOMElements.checkInput.value = '');

export const displayMessage = (score, secretNumber, guess) => {
  const message = DOMElements.message;

  if (!guess) return (message.textContent = '⛔️ No number!');

  if (guess === secretNumber)
    return (message.textContent = '🎉 Correct Number!');

  if (score <= 0) return (message.textContent = '💥 You lost the game!');

  guess <= 0 || guess > 20
    ? (message.textContent = '⚠️ Number out of range!')
    : (message.textContent =
        guess > secretNumber ? '📈 To high!' : '📉 To low!');
};

export const displaySecretNumber = (secretNumber = -1, guess) => {
  secretNumber !== -1 && secretNumber === guess
    ? (DOMElements.secretNumberContainer.textContent = secretNumber)
    : (DOMElements.secretNumberContainer.textContent = '?');
};

export const displayScore = (curScore) => {
  if (curScore || curScore === 0)
    return (DOMElements.scoreContainer.textContent = curScore);
};

export const displayHighScore = (curHighScore) => {
  if (curHighScore || curHighScore === 0)
    return (DOMElements.highScoreContainer.textContent = curHighScore);
};

export const addWinnerTheme = (secretNumber, guess) => {
  const theme = DOMElements.winnerTheme;
  if (secretNumber === guess)
    return DOMElements.mainContainer.classList.add(theme);
};

export const removeWinnerTheme = () => {
  const theme = DOMElements.winnerTheme;
  const checkClass = DOMElements.mainContainer.classList.contains(theme);
  if (checkClass) return DOMElements.mainContainer.classList.remove(theme);
};
