'use strict';

//create store first
//create hourly calculator using getRandom from class notes


// create the store object
var pike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgerageSales: 6.3,
  hoursOfOperation: ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 '],
  hourlySales: [],
  totalDailySales: 0,
  getRandom: function (minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//create the store function

function cookiesByHourPike() {
  for (var i = 0; i < pike.hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(pike.getRandom(pike.minCustomer, pike.maxCustomer) * pike.avgerageSales);
    pike.hourlySales.push(randomHourlyNumber);
    pike.totalDailySales += pike.hourlySales[i];
    var newEl = document.createElement('li');
    var newText = document.createTextNode(pike.hoursOfOperation[i] + pike.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var newList = document.getElementById('pike-list');
    newList.appendChild(newEl);
  }

  // add it together
  var totalSalesPike = document.getElementById('pike-total');
  var complete = totalSalesPike.innerHTML;
  totalSalesPike.innerHTML = complete + pike.totalDailySales;
}
cookiesByHourPike();
///////////////////////comment line so i dont get confused/////////////////////////
// create the store
var seatac = {
  minCustomer: 3,
  maxCustomer: 24,
  avgerageSales: 1.2,
  hoursOfOperation: ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 '],
  hourlySales: [],
  totalDailySales: 0,
  getRandom: function (minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//create the store function

function cookiesByHourSeatac() {
  for (var i = 0; i < seatac.hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(seatac.getRandom(seatac.minCustomer, seatac.maxCustomer) * seatac.avgerageSales);
    seatac.hourlySales.push(randomHourlyNumber);
    seatac.totalDailySales += seatac.hourlySales[i];
    var newEl = document.createElement('li');
    var newText = document.createTextNode(seatac.hoursOfOperation[i] + seatac.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var newList = document.getElementById('seatac-list');
    newList.appendChild(newEl);
  }

  // add it together
  var totalSalesSeatac = document.getElementById('seatac-total');
  var complete = totalSalesSeatac.innerHTML;
  totalSalesSeatac.innerHTML = complete + seatac.totalDailySales;
}
cookiesByHourSeatac();

/////////////////comment line so I dont get lost////////////////
var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgerageSales: 3.7,
  hoursOfOperation: ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 '],
  hourlySales: [],
  totalDailySales: 0,
  getRandom: function (minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//create the store function

function cookiesByHourSeattleCenter() {
  for (var i = 0; i < seattleCenter.hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(seattleCenter.getRandom(seattleCenter.minCustomer, seattleCenter.maxCustomer) * seattleCenter.avgerageSales);
    seattleCenter.hourlySales.push(randomHourlyNumber);
    seattleCenter.totalDailySales += seattleCenter.hourlySales[i];
    var newEl = document.createElement('li');
    var newText = document.createTextNode(seattleCenter.hoursOfOperation[i] + seattleCenter.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var newList = document.getElementById('seattle-center-list');
    newList.appendChild(newEl);
  }

  // add it together
  var totalSalesSeattleCenter = document.getElementById('seatac-total');
  var complete = totalSalesSeattleCenter.innerHTML;
  totalSalesSeattleCenter.innerHTML = complete + seattleCenter.totalDailySales;
}
cookiesByHourSeattleCenter();

/////////////////command line capitol hill/////////////////////

var capitolHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgerageSales: 2.3,
  hoursOfOperation: ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 ', '19:00 ', '20:00 '],
  hourlySales: [],
  totalDailySales: 0,
  getRandom: function (minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//create the store function

function cookiesByHourCapitolHill() {
  for (var i = 0; i < capitolHill.hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(capitolHill.getRandom(capitolHill.minCustomer, capitolHill.maxCustomer) * capitolHill.avgerageSales);
    capitolHill.hourlySales.push(randomHourlyNumber);
    capitolHill.totalDailySales += capitolHill.hourlySales[i];
    var newEl = document.createElement('li');
    var newText = document.createTextNode(capitolHill.hoursOfOperation[i] + seattleCenter.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var newList = document.getElementById('Capitol-Hill-list');
    newList.appendChild(newEl);
  }

  // add it together
  var totalSalesCapitolHill = document.getElementById('seatac-total');
  var complete = totalSalesCapitolHill.innerHTML;
  totalSalesCapitolHill.innerHTML = complete + capitolHill.totalDailySales;
}
cookiesByHourCapitolHill();