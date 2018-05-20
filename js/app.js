//global variables
  //I need an array of hours of operation
  //I need a RNG using .round and .math

var storeHours = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

getRandom: function(min, max) {
  return Math.random() * (max - min) + min;

///////////////////////////////////////////

  var pike = {
    min: 3,
    max: 9,
    avg: 6.1,
    getRandom: function (min, max) {
      return Math.random() * (max - min) + min;
    }
  }

  pikePlace.getRandom(pikePlace.min, pikePlace.max)