var Event = require('../models/Event')
var User = require('../models/User')


function index(req, res, next) {
  Event.find({}, function(err, events){
    if(err) next(err);
    res.json(events);
  });
}

function create () {

}


function show(req, res, next) {
  var id= req.params.id;

  Event
    .findbyId(id)
    .populate('hostID')
    .exec().then(function(evet){
      res.json(event);
    })
    .catch(function (err) {
      next(err)
    })
}

function update(){

}

function destroy(){

}

module.exports = {
	index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
}
