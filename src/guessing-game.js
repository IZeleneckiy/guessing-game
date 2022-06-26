class GuessingGame {

    min;
    max;
    mid;

    constructor() {
    }

    setRange(min, max) {
        this.min = min + 1;
        this.max = max - 1;
        console.log('setRange max: ' + this.max + ' min: ' + this.min);
    }

    guess() {
        console.log('guess:' + (this.min + (this.max - this.min) / 2));
        this.mid = Math.round(this.min + (this.max - this.min) / 2);
        return Math.round(this.min + (this.max - this.min) / 2);
    }

    lower() {
        this.max = this.mid - 1;
        console.log('lower max: ' + this.max + ' min: ' + this.min);
    }

    greater() {
        this.min = this.mid + 1;
        console.log('greater max: ' + this.max + ' min: ' + this.min);
    }
}

module.exports = GuessingGame;
