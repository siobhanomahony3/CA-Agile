var app = angular.module('RecipeWebApp');

app.controller('recipesController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Recipes Page!';


    findAll();

    function findAll() {
        $http.get('/recipe')
            .success(function (data) {
                $scope.recipes = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    /*
      $scope.incrementUpvotes = function(id){
            $http.put('/donations/' + id + '/votes')
                .success(function(data) {
                    console.log(data);
                    findAll();
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }
*/
        $scope.delete = function(id) {
            if (confirm("Are you sure you want to delete this Recipe?")) {
                console.log('Deleting id : ' + id);
                $http.delete('/recipe/' + id).success(function(data) {
                    console.log(data);
                        findAll();
                    })
                    .error(function(data) {
                        console.log('Error: ' + data);
                    });
            }
        };

}
]);