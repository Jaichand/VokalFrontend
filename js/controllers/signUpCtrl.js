//author : Jaichand
angular.module('vokalAssignment')
.controller('SignUpCtrl', function($scope, User, $location){
  var validateEmail =  function(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  };
  $scope.user = {};
  $scope.submitForm = function (form) {
    if (form.$invalid) {
      alert("Something Wrong");
      return
    }
    if (!validateEmail($scope.user.email)) {
      alert('Email Address Is Not Correct');
    }
    else {
      if ($scope.user.password != $scope.user.repassword) {
        alert("password is not matching")
        return
      }
      else {
        User.signUp({
          firstName: $scope.user.firstName,
          lastName: $scope.user.lastName,
          email: $scope.user.email,
          password: $scope.user.password
        }).$promise
        .then (function (singedUpUser) {
          if (singedUpUser) {
            $location.url('/login')
          }
        })
        .catch (function (err) {
          console.log("Error Occur while signUp", err);
        })
      }
    }
  }
});
