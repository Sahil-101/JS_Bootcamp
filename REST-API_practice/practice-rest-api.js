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

//added nodemon for easy work

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
    // console.log(stringfy(req.body.name));
    // console.log(stringfy(res.body.name));
    var user_name = req.body.name;
    var user_email = req.body.email;
    var user_password = req.body.password;

    users.push({
        id: idnum,
        name: user_name,
        email: user_email,
        password: user_password
    });

    res.status("200").sendFile("newuser.html", { root: __dirname });

});

//GET all users SELF

app.get("/users", (req, res) => {
    res.send(users);
});
// update a user (based on their id), and delete a user
//update get method SELF
app.get("/update", (req, res)=>{
    res.sendfile("update.html", { root: __dirname });
})

//update put method SELF
app.put("/update", (req, res) => {
    name = req.body.name;

    for (let i = 0; i < length(users); i++) {
        if (users[i].name === name) {
            users[i].email = req.body.email;
            users[i].password = req.body.password;
            res.redirect("/users");
        }
    }

}
)
// feel free to use any built-in functions (including ES6 functions)
// don't use any external libraries (no more require() statements)




// if you finish early, start adding data validation. don't insert values other
// than name/email/pw, reject creations if they don't have an email and pw, etc.

var server = app.listen(3000);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
