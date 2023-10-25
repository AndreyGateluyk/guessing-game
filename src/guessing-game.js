class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    
    guess() {
      return this.medium = Math.round((this.min + this.max) / 2)
    }

    lower() {
      this.max = this.medium 
    }

    greater() {
      this.min = this.medium
    }
}

module.exports = GuessingGame;
