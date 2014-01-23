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

// Capitalise the first letter of the string
exports.capitalise = function (str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  })
}

// Generate random characters based on length and type.
// Available types are number & characters
exports.generateRandomChar = function (length, type) {
  length = length ? length : 32
  var reference = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
  if (type === 'number') {
    reference = '0123456789'
  }

  var str = ''
  for (var i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * reference.length)
    str += reference.substring(randomNumber, randomNumber + 1)
  }

  if (type === 'number') {
    return parseInt(str)
  }
  return str
}