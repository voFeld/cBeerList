app.controller('MainCtrl', function($scope, beerService) {
    $scope.beers = beerService.beers;

    $scope.addBeer = function() {
        var newBeer = {
            name: $scope.name,
            style: $scope.style,
            abv: $scope.abv,
            image: $scope.image,
            rating: $scope.rating,
            average: $scope.average
        };

        beerService.addBeer(newBeer);
    };


    $scope.removeBeer = function(index){
        beerService.removeBeer(index)
    };

    $scope.addRating = function(rating, index){
        beerService.addRating(rating, index);
    };


    //Edit Beers:
    $scope.editedItem = {};

    $scope.editrow = function($index){
        $scope.istrue = true;
        $scope.$index = $index;
        angular.copy($scope.beers[$index], $scope.editedItem);
    };

    $scope.save = function(){
        $scope.istrue = false;
        angular.copy($scope.editedItem, $scope.beers[$scope.$index])
    };

    $scope.closepopup=function(){
        $scope.istrue=false;

    };
});

