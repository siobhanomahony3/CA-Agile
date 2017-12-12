

require('angular');
require('angular-route');
var app = angular.module('RecipeWebApp', ['ngRoute']);
require('./controllers/index');

require('../../node_modules/bootstrap/dist/css/bootstrap.css' );
require('../../node_modules/font-awesome/css/font-awesome.css' );
require('../stylesheets/style.css');

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

