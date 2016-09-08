require('dotenv').load();
var mongoose = require('./database');

var Event = require('../models/Event')
var User = require('../models/user');

var Event = [{
    // fee: Number,
    fee: 20,
    // title: String,
    title: "Networking with Web Developer!",
    // eventType: String,
    eventType: "Party",
    // lookingFor: String,
    lookingFor: "Web Developers",
    // hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    hostId: 2,
    // eventDate: Date,
    eventDate: "2016-05-06",
    // startTime: Date,
    startTime: "12:12:12",
    // endTime: Date,
    endTime: "13:12:12",
    // description: String,
    description: "We want to network with fellow Web Developers in L.A.",

    // address: {
    //   address: String,
    //   address2: String,
    //   city: String,
    //   state: String,
    //   zip: Number
    // },

    address: {
      address: "123 Coffee Ave",
      addresS: "Suit 12",
      city: "Los Angeles",
      state: "CA",
      zip: 92111
    },
    // created_at: Date,
    created_at: Data.now()

}]
