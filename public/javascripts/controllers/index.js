var app = angular.module('RecipeWebApp');


app.controller('addrecipeController',['$scope', require('./addrecipecontroller')]);
app.controller('mainController',['$scope', require('./maincontroller')]);
app.controller('recipesController', ['$scope', '$location', '$http', require('./recipescontroller')]);
