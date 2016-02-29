// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
 app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT

// routes ==================================================
// require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
// exports = module.exports = app; 						// expose app

var Email = mongoose.model('Email', {
        text : String
    });

// var Apparel = mongoose.model('Apparel', {
//     apparelType : String,
//     prices : Number,
//     "techCompaniesAvail" : Array,
//     "colors" : Array,
//     "availableSizes" : Array
// });

// Apparel.find(function(err, calls) { 
//   console.log(err, calls, calls.length);  //prints out: null [] 0
// });

// app.get('/api/apparel', function(req, res) {
//     console.log(res, req);
//     Apparel.find(function(err, apparel) {
//         if (err) {
//             console.log(err);
//         }
//         console.log(apparel);
//         res.json(apparel);
//     })
// })


// api =====================================================
    app.get('/api/emails', function(req, res) {
        console.log('hello');
        // use mongoose to get all emails in the database
        Email.find(function(err, emails) {
            console.log(emails);
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(emails); // return all emails in JSON format
        });
    });
    // create email and send back all emails after creation
    app.post('/api/emails', function(req, res) {
        // create a email, information comes from AJAX request from Angular
        Email.create({
            text : req.body.text,
        }, function(err, email) {
            if (err)
                console.log(err);

            // get and return all the emails after you create another
            Email.find(function(err, emails) {
                console.log(emails);
                if (err) 
                    console.log(err);
                res.json(emails);
            });
        });

    });

    