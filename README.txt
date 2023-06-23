Title-URL Shortener

Description- A URL shortener takes a valid URL and returns a shortened url to the user which redirects the user to the original url.In addition to that this url shortener also shows history of url entered and shortened url and the no. of clicks on the url in tabular form in frontend along with search bar for index, shortened url and original url in the frontend.

Running the Project: Before running the project one must first install node js , mongo db and mongo shell from the browser.
After that in terminal, one must install express, mongoose, shortid, nodemon, ejs using commands
npm i express mongoose shortid nodemon ejs
Then to run the project, open the terminal at the location in which the project is present and enter
npm start
The two messages will be shown in the terminal
Server Started
MongoDb Connected
Then go to your browser and go to localhost:3000 to visit the url shortener

Working Of The Project:
->index.js: It is the main app. Here the port number is set to 3000, view engine is set to ejs."app.use('/url',route);" means if anything starts with url pass it through route."app.get('/url/:short'..." fecthes data from the database, increments it and redrect it to the user.
->connect.js: It connects the server with mongo database.
->/controllers/url.js: Generate and Analyze functions are defined here.Analyze function returns the number of clicks on the shorten url.Generate function uses shortid package to return short id of the url and returns amessage if no url is entered and also renders home.ejs.
->/models/url.js: It contains the url schema , setting the following properties: originalURL, shortid and history(an array storing timestamps of each click). It is then exported to index.js .
->/routes/url.js: It contains three routes 1)Generate Short Url (router.post('/',generate);), 2)Redirect the user to original url using short url(defined in index.js), 3) Returning the number of clicks on short url(router.get('/analytics/:short',analyze);).
->/routes/static.js: It is to store all the urls generated from the mongo database.So that it can be displayed at the frontend. 
->/views/home.ejs: Ejs is a templating engine used for server side rendering.It is the frontend of the URL shortener. It also displays all the urels generated from it in tabular form from static.js. Search bar is also defined here each for index,shortid and original url along with its script.  
The short url is generated of the form http://localhost:3000/url/"short id".

Learnings from project:
->The project help me learn about possible error which can be faced while trying to connect to mongo db.
->The project help me learn nodejs and mongodb.
->The project help me learn about ejs and server side rendering.

References/Resources:
https://www.freecodecamp.org/learn/back-end-development-and-apis/#basic-node-and-express
https://www.freecodecamp.org/learn/apis-and-microservices/#mongodb-and-mongoose
https://www.geeksforgeeks.org/node-js-npm-shortid-module/
https://www.npmjs.com/package/ejs



 


 
