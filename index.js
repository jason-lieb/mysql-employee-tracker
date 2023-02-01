const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');

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

init();

function init() {
  inquirer
    .prompt(mainQuestion)
    .then((data) => mainRoute(data.main));
};

function mainRoute(input) {
  switch (input) {
    case 'View All Departments':
      db.query('SELECT * FROM department', (err, result) => {
        if (err) {
          console.log(err);
        } else {
        console.log('\n');
        console.table(result);
        init();
        }
      });
      break;
    case 'View All Roles':
      db.query('SELECT * FROM role', (err, result) => {
        if (err) {
          console.log(err);
        } else {
        console.log('\n');
        console.table(result);
        init();
        }
      });
      break;
    case 'View All Employees':
      db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log('\n');
          console.table(result);
          init();
        }
      });
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
    case 'Quit':
      db.end();
  }
}
