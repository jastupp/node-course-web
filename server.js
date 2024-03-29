const express = require('express');
const hbs = require('hbs');


var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((request, response, next) => {
    const now = new Date().toString();
    console.log(`${now}: ${request.method} ${request.url}`);
    next();
});



app.use(express.static(__dirname + '/public'));

hbs.registerHelper('year', () => new Date().getFullYear());

app.get('/', (request, response) => {
    response.render('home.hbs', {
        title: 'Home Page Title',
        welcome: 'Welcome to the home page'
    });
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        title: 'About Title'
    });
});

app.get('/projects', (request, response) => {
    response.render('projects.hbs', {
        title: 'Projects Title'
    });
});

app.get('/bad', (request, response) => {
    response.send({error: 'Bad Message'});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));


