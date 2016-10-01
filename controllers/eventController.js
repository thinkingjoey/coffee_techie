var Event = require('../models/Event')
var User = require('../models/User')


function index(req, res, next) {
  Event.find({}, function(err, events){
    if(err) next(err);
    res.json(events);
  });
}

function create(req, res, next) {
  var newEvent  = new Event(req.body);
  console.log(req.token._doc)
  var userId    = req.token._doc._id
  newEvent.hostId = userId
  console.log(newEvent)
  newEvent.save(function(err, savedEvent) {
    if (err) res.json(err);
    console.log('saved')
    User.findById(userId, function (err, user){
      user.events.push(savedEvent._id)

      user.save(function(err) {
        if (err) next(err)
        res.json(savedEvent);
      })
    })
  });
}


function show(req, res, next) {
  var id= req.params.id;

  Event
    .findbyId(id)
    .populate('hostId')
    .exec().then(function(event){
      res.json(event);
    })
    .catch(function (err) {
      next(err)
    })
}


function destroy(req, res, next){
  var id = req.params.id;
  Event.remove({_id:id}, function (err){
    if (err) next (err);
    res.json({message: "Event deleted"});
  })

}

module.exports = {
	index: index,
  create: create,
  show: show,
  destroy: destroy
}
