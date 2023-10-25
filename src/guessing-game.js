class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    
    guess() {
      return this.expected = Math.floor(Math.random() * (this.max - this.min)) + this.min;
    }

    lower() {
      this.max = Math.floor((this.min + this.max) / 2)
    }

    greater() {
      this.min = Math.floor((this.min + this.max) / 2)
    }
}

module.exports = GuessingGame;
