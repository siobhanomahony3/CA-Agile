var app = angular.module('RecipeWebApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/recipes', {
            templateUrl : 'pages/recipes.ejs',
            controller  : 'recipesController'
        })

        .when('/addrecipe', {
            templateUrl : 'pages/addrecipe.ejs',
            controller  : 'addrecipeController'
        })


});

