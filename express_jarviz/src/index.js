const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 8000;

// Note use absolute path 'E:/myCode/Node' not use in backend relative path '../../../'
// __dirname is wrapper function

const staticPath = path.join(__dirname, '../public')
// builtin middleware static
// app.use(express.static(staticPath));

const dynamicFolderPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// set template engine
app.set('view engine', 'hbs');

// change the views folder name
app.set('views', dynamicFolderPath)

hbs.registerPartials(partialsPath);

// define the tepmlate engine or dynamix Router..
app.get('/', (req, res) => {
    res.render('index', {
        userName: 'Jarviz',
    })
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/about/*', (req, res) => {
    res.render("404", {
        errorComments: "oops About us Page could'nt be found"
    })
})
app.get('*', (req, res) => {
    res.render("404", {
        errorComments: "oop's Page could'nt be found"
    })
})
// app.get('/', (req, res) => {
//     res.send('welcome to the express world')
// })


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})