app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'assets/img/webpicheroheader1.jpg',
    title: 'Blue',
    developer: 'A Dev',
    price: 1.79
  };

  $scope.shutterbugg = {
    icon: 'assets/img/webpicheroheader2.jpg',
    title: 'Black',
    developer: 'Some One',
    price: 5.89
  };

  $scope.gameboard = {
    icon: 'assets/img/webpicheroheader3.jpg',
    title: 'Modern',
    developer: 'Mystery Sam',
    price: 2.39
  };

  $scope.forecast = {
    icon: 'assets/img/webpicheroheader4.jpg',
    title: 'Orange',
    developer: 'Forget M. Not',
    price: 3.96
  };
  
  $scope.apps = 
    [
     {
       icon: 'assets/img/webpicheroheader1.jpg',
       title: 'Black',
       developer: 'A Dev',
       price: 1.79
     },
     {
       icon: 'assets/img/webpicheroheader2.jpg', 
       title: 'Blue', 
       developer: 'Some One', 
       price: 5.89
     },
    {
       icon: 'assets/img/webpicheroheader3.jpg',
       title: 'Modern',
       developer: 'Mystery Sam',
       price: 2.39
     },
     {
       icon: 'assets/img/webpicheroheader4.jpg',
       title: 'Orange',
      developer: 'Forget M. Not',
       price: 3.96
     }
    ];
}]);