const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res){
//     const htmlFilePath = path.join(__dirname, 'views', 'index.html');
//     res.sendFile(htmlFilePath);
// });

app.get('/', function(req, res){
    res.render('index');
});
// app.get('/restaurants', function(req, res){
//     const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html');
//     res.sendFile(htmlFilePath);
// });
app.get('/restaurants', function(req, res){
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    res.render('restaurants', {numbersOfRestaurants: storedRestaurants.length});
});
// app.get('/recommend', function(req, res){
//     const htmlFilePath = path.join(__dirname, 'views', 'recommend.html');
//     res.sendFile(htmlFilePath);
// });
app.get('/recommend', function(req, res){
    res.render('recommend');
});
app.post('/recommend', function(req, res){
    const restaurant = req.body;
    const filePath = path.join(__dirname, 'data', 'restaurants.json');

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    storedRestaurants.push(restaurant);

    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

    res.redirect('/confirm');
});
// app.get('/confirm', function(req, res){
//     const htmlFilePath = path.join(__dirname, 'views', 'confirm.html');
//     res.sendFile(htmlFilePath);
// });
app.get('/confirm', function(req, res){
    res.render('confirm');
});
// app.get('/about', function(req, res){
//     const htmlFilePath = path.join(__dirname, 'views', 'about.html');
//     res.sendFile(htmlFilePath);
// });
app.get('/about', function(req, res){
    res.render('about');
});
app.listen(3000);