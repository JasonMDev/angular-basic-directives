app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'assets/img/webpicheroheader1.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'assets/img/webpicheroheader2.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'assets/img/webpicheroheader3.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'assets/img/webpicheroheader4.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  
  $scope.apps = 
    [
     {
       icon: 'assets/img/webpicheroheader1.jpg',
       title: 'MOVE',
       developer: 'MOVE, Inc.',
       price: 0.99
     },
     {
       icon: 'assets/img/webpicheroheader2.jpg', 
       title: 'Shutterbugg', 
       developer: 'Chico Dusty', 
       price: 2.99
     },
    {
       icon: 'assets/img/webpicheroheader3.jpg',
       title: 'Gameboard',
       developer: 'Armando P.',
       price: 1.99
     },
     {
       icon: 'assets/img/webpicheroheader4.jpg',
       title: 'Forecast',
      developer: 'Forecast',
       price: 1.99
     }
    ];
}]);