var app = angular.module('RecipeWebApp');

app.controller('addrecipeController',['$scope', '$location', '$http', function($scope, $location, $http){
    $scope.message = 'Recipes Page!';

$scope.addRecipe = function(addData){
    $http.post('/addrecipe', addData).success(function(data){
            $scope.recipes=data;
            $location.path('/recipes');
            console.log(data);
        })
            .error(function(data) {
                concole.log('Error: ' +data);

            });
       };
}


]);