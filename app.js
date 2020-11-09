const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
const port = 3000;


// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))

// Set templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routing
const index = require('./routes/index');
app.use('/index', index);


// Navigation
app.get('', (req, res) => {
  res.render('index');
});

app.get('/stories', (req, res) => {
  res.render('stories');
});

app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/', urlencodedParser,(req, res) => {
  console.log(req.body);
  res.render('stories', {qs: req.query});
});


app.listen(port, () => console.info(`App listening on ${port}`));