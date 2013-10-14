/*
Copyright (c) MyTeksi GrabTaxi 2013
Author: Fadrizul Hasani <fadrizul@gmail.com>
*/

var should = require('should')
var util = require('../index')

describe('Util', function () {
  describe("When pasing a date into toUTC function", function() {
    it("should return the Universal Time Coordinated of the passed time", function() {
      var date = new Date(1361958695331)
      var dateInUTC = util.toUTC(date)
      var expected = new Date("Wed Feb 27 2013 09:51:35 GMT+0800 (MYT)")

      dateInUTC.should.eql(expected)
    })
  })

  describe("When passing in a word into capitalise function", function() {
    it("should capitalise the first letter of the word", function() {
      var actual = util.capitalise("hello")
      actual.substr(0, 1).should.eql("H")
    })
  })
})
