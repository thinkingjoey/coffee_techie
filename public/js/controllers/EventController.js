angular.module("jwt_auth")
	.controller("EventController", EventController)
	.controller("EventIndexController", EventIndexController)
	.controller("EventCreateController", EventCreateController)
	.controller("EventShowController", EventShowController)
	.controller("EventDeleteController", EventDeleteController)

EventController.$inject = ['$http', '$state']

function EventController ($http, $state) {
	var self = this
	console.log('event')
		//5 event types
		self.eventTypes = ["Conference", "Coffee Meetup", "Happy Hours", "Party", "Others"]
}

function EventIndexController ($http, $state) {
	var self = this
	self.events = []
	$http({
		url: '/events',
		method: 'GET',
		params: {}
	}).then(function (response) {
		console.log(response.data)
		self.events = response.data
	})
}

function EventCreateController ($http, $state) {
	console.log("event create")
	var self = this;
	self.fee = '',
	self.imageUrl = '',
	self.title = '',
	self.eventType= '',
	self.startTime= '',
	self.endTime= '',
	self.description= '',
	self.location= ''
	self.create = function () {
		$http.post("/events?token=" + localStorage.token, {
			fee: self.fee,
			imageUrl: self.imageUrl,
			title: self.title,
			eventType: self.eventType,
			startTime: self.startTime,
			endTime: self.endTime,
			description: self.description,
			location: self.location
		}).then (function (response){
			if (response.data.error) throw (err)
			else if (response.data) {
				console.log(response.data)
				$state.go('event.index')
			}
		})
	}
}

function EventShowController($http, $state){
	console.log("event show")
	var self = this

	self.events = []
	$http({
		url: '/events/' + id,
		method: 'GET',
		params: {}
	}).then (function (response) {
		self.events = response.data
	})
}

function EventDeleteController(id) {
	if (window.confirm("delete this?")){
		EventResource
			.delete({id: id})
			.$promise.then(function(res){
				Materialize.toast(res.message,4000)
				this.$router.navigateByUrl('/events/index')
			})
	}
}

//
// function UserController ($http, $state) {
// 	var self = this
//
// 	self.username = ''
//
// 	$http({
// 		url: '/user',
// 		method: 'GET',
// 		params: {
// 			token: localStorage.token
// 		}
// 	}).then(function (response) {
// 		console.log(response)
// 		self.username = response.data.username
//
// 		// stay away hackers!
// 		if (response.data.message === "jwt malformed")
// 			window.location = "https://c7.staticflickr.com/9/8166/29057776390_74fcea1b5e_o.jpg"
// 	})
// }
