const express = require('express');
const port = 8000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const uri = "mongodb+srv://shivank28011997:Shivank28@cluster0.g73h1pg.mongodb.net/?retryWrites=true&w=majority";

app.use(expressLayouts);

//ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routes
app.use('/', require('./routes/csvRoutes'));

//server listening
app.listen(port, (err) => {
    if(err) console.log(`Error in running the server: ${err}`);

    console.log(`Server is running on port: ${port}`);
})