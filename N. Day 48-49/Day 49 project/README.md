 # Restaurant Recommendation App

This is a simple restaurant recommendation app built with Express.js. The app has five routes:

* `/`: The home page.
* `/restaurants`: A list of restaurants.
* `/recommend`: A page where users can enter their preferences and get a restaurant recommendation.
* `/confirm`: A page where users can confirm their reservation.
* `/about`: A page about the app.

## How to Use the App

To use the app, simply clone the repository and run `npm install`. Then, run `npm start` to start the server. The app will be available at `localhost:3000`.

## Code Overview

The app is written in JavaScript and uses the Express.js framework. The code is well-organized and easy to understand.

### The `app.js` File

The `app.js` file is the main file of the app. It sets up the Express app and defines the routes.

```javascript
const express = require('express');

const app = express();
```

The `app.use()` method is used to serve static files from the `public` directory.

```javascript
app.use(express.static('public'));
```

The `app.get()` method is used to define the routes.

```javascript
app.get('/', function(req, res){
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
});
```

The first route, `/`, is the home page. The `res.sendFile()` method is used to send the `index.html` file to the client.

The second route, `/restaurants`, is a list of restaurants. The `res.sendFile()` method is used to send the `restaurants.html` file to the client.

The third route, `/recommend`, is a page where users can enter their preferences and get a restaurant recommendation. The `res.sendFile()` method is used to send the `recommend.html` file to the client.

The fourth route, `/confirm`, is a page where users can confirm their reservation. The `res.sendFile()` method is used to send the `confirm.html` file to the client.

The fifth route, `/about`, is a page about the app. The `res.sendFile()` method is used to send the `about.html` file to the client.