const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// Static files
app.use(express.static('public'));

// Set templating engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
  res.render('index')
})
  
app.listen(port, () => console.info(`App listening on ${port}`));