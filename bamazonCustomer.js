var mysql = require("mysql");

var inquirer = require("inquirer");

var Table = require("cli-table");

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
})


// this is the connection function to mysql, you can see the id number in the console log
connection.connect(function (err) {
    if (err) throw err;
    // this is the connection id from mysql
    console.log("connected as id " + connection.threadId);
    // this is to welcome the customer
    console.log("\n--------------------------------------\n");
    console.log("\nWelcome to Bamazon! Make sure you check out everything you can spend your money on! :)");
    console.log("\n---------------------------------------\n");
    // this will start the app
    welcome();
});

// this is what customer will see when they open the app
function welcome() {
    // this will ask the customer what they want to do, they are given two options
    inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["View all items", "This was a mistake, I need to save money"],
            message: "Please select from one of our two options."

        }
    ]).then(function (action) {
        if (action.action === "View all items") {
            viewItems();
        }
        else if (action.action === "This was a mistake, I need to save money") {
            // exit();
        }
    });
}


// this is the view items function
function viewItems() {
    // this is from mysql and saves query

    var query = connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw error;

        // this is a npm nice table
        var table = new Table({
            head: ["ID", "Product Name", "Department Name", "Price", "Stock Quantity"]

        });
        console.log("\nHere is what you will want to spend your money on :)\n");

        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
        };

        console.log(table.toString());


        inquirer.prompt([
            {
                name: "id",
                type: "input",
                message: " Please enter the ID of the item that you would like to spend your well earned money on :)",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: " How many units will you be spending your hard earn money one :)",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (transaction) {
            var query = connection.query("SELECT * FROM products WHERE item_id=?", [transaction.id], function (err, res) {
                if (err) throw err;
                console.log(res[0].stock_quantity);

                if (transaction.quantity > res[0].stock_quantity) {
                    console.log("sorry not enough");
                }
                else if (transaction.quantity <= res[0].stock_quantity){
                    console.log("congrats");
                };
            });

        });
    });

}












    // console.log("Here are the items that are for sale, so spend your money!");
    // console.log("------------------------------------");

    //     inquirer.promt ([
    //         {
    //             name: "id" ,
    //             type: "input",
    //             message: " Please enter the ID of the item that you would like to spend your well earned money on :)",
    //             validate: function(value){
    //                 if (isNaN(value) === false){
    //                     return true;
    //                 }
    //                 return false;
    //             }
    //         },
    //         {
    //             name: "quantity",
    //             type: "input",
    //             message: " How many units will you be spending your hard earn money one :)",
    //             validate: function(value){
    //                 if(isNaN(value) === false){
    //                     return true;
    //                 }
    //                 return false;
    //             }
    //         }
    //     ])
    //     .then(function(answer) {
    //         var query = "SELECT * FROM products";
    //         connection.query(query, {id: answer.id}, function(err, res) {
    //             if(err) throw err;
    //             for(var i = 0; i < res.length; i++){
    //                 console.table(res);
    //             }

    //         });
    //     });





