'use strict'

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM','11AM','12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM'];

let Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  // generate a random number of customers per hour (it will use 'this')
  randomNumCust: function() {
    return Math.floor((Math.random() * this.maxCust)+ this.minCust);
  },
};


let Tokyo ={
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  randomNumCust: function() {
    return Math.floor((Math.random() * this.maxCust) + this.minCust);
  }
};

let Dubai ={
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  randomNumCust: function() {
    return Math.floor((Math.random() * this.maxCust) + this.minCust);
  }
};

let Paris ={
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  randomNumCust: function() {
    return Math.floor((Math.random() * this.maxCust) + this.minCust);
  }
};

let Lima ={
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  randomNumCust: function() {
    return Math.floor((Math.random() * this.maxCust) + this.minCust);
  }
};

// Calling RNG Functions Here
let randomNumSeattle = Seattle.randomNumCust();
console.log(randomNumSeattle + ' Seattle');

let randomNumTokyo = Tokyo.randomNumCust();
console.log(randomNumTokyo + ' Tokyo');

let randomNumDubai = Dubai.randomNumCust();
console.log(randomNumDubai + ' Dubai');

let randomNumParis = Paris.randomNumCust();
console.log(randomNumParis + ' Paris');

let randomNumLima = Lima.randomNumCust();
console.log(randomNumLima + ' Lima');


