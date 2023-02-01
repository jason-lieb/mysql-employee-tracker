const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
require('console.table');

const { mainQuestion } = require('./utils/questions.js');

const { departmentQuery, roleQuery, employeeQuery } = require('./utils/queries.js')

const PORT = process.env.PORT || 5500;

let db;

init();

async function init() {
  try {
    db = await mysql.createConnection(
      {
        host: 'localhost',
        user: 'root',
        database: 'employee_db'
      },
      console.log(`Connected to the employee_db database.`)
    )
    askMain();
  } catch (err) {
    console.error(err);
  }
}

function askMain() {
  inquirer
    .prompt(mainQuestion)
    .then((data) => mainRoute(data.main));
};

function mainRoute(input) {
  let result;
  switch (input) {
    case 'View All Departments':
      queryDB(departmentQuery);
      break;
    case 'View All Roles':
      queryDB(roleQuery);
      break;
    case 'View All Employees':
      queryDB(employeeQuery);
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

async function queryDB(query) {
  try {
    result = await db.query(query);
    console.log('\n');
    console.table(result[0]);
    setTimeout(askMain, 1000);
  } catch (err) {
    console.error(err);
  }
};