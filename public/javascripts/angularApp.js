var app = angular.module('RecipeWebApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'public/pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/recipes', {
            templateUrl : 'public/pages/recipes.ejs',
            controller  : 'recipesController'
        })

        .when('/addrecipe', {
            templateUrl : 'public/pages/addrecipe.ejs',
            controller  : 'addrecipeController'
        })


});

