'use strict'

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM','11AM','12PM', '1PM', '2PM','3PM','4PM','5PM','6PM','7PM'];


//------------Constructor------------//
function storeLocation(location, minCust, maxCust, avgSales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.hourlySales = [];
  this.dailyTotal = 0;
  storeLocation.all.push(this);
};

storeLocation.all = [];

//--------------Calculating Random Cookie Sales--------------//
storeLocation.prototype.calcAvgSales = function() {
  for (let i = 0; i <hours.length; i++) { 
    let cookiesSold = Math.floor((Math.random() * this.maxCust) + this.minCust) * Math.floor(this.avgSales); 
    this.hourlySales.push(cookiesSold);
    this.dailyTotal = this.dailyTotal + cookiesSold;
  }
};
//----------------Calculating Hourly Cookie Sales----------------//
storeLocation.prototype.calcHourlySales = function() {
  for(let i = 0; i < everyStore.length; i++) {
    let hourlySales = 0;
    for(let j=0; j < hours[i].length;i++){
      hourlySales += everyStore;
    }
  }  
};

//--------------Calculating A Random Number of Customers--------------//
storeLocation.prototype.calcRandomCustomers = function() {
  return (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSales
};


//----------Header Render-----------//
function renderHeader() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let headerEl = document.createElement('th');
  rowEl.appendChild(headerEl);
  for (let i = 0; i < hours.length; i++) {
    headerEl = document.createElement('th');
    headerEl.textContent = hours[i];
    rowEl.appendChild(headerEl); 
  }
  headerEl = document.createElement('th');
  headerEl.innerText = 'Daily Total';
  rowEl.appendChild(headerEl);
  parentEl.appendChild(rowEl);
};
renderHeader();

//------------Table Row Render------------//
storeLocation.prototype.renderTableRow = function() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let dataEl = document.createElement('td');
  dataEl.innerText = this.location;
  rowEl.appendChild(dataEl);
  for(let i=0; i< this.hourlySales.length; i++) {
    let dataEl = document.createElement('td');
    dataEl.innerText = this.hourlySales[i];
    rowEl.appendChild(dataEl);
  };
  dataEl = document.createElement('td');
  dataEl.innerText = this.dailyTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
};


let Seattle = new storeLocation('Seattle', 23, 65, 6.3);
let Lima = new storeLocation('Lima', 2, 16, 4.6);
let Paris = new storeLocation('Paris', 20, 38, 2.3);
let Dubai = new storeLocation('Dubai',11, 38, 3.7);
let Tokyo = new storeLocation('Tokyo', 3, 24, 1.2);

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


//---------------Footer Render---------------//
// storeLocation.prototype.
function renderFooter() {
  let parentEl = document.getElementById('sales-data');
  let rowEl = document.createElement('tr');
  let dataEl = document.createElement('td');
  dataEl.innerText = 'Hourly Totals';
  rowEl.appendChild(dataEl);

  let grandTotal = 0;
  for(let i = 0; i < hours.length; i++) {
    let dataEl = document.createElement('td');
    let hourlyTotals = 0;
    for (let j = 0; j < storeLocation.all.length; j++);{
      hourlyTotals = hourlyTotals + storeLocation.all[j].hourlyTotals[i];
      grandTotal = grandTotal + storeLocation.all[j].hourlyTotals[i];
    }
    dataEl.innerText = hourlyTotals;
    rowEl.appendChild(dataEl);
  }
  dataEl = document.createElement('td');
  dataEl.innerText = grandTotal;
  rowEl.appendChild(dataEl);
  parentEl.appendChild(rowEl);
}
renderFooter();






































// ---------------- Lab 6 ------------------//
// let Seattle = {
//   // location: Seattle,
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   cookiesSold:[],
  
//   // generate a random number of customers per hour (it will use 'this')
//   randomNumCust: function() {
//       for(let i = 0; i < hours.length; i++) {
//         return Math.floor((Math.random() * this.maxCust)+ this.minCust);
//         }
//       }
//     };

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
