angular.module('myApp', [])
  .controller('HelloController', function HelloController($scope) {
    $scope.greeting = { text: 'Hello' };
});

