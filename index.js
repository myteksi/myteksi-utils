/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

// Converts the passed date into UTC format
exports.toUTC = function (date) {
  var fullYearInUTC = date.getUTCFullYear()
  var monthInUTC = date.getUTCMonth()
  var dateInUTC = date.getUTCDate()
  var hoursInUTC = date.getUTCHours()
  var minutesInUTC = date.getUTCMinutes()
  var secondsInUTC = date.getUTCSeconds()

  return new Date(fullYearInUTC, monthInUTC, dateInUTC, hoursInUTC, minutesInUTC, secondsInUTC)
}

// Capatlise the first letter of the string
exports.capitalise = function (str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
}