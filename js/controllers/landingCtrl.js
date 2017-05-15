//author : Jaichand
angular.module('vokalAssignment')
.controller('LandingCtrl', function($scope, ){
  $scope.lat = undefined;
  $scope.lng = undefined;
  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
    console.log($scope.autocomplete.getPlace());
    var location = $scope.autocomplete.getPlace()
    var geometry = location.geometry.location;
    $scope.type = []
    $scope.name = location.name;
    $scope.type = location.types
    $scope.lat = geometry.lat();
    $scope.lng = geometry.lng();
    $scope.$apply();
  });
});
