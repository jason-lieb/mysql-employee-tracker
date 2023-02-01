const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const { mainQuestion } = require('./utils/questions.js');

const PORT = process.env.PORT || 5500;

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
)

// db.query('SELECT * FROM students', (err, results) => {
//   console.log(results);
// })

function init() {
  inquirer.prompt(mainQuestion).then((data) => mainRoute(data.main));
};

init();

function mainRoute(input) {
  switch (input) {
    case 'View All Departments':
      //
      break;
    case 'View All Roles':
      //
      break;
    case 'View All Employees':
      //
      break;
    case 'Add A Department':
      //
      break;
    case 'Add A Role':
      //
      break;
    case 'Add An Employee':
      //
      break;
    case 'Update An Employee Role':
      //
      break;
  }
}



/*

Run schema.sql file once program starts
 - Drop if existing, recreate, and use database
 - define schema
Load seed data

*/