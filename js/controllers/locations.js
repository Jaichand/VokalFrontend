//author : Jaichand
angular.module('vokalAssignment')
.controller('Locations', function($scope, $location, Locations){
  $scope.location = location;
  Locations.allSearchedLocation().$promise
  .then (function (searchedlocation) {
    console.log("locations", searchedlocation.locations);
    $scope.locations = searchedlocation.locations;
    console.log("$scope.locations", $scope.locations);
  })
  .catch (function(err) {
    console.log("Err", err);
  })

});
