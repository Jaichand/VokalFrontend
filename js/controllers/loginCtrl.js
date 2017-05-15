//author : Jaichand
angular.module('vokalAssignment')
.controller('LoginCtrl', function($scope, $location, $rootScope, User) {
  var validateEmail =  function(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };
  $scope.user = User.login();
  $scope.login = function (form) {
    if (form.$invalid) {
      alert("Something Wrong");
      return
    }
    if (!validateEmail($scope.user.email)) {
      alert('Email Address Is Not Correct');
    }
    else {
      user.$login()
      .then (function (user) {
        $rootScope.$broadcast('hideLoginAlert');
        localStorage.setItem('isLoggedIn', "true");
        $location.url("/home");
      });
    }
  }
});
