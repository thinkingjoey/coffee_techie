var app = angular.module("jwt_auth", ['ui.router'])
console.log("app starting")

app.config(function ($stateProvider, $urlRouterProvider) {

 	$urlRouterProvider.otherwise('/')

  console.log("setting states")
	$stateProvider
    .state("home", {
      url: "/",
      controller: "HomeController as home",
      templateUrl: "/partials/home.html",
      data: {
        requireLogin: false
      }
    })
		.state('login', {
			url: "/login",
			controller: "LoginController as login",
			templateUrl: "/partials/login.html",
			data: {
				requireLogout: true
			}
		})
    .state('register', {
      url: "/register",
      controller: "RegisterController as register",
      templateUrl: "/partials/register.html",
      data: {
        requireLogout: true
      }
    })
		.state("user", {
			url: "/user",
			controller: "UserController as user",
			templateUrl: "/partials/user.html",
			data: {
				requireLogin: true
			}
		})
    //mother events
    .state("event", {
			url: "/events",
			controller: "EventController as event",
			templateUrl: "/partials/event.html",
			data: {
				requireLogin: true
			}
    })
    .state("event.index", {
      url: "/index",
      controller: "EventIndexController as index",
      templateUrl: "/partials/eventIndex.html",
      data: {
        requireLogin: true
      }
    })
    // create (create must go above show bc "show" will mistaken /new as /:id)
    .state("event.create", {
      url: "/new",
      controller: "EventCreateController as create",
      templateUrl: "/partials/eventCreate.html",
      data: {
        requireLogin: true
      }
    })
    //  show event
    .state("event.show", {
			url: "/:id",
			controller: "EventShowController as Show",
			templateUrl: "/partials/eventShow.html",
			data: {
				requireLogin: true
			}
		})
    .state("event.delete", {
      url: "/index",
      controller: "EventDeleteController as Delete",
      // templateUrl: "/partials/eventShow.html",
      data: {
        requireLogin: true
      }
    })

})


// state change interceptor
app.run(function ($rootScope, $state) {
  console.log("changing states")
	$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
		// Case 1: Access requireLogin page without a token
		if (toState.data.requireLogin && !localStorage.token) {
			event.preventDefault()
			$state.go('login')
		}

		// Case 2: Access a requireLogout page with a token
		else if (toState.data.requireLogout && localStorage.token) {
			event.preventDefault()
			$state.go('user')
		}

		// Case 3: Someone is trying to login with a fake token
		// Ignore this case

		// How to decode token
		// var payload = JSON.parse((atob(localStorage.token.split('.')[1])))
	})
})
