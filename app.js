const express = require('express');
const expressLayouts = require('express-ejs-layouts');

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

// Navigation
app.get('', (req, res) => {
  res.render('index')
})
  
app.listen(port, () => console.info(`App listening on ${port}`));