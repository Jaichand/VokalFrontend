//author : Jaichand
angular.module('vokalAssignment')
.controller('LandingCtrl', function($scope, Locations, $location){
  $scope.lat = undefined;
  $scope.lng = undefined;
  $scope.location = location;
  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
    console.log($scope.autocomplete.getPlace());
    var location = $scope.autocomplete.getPlace()
    var geometry = location.geometry.location;
    $scope.types = []
    $scope.types = location.types
    $scope.name = location.name;
    $scope.lng = geometry.lng();
    $scope.lat = geometry.lat();
    var saveLoc = {
      name: $scope.name,
      location: {
        type: $scope.types,
        coordinates: [$scope.lat, $scope.lat]
      }
    }
    Locations.saveLocation(saveLoc).$promise
    .then (function (location) {
      console.log("Locations is here", location);
      $scope.autocomplete = ''
    })
    .catch (function (err) {
      console.log("Error found in locations", err);
    })
    $scope.$apply();
  });
});
