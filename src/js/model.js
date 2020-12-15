export default class Scores {
  constructor(score = 20, highScore = 0) {
    this.score = score;
    this.highScore = highScore;
  }

  generateRandomNumber(min = 1, max = 20) {
    this.secretNumber = Math.floor(
      Math.random() * Math.floor(max - min + 1) + min
    );
    return this.secretNumber;
  }

  decreaseScore(guess) {
    if (!guess || guess < 0 || guess > 20) return this.score;

    return guess !== this.secretNumber && this.score > 0
      ? (this.score -= 1)
      : this.score;
  }

  setHighScore(guess) {
    if (this.secretNumber !== guess) return this.highScore;

    return this.score > this.highScore
      ? (this.highScore = this.score)
      : this.highScore;
  }
}
