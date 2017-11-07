Name: Siobhan O' Mahony
Student ID: 20058654

PROJECT DESCRIPTION:

The purpose of this assignment was to create a funtional web application using node. My idea was based on a recipe generator allowing users to access a collection of recipes.
Each recipe includes the recipe name, recipe type, ingredients and rating. Each user includes first name, last name, username and email.
The application feature are as follows:

• POST a recipe name, type, ingredients and rating in JSON format
• POST a first name, last name, username and email in JSON format
• GET a list of each recipe added
• GET a list of each user added
• GET an individual recipe using the ID field
• GET an individual user using the ID field
• DELETE an individual recipe using the ID field
• DELETE an individual user using the ID field
• Update the ratings using the request body text field by PUT request
• Update the username using the request body text field by PUT request.
• I then used MongoDB as my persistence and it includes two collections recipe and user. Each collection stores a POST, GET, DELETE and PUT.

PROJECT AJUSTMENTS:

•Removed the array and added mongoDB as my persistence
•Adjusted the add, get, post and pull to store in the database
•Added a second collect named user
•Change the ratings and username so you can update the field using the requect body in the REST Client.

REFERENCES:

•Drohan, D. Lab 2 - DonationWeb 1.0 (Express & Node App). Available at: https://ddrohan.github.io/wit-wad/topic02-node/book-b-lab02/index.html
•Drohan, D. Lab 3 - Donation 2.0 (Mongo, Express & Node App). Available at: https://ddrohan.github.io/wit-wad/topic03-node-mongo/book-c-lab03/index.html

GITHUB LINK:
https://github.com/siobhanomahony3/CA1



# Assignment 1 - API testing and Source Control.

Name: Siobhan O' Mahony

## Overview.

The purpose of this assignment was to create a funtional web application using node. My idea was based on a recipe generator allowing users to access a collection of recipes.
Each recipe includes the recipe name, recipe type, ingredients and rating. Each user includes first name, last name, username and email.
The application feature are as follows:

• POST a recipe name, type, ingredients and rating in JSON format
• POST a first name, last name, username and email in JSON format
• GET a list of each recipe added
• GET a list of each user added
• GET an individual recipe using the ID field
• GET an individual user using the ID field
• DELETE an individual recipe using the ID field
• DELETE an individual user using the ID field
• Update the ratings using the request body text field by PUT request
• Update the username using the request body text field by PUT request.
• I then used MongoDB as my persistence and it includes two collections recipe and user. Each collection stores a POST, GET, DELETE and PUT.

## API endpoints.
 . . . . . List the API's endpoints and state the purpose of each . . . .
 e.g.

app.get('/recipe', recipe.findAll); /Gets all the recipes
app.get('/recipe/:id', recipe.findOne); /Gets a single recipe by ID
app.post('/recipe', recipe.addRecipe); /Takes in new information and creates a new recipe
app.delete('/recipe/:id', recipe.deleteRecipe); /This will match the ID entered with the Recipe ID and delete it
app.put('/recipe/:id/rating', recipe.updateRecipe);/This will take in the recipes rating and will update it with the new rating entered

app.get('/user', user.findAllUsers); /Gets all the Users
app.get('/user/:id', user.findOneUser); /Gets a single User by ID
app.post('/user', user.addUser); /Takes in new information and creates a new user
app.delete('/user/:id', user.deleteUser); /This will match the ID entered with the User ID and delete it
app.put('/user/:id/username', user.updateUser);/This will take in the username and will update it with the new username enetered


## Data storage.
. . . . This section is only relevant if your tests included the integration of MongoDB (or other database) with the API. If so, this section should specify the database schema, i.e. JSON document structure for each collection type in the MongoDB database.
My tests include two MongoDB Schemas.

RECIPE:

var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
    recipename: String,
    recipetype: String,
    ingredients: String,
    rating: Number
});


module.exports = mongoose.model('Recipe', RecipeSchema);


USER:

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);

## Sample Test execution.
In this section include a listing of the output from running your tests, e.g.

        $ npm test

        Recipe
            GET /recipe
        connected to database
        connected to database
        connected to database
        (node:1895) DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html
        GET /recipe 200 23.452 ms - 445
              ✓ should return all the recipes in an database (107ms)
            POST /recipe
        Adding Recipe: {"rating":3,"ingredients":"Beef","recipetype":"American","recipename":"Steak","_id":"5a01c95d2e4674076707e8ba"}
        POST /recipe 200 165.096 ms - 154
              ✓ should return confirmation message and update collection (174ms)
            GET /recipe/id
        GET /recipe/59ff9a44a00a3e02ba392942 200 4.230 ms - 121
              ✓ should return a recipe from the collection
            DELETE /recipe/id
        DELETE /recipe/59ff4145fd904f7cc33c4cb6 200 6.972 ms - 29
              ✓ should delete the recipe from the collection
            PUT /recipe/id/rating
        PUT /recipe/59ff9a44a00a3e02ba392942/rating 200 14.702 ms - 156
              ✓ should update the rating in the recipe collection

          User
            GET /user
        GET /user 200 3.077 ms - 227
              ✓ should return all the user in the collection
            POST /user
        Adding User: {"email":"ciaram@hotmail.com","username":"cmurphy4","lastname":"Murphy","firstname":"Ciara","_id":"5a01c95d2e4674076707e8c6"}
        POST /user 200 4.457 ms - 166
              ✓ should return add user to the collection
            GET /user/id
        GET /user/5a017e588b183e051c279f98 200 2.320 ms - 114
              ✓ should return one user from the collection
            DELETE /user/id
        DELETE /user/5a001ba3f26d7403cd80a804 200 11.573 ms - 27
              ✓ should delete the user from the collection
            PUT /user/id/username
        PUT /user/5a017e588b183e051c279f98/username 200 4.876 ms - 152
              ✓ should update the user in the collection


          10 passing (495ms)



GITHUB LINK:


