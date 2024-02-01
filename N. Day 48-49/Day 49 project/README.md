 # Restaurant Recommendation App

This is a simple restaurant recommendation app built with Node.js, Express, and EJS. The app allows users to view a list of restaurants, add new restaurants, and view a confirmation page after adding a new restaurant.

## Installation

To install the app, clone the repository and run the following commands:

```
npm install
npm start
```

## Usage

To use the app, visit the following URLs:

* http://localhost:3000/ - Home page
* http://localhost:3000/restaurants - List of restaurants
* http://localhost:3000/recommend - Add a new restaurant
* http://localhost:3000/confirm - Confirmation page
* http://localhost:3000/about - About page

## Code Overview

The app is structured as follows:

* The `app.js` file is the main entry point of the app. It sets up the Express app and defines the routes.
* The `views` directory contains the EJS templates for the different pages of the app.
* The `public` directory contains the static assets for the app, such as CSS and JavaScript files.
* The `data` directory contains the JSON file with the list of restaurants.

### app.js

The `app.js` file is the main entry point of the app. It sets up the Express app and defines the routes.

```javascript
const express = require("express");
const app = express();
```

The first few lines of the file import the necessary modules and create an Express app.

```javascript
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
```

These lines set up the view engine, static asset directory, and body parser middleware.

```javascript
app.get("/", function (req, res) {
  res.render("index");
});
```

This route handler renders the home page of the app.

```javascript
app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData