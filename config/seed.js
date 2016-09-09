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

    imageUrl: "https://hd.unsplash.com/photo-1438557068880-c5f474830377",

    location: "123 ave, Los Angeles, CA 91212",
    // created_at: Date,
    created_at: Date.now()

  },{
  // fee: Number,
    fee: 10,
    // title: String,
    title: "Party Time!",
    // eventType: String,
    eventType: "Party",
    // hostId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    hostId: "57d056cd83fceb097a34efda",
    // start time
    startTime: new Date(2016,5,6,12,12,12),
    // end time
    endTime: new Date(2016,5,6,13,12,12),
    // description: String,
    description: "Party time at DTLA",
    imageUrl: "https://hd.unsplash.com/photo-1468234847176-28606331216a",

    location: "231 ave, Los Angeles, CA 91212",
    // created_at: Date,
    created_at: Date.now()


}], function (err, events) {
  if (err) console.log(err)

  console.log(events)
  process.exit()
})
