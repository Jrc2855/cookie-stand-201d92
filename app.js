'use strict'

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM','11AM','12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM'];

function storeLocation(location, minCust, maxCust, avgSales) {
  this.location = location;
  this.mincust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.dailyTotal = 0;
  // storeLocation.all.push(this);
};

storeLocation.all = [];

storeLocation.prototype.calcAvgSales = function() {
  for (let i = 0; i <hours.length; i++) { 
    let cookiesSold = Math.floor((Math.random() * this.maxCust) + this.minCust);
    this.hourlySales.push(cookiesSold);
    this.dailyTotal = this.dailyTotal + cookiesSold;
    // return Math.floor((Math.random() * this.maxCust)+ this.minCust);
  }
};
storeLocation.prototype.calcRandomCustomers = function() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSales
};

function renderHeader() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let headerEl = document.createElement('th');
  rowEl.appendChild(headerEl);
  for (let j = 0; j < hours.length; j++) {
    headerEl = document.createElement('th');
    headerEl.textContent = hours[j];
    rowEl.appendChild(headerEl);
  }
  headerEl = document.createElement('th');
  headerEl.innerText = 'Daily Location Total';
  rowEl.appendChild(headerEl);
  parentEl.appendChild(rowEl);
};

renderHeader();

storeLocation.prototype.renderTableRow = function() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let dataEl = document.createElement('td');
  dataEl.innerText = this.location;
  rowEl.appendChild(dataEl);
  for(let sale=0; sale< this.hourlySales.length; sale++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[sale];
    rowEl.appendChild(dataEl);
  };
  dataEl = document.createElement('td');
  dataEl.innerText = this.dailyTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
};

// function renderFooter() {
//   let parentEl = document.getElementById('sales-data');
//   let rowEl = document.getElementById('tr');
//   let dataEl = document.getElementById('td');
//   dataEl.innerText = 'Totals';
//   rowEl.appendChild(dataEl);

//   let grandTotal = 0;
//   for(let k = 0; k < hours.length; k++) {
//     let dataEl = document.createElement('td');
//     let sum = 0;
//     for (let l = 0; l < storeLocation.all.length; l++);{
//       sum = sum + storeLocation.all[l].hourlySales[k];
//       grandTotal = grandTotal + storeLocation.all[l].hourlySales[k]; 
//     }
//     dataEl.innerText = sum;
//     rowEl.appendChild(dataEl);
//   }
//   dataEl = document.createElement('td');
//   dataEl.innerText = grandTotal;
//   rowEl.appendChild(dataEl);
//   parentEl.appendChild(rowEl);
// }
// renderFooter();

let Seattle = new storeLocation('Seattle', 23, 65, 6.3);
let Lima = new storeLocation('Lima', 2, 16, 4.6);
let Paris = new storeLocation('Paris', 20, 38, 2.3);
let Dubai = new storeLocation('Dubai',11, 38, 3.7);
let Tokyo = new storeLocation('Tokyo', 3, 24, 1.2)

Seattle.calcAvgSales();
Seattle.renderTableRow();

Lima.calcAvgSales();
Lima.renderTableRow();

Paris.calcAvgSales();
Paris.renderTableRow();

Dubai.calcAvgSales();
Dubai.renderTableRow();

Tokyo.calcAvgSales();
Tokyo.renderTableRow();

console.log(storeLocation.all);







































// ---------------- Lab 6 ------------------//
let TestSeattle = {
  // location: Seattle,
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  cookiesSold:[],
  
  // generate a random number of customers per hour (it will use 'this')
  randomNumCust: function() {
      for(let i = 0; i < hours.length; i++) {
        return Math.floor((Math.random() * this.maxCust)+ this.minCust);
        }
      }
    };
    console.log(TestSeattle.randomNumCust);

// let Tokyo ={
//   minCust: 3,
//   maxCust: 24,
//   avgCookies: 1.2,
//   cookiesSold:[],
//   randomNumCust: function() {
//     return Math.floor((Math.random() * this.maxCust) + this.minCust);
//   }
// };

// let Dubai ={
//   minCust: 11,
//   maxCust: 38,
//   avgCookies: 3.7,
//   cookiesSold:[],
//   randomNumCust: function() {
//     return Math.floor((Math.random() * this.maxCust) + this.minCust);
//   }
// };

// let Paris ={
//   minCust: 20,
//   maxCust: 38,
//   avgCookies: 2.3,
//   cookiesSold:[],
//   randomNumCust: function() {
//     return Math.floor((Math.random() * this.maxCust) + this.minCust);
//   }
// };

// let Lima ={
//   minCust: 2,
//   maxCust: 16,
//   avgCookies: 4.6,
//   cookiesSold:[],
//   randomNumCust: function() {
//     return Math.floor((Math.random() * this.maxCust) + this.minCust);
//   }
// };


// // Calling RNG Functions Here
// let randomNumSeattle = Seattle.randomNumCust();
// console.log(randomNumSeattle + ' Seattle');

// let randomNumTokyo = Tokyo.randomNumCust();
// console.log(randomNumTokyo + ' Tokyo');

// let randomNumDubai = Dubai.randomNumCust();
// console.log(randomNumDubai + ' Dubai');

// let randomNumParis = Paris.randomNumCust();
// console.log(randomNumParis + ' Paris');

// let randomNumLima = Lima.randomNumCust();
// console.log(randomNumLima + ' Lima');
