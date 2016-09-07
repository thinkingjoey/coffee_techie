angular.module("jwt_auth")
	.controller("RegisterController", RegisterController)

RegisterController.$inject = ['$http', '$state']

function RegisterController ($http, $state) {
	var self = this
  this.register = function () {
    $http.post("/register", {
      username: self.registerUsername,
      password: self.registerPassword
    }).then(function (response) {
      if (response.data.error) {
        self.errors = response.data.error
      }
      else if (response.data.token) {
        localStorage.token = response.data.token
        $state.go('user')
      }
    })
  }
}
