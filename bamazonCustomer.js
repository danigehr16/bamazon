var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // the port for mysql, mine is 3306 but others could be different
    port: 3306,

    // this is the user name that was set up at the begining
    user: "root",

    // the password that was setup at the begining
    password: "UnicornLove16",

    // this is the specific database that you want to use for your app
    database: "bamazon_db"
});


// this is the connection function to mysql, you can see the id number in the console log
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    welcome()
});

function welcome() {
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["View all items", "This was a mistake, I need to save money"],
            message: "Please select from one of our two options."

        }
    ])
    // .then(function (action) {
    //     if (action.action === "view items for sale") {
    //         viewItems();
    //     } else if (action.action === "This was a mistake, I need to save money") {
    //         exit();
    //     }
    // });

}


// function viewItems() {
//     var query = "SELECT * FROM products";

//     connection.query(query, function(err, results) {
//         if (err) throw err;

//         console.table(res);

//         inquirer.promt ([
//             {
//                 name: "id" ,
//                 type: "input",
//                 message: " Please enter the ID of the item that you would like to spend your well earned money on :)",
//                 validate: function(value){
//                     if (isNaN(value) === false){
//                         return true;
//                     }
//                     return false;
//                 }
//             },
//             {
//                 name: "quantity",
//                 type: "input",
//                 message: " How many units will you be spending your hard earn money one :)",
//                 validate: function(value){
//                     if(isNaN(value) === false){
//                         return true;
//                     }
//                     return false;
//                 }
//             }
//         ])
//     })
// }




