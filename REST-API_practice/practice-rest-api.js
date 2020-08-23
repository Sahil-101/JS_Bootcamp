const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

var app = express();
var idTracker = 1;

// log requests
app.use(logger('dev'));
// create req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// call this function to create new ids
function genId() {
    return idTracker++;
}

// create a REST API for your users db, defined below:
var users = [
    {
        id: 0,
        name: 'John Doe',
        email: 'john@doe.com',
        password: 'asdf'
    }
];

// clients should be able to create new users, get all users, get a single user,

//creating NewUser SELF
app.get('/newuser', function user(req, res) {
    res.sendFile("newuser.html", { root: __dirname });
});

app.post('/newuser', (req, res) => {
    idnum = genId();
    var user_name=document.getElementById('#name');
    var user_email=document.querySelector('#email');
    var user_password=document.querySelector('#password');

    users.push({
        id: idnum,
        name: user - name,
        email: user - email,
        password: user - password
    });
    
    res.status(200)
});

//GET all users SELF

app.get("/users", (req, res)=>
{
    res.send(users);
});
// update a user (based on their id), and delete a user
// feel free to use any built-in functions (including ES6 functions)
// don't use any external libraries (no more require() statements)




// if you finish early, start adding data validation. don't insert values other
// than name/email/pw, reject creations if they don't have an email and pw, etc.

var server = app.listen(3000);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
