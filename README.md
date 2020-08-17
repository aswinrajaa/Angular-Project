# Angular-Project
 
The project has frontend and backend in separate folders.

Execution:
    -To execute the frontend, get in to the frontend folder and run it using the command 'ng serve'.

    -To execute the backend, get into the backend folder and run it using the command 'nodemon app.js'.

Frontend:
    -Components: Post-list, Post-Create, Weather, HomePage (Just for displaying all components in one page).
    -Model: Post Model - Title and Description.
    -Functions implemented: Create a Post with Title and Description, List them and Delete it.

Backend:
    -Main file: app.js
    -Backend Port: A variable is created with a variable Post - 3000 is assigned to it.
    -Database: Used Mongo DB with Mongoose framework.
    -Post Schema: Post - Title - String, Minlength: 3 and Description - String, Minlength: 5.