'use strict';

//global variables

var allStores = [];
var inputArea = document.getElementById('input-area');
inputArea.addEventListener("submit", addNewStore);
var storeTable = document.getElementById("store-table");
console.log(storeTable)
var randomNumberGenerator = function (max, min) {
  var projectedCustomers = [];
  for (var i = 0; i < hoursOfOperation.length; i++) {
    projectedCustomers.push(Math.round(Math.random() * (max - min) + min))
  }
  return projectedCustomers;
}

var hoursOfOperation = ['0600:', '0700:', '0800:', '0900:', '1000:', '1100:', '1200:', '1300:', '1400:', '1500:', '1600:', '1700:', '1800:', '1900:']
//global variable

function Store(minimumCustomer, maximumCustomer, averageSale, storeLocation) {
  this.storeLocation = storeLocation
  this.minimumCustomer = minimumCustomer
  this.maximumCustomer = maximumCustomer
  this.averageSale = averageSale
  this.projectedCustomers = randomNumberGenerator(this.maximumCustomer, this.minimumCustomer)
  this.total = 0;
  this.cookiesByHour = [];
  allStores.push(this)
}

Store.prototype.render = function () {
  var row = document.createElement('tr');

  var firstCol = document.createElement('td');
  firstCol.textContent = this.storeLocation
  row.appendChild(firstCol)


  for (var i in hoursOfOperation) {
    var col = document.createElement('td');
    var data = Math.floor(this.projectedCustomers[i] * this.averageSale)
    col.textContent = data
    row.appendChild(col)
    this.total += data
    this.cookiesByHour.push(data);
  }

  var totalCol = document.createElement('td');
  totalCol.textContent = 'total: ' + this.total
  row.appendChild(totalCol)

  storeTable.appendChild(row)
}

function renderAll() {
  console.log('dfsfd', storeTable.childNodes.length)
  for (var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event)
  //console.log(event.target.storeTable.value)
  var newLocation = event.target.storeLocation.value;
  var newMinimumCustomer = Number(event.target.minimumCustomer.value);
  var newMaximumCustomer = Number(event.target.maximumCustomer.value);
  var newAverageSale = Number(event.target.averageSale.value);

  new Store(newMinimumCustomer, newMaximumCustomer, newAverageSale, newLocation, );

  storeTable.innerHTML = ''

  makeHeaderRow();
  renderAll();
  makeFooterRow();
}
function makeFooterRow() {
  var bottomRow = document.createElement('tr');
  var bottomColumn = document.createElement('td');
  bottomColumn.textContent = 'Hourly Totals '
  bottomRow.appendChild(bottomColumn);
  storeTable.appendChild(bottomRow)

  var hourlyTotal = [];
  for (var i in hoursOfOperation) {
    hourlyTotal.push(0)
    for (var h in allStores) {
      hourlyTotal[i] += allStores[h].cookiesByHour[i]
      // console.log (hourlyTotal)
    }
    var hourlyTotalColumn = document.createElement('td')
    hourlyTotalColumn.textContent = hourlyTotal[i];
    bottomRow.appendChild(hourlyTotalColumn)
  }

}
var makeHeaderRow = function () {
  var textBox = document.createElement('th')
  var topRow = document.createElement('tr');
  textBox.textContent = 'Hours Of Operation'
  topRow.appendChild(textBox)
  for (var q in hoursOfOperation) {
    var headerCol = document.createElement('th');
    headerCol.textContent = hoursOfOperation[q];
    storeTable.appendChild(topRow);
    topRow.appendChild(headerCol);
    console.log(headerCol)
  }
}



var firstandpike = new Store(23, 65, 6.3, 'First And Pike')
//firstandpike.render()
var SeaTac = new Store(3, 24, 1.2, 'Sea Tac')
//SeaTac.render()
var SeattleCenter = new Store(11, 38, 3.7, 'Seattle Center')
//SeattleCenter.render ()
var CapitolHill = new Store(20, 38, 2.3, 'Capitol Hill')
//CapitolHill.render ()
var Alki = new Store(2, 16, 4.6, 'Alki')
//Alki.render ()

makeHeaderRow();
renderAll();
makeFooterRow();