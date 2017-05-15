//author : Jaichand
angular.module('vokalAssignment')
.factory('User', function($resource, $http) {
   var res;
   res = $resource('http://localhost:8080/api/:id', {
     'id': '@id'
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
 return res
});
