require('dotenv').load();
var mongoose = require('./database');

var Event = require('../models/Event')
var User = require('../models/User');

Event.create([{
    // fee: Number,
    fee: 20,
    // title: String,
    title: "Networking with Web Developer!",
    // eventType: String,
    eventType: "Party",
    // hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    hostId: "57d056cd83fceb097a34efda",
    // start time
    startTime: new Date(2016,5,6,12,12,12),
    // end time
    endTime: new Date(2016,5,6,13,12,12),
    // description: String,
    description: "We want to network with local Web Developers in L.A.",

    // address: {
    //   address: String,
    //   address2: String,
    //   city: String,
    //   state: String,
    //   zip: Number
    // },

    location: "123 ave, Los Angeles, CA 91212",
    // created_at: Date,
    created_at: Date.now()

}], function (err, events) {
  if (err) console.log(err)

  console.log(events)
  process.exit()
})
