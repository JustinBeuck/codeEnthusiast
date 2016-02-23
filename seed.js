// this is the same as running `use codenthusiast` from the
// shell
var db = db.getSiblingDB('codenthusiast');

// delete any data that was there already
db.dropDatabase();

// create fake names for our users
var firstNames = ['Justin', 'Bill', 'Roger', 'Sara', 'Natasha', 'Nivine'];
var lastNames = ['Beuck', 'Noor', 'Riola', 'Henderson', 'Frank', 'Strong'];
var usersRaw = [];

// Give all users a first name, last name and a signup date
for (var i = 0; i < firstNames.length; i++) {
    var user = {
        name: {
            first: firstNames[i],
            last: lastNames[i]
        },
        signupDate: new Date()
    };
    usersRaw.push(user);
}

// insert the users into the database
// in the `users` collection
db.users.insert(usersRaw);

var apparelType = ['T-Shirt', 'Hoodie', 'Womens Fitted Scoop', 'V-neck'];
var prices = [25, 30, 20, 22];
var techCompaniesAvail = ['Bower', 'Gulp', 'Angular', 'Backbone'];
var colors = ['blue', 'green', 'red', 'black', 'white', 'orange', 'purple'];
var availableSizes = ['sm', 'md', 'lg', 'xl', '2xl'];

var apparelRaw = [];

for(var i = 0; i < apparelType.length; i++) {
    var apparel = {
        apparelType: apparelType[i],
        prices: prices[i],
        techCompaniesAvail: techCompaniesAvail,
        colors: colors,
        availableSizes: availableSizes
    }
    apparelRaw.push(apparel);
}

// insert posts into posts collection
db.apparel.insert(apparelRaw);
