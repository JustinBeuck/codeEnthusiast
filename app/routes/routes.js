
var Email = require('../models/email');
var Item  = require('../models/item');

function getEmails(res) {

    Email.find(function (err, emails) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(emails); // return all emails in JSON format
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all emails
    app.get('/api/emails', function (req, res) {
        // use mongoose to get all emails in the database
        getEmails(res);
    });

    // create email and send back all emails after creation
    app.post('/api/emails', function (req, res) {
        // create a email, information comes from AJAX request from Angular
        Email.create({
            text: req.body.text,
            done: false
        }, function (err, email) {
            console.log(email);
            if (err)
                res.send(err);

            // get and return all the emails after you create another
            getEmails(res);
        });

    });

    // get all items
    app.get('/api/items', function (req, res) {
        Item.find(function (err, items) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) 
            res.send(err);

        res.json(items); // return all items in JSON format
      });
    });

};