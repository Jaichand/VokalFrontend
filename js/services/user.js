//author : Jaichand
angular.module('vokalAssignment')
.factory('User', function($resource, $http, $rootScope, $location) {
   var res;
   res = $resource('http://localhost:8080/api/user/:id', {
     "id": "@id"
   }, {
       login: {
         url: 'http://localhost:8080/api/authenticate',
         method: 'POST'
      },
      getUser: {
         url: 'http://localhost:8080/api/user',
         method: 'GET'
     },
     loggedInUser: {
       url: 'http://localhost:8080/api/loggedInUser',
       method: 'GET'
     }
 });
//  angular.extend(res.prototype, {
//    login: function (data) {
//      var user = this.$login();
//      that = this;
//      user.$promise
//      .then (function (response) {
//         $rootScope.$broadcast('hideLoginAlert');
//         localStorage.setItem('isLoggedIn', "true");
//         user = that.$loggedInUser();
//         $location.url("/home");
//      })
//      .catch (function (err) {
//        console.log("Error while log in");
//      });
//    }
// });
console.log(res , "I am in service");
return res;
});
