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
    var position = document.getElementById('pike-list');
    position.appendChild(newEl);
  }

  // add it together
  var totalSalesPike = document.getElementById('pike-total');
  var itemContent = totalSalesPike.innerHTML;
  totalSalesPike.innerHTML = itemContent + pike.totalDailySales;
}
cookiesByHourPike();