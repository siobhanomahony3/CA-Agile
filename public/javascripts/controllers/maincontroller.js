var app = angular.module('RecipeWebApp');


app.controller('mainController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Recipe Generator';

}
]);