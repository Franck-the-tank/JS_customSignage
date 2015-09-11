var app = angular.module('customSignage')

var price = 5,
  length = word.length(),

  // but we need to send a post request once the user clicks
  // in order to put it in a variable here:
  var total;

app.controller('useCtrl', ['$scope', '$http', function($scope, $http) {

      $scope.calculate = function() {
        $http.post("/calculate", {
          name: $scope.username
        }).success(function(data) {
          alert("got it" + $scope.username)
        }).console.error(function() {
          alert("problem")
        });
      }

    ]);
