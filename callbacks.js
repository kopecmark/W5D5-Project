class Clock {
  constructor() {
    const start = new Date();

    this.hours = start.getHours();
    this.min = start.getMinutes();
    this.sec = start.getSeconds();

    // let clock = new Clock();
    this.printTime();

    setInterval(this._tick.bind(this), 0.0001);
  }
  printTime() {
    console.log(`${this.hours}:${this.min}:${this.sec}`);

  }

  _tick() {

    if ( this.sec < 59){
      this.sec += 1;
    } else {
        if (this.min < 59){
          this.sec = 0;
          this.min += 1;
        } else {
          if (this.hours < 23){
            this.hours += 1;
            this.min = 0;
            this.sec = 0;
          } else {
            this.hours = 0;
            this.min = 0;
            this.sec = 0;
          }
        }
      }
    this.printTime();
  }
}

// find current time
// parse time, increment
// conditional for increments
// print time at end

const clock = new Clock();
