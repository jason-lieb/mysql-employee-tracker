const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
require('console.table');

const { mainQuestion, addDepartment, addRole, addEmployee, updateEmployee  } = require('./utils/questions.js');

const { getDepartmentQuery, getRoleQuery, getEmployeeQuery } = require('./utils/getQueries.js');
const { addDepartmentQuery, addRoleQuery, addEmployeeQuery } = require('./utils/addQueries.js');
const { updateEmployeeRoleQuery } = require('./utils/updateQueries.js');
const { helpDepartmentQuery, helpRoleQuery, helpEmployeeQuery } = require('./utils/helperQueries.js');

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
      console.log(`Connected to the employee_db database.\n`)
    )
    askMain();
  } catch (err) {
    console.error(err);
  }
}

function mainRoute(input) {
  switch (input) {
    case 'View All Departments':
      getQueryDB(getDepartmentQuery);
      break;
    case 'View All Roles':
      getQueryDB(getRoleQuery);
      break;
    case 'View All Employees':
      getQueryDB(getEmployeeQuery);
      break;
    case 'Add A Department':
      askDept();
      break;
    case 'Add A Role':
      askRole();
      break;
    case 'Add An Employee':
      askEmployee();
      break;
    case 'Update An Employee Role':
      updateRole();
      break;
    case 'Quit':
      db.end();
  }
}

function askMain() {
  inquirer
    .prompt(mainQuestion)
    .then((data) => mainRoute(data.main));
};

function askDept() {
  inquirer
    .prompt(addDepartment)
    .then((data) => addQueryDB(addDepartmentQuery, data.dept));
}

async function askRole() {
  const deptsQuery = await db.query(helpDepartmentQuery);
  let depts = [];
  deptsQuery[0].forEach((dept) => depts.push(dept.name));
  addRole[2].choices = [...depts];
  inquirer
    .prompt(addRole)
    .then((data) => addQueryDB(addRoleQuery, data.name, data.salary, findIndex(depts, data.dept)));
}

async function askEmployee() {
  const rolesQuery = await db.query(helpRoleQuery);
  const employeesQuery = await db.query(helpEmployeeQuery);
  let roles = [];
  let employees = ['None'];
  rolesQuery[0].forEach((role) => roles.push(role.title));
  employeesQuery[0].forEach((employee) => employees.push(employee.name));
  addEmployee[2].choices = [...roles];
  addEmployee[3].choices = [...employees];
  inquirer
    .prompt(addEmployee)
    .then((data) => addQueryDB(addEmployeeQuery, data.firstName, data.lastName, findIndex(roles, data.role), findIndex(employees, data.manager)));
}

async function updateRole() {
  const employeesQuery = await db.query(helpEmployeeQuery);
  const rolesQuery = await db.query(helpRoleQuery);
  let employees = [];
  let roles = [];
  employeesQuery[0].forEach((employee) => employees.push(employee.name));
  rolesQuery[0].forEach((role) => roles.push(role.title));
  updateEmployee[0].choices = [...employees];
  updateEmployee[1].choices = [...roles];
  inquirer
    .prompt(updateEmployee)
    .then((data) => updateQueryDB(updateEmployeeRoleQuery, findIndex(roles, data.role), findIndex(employees, data.employee)));
}

async function getQueryDB(query) {
  try {
    result = await db.query(query);
    console.log('\n');
    console.table(result[0]);
    askMain();
  } catch (err) {
    console.error(err);
  }
};

async function addQueryDB(query, ...args) {
  try {
    await db.query(query, args);
    if (args.length < 4) {
      console.log(`Added ${args[0]} to the database.`);
    } else {
      console.log(`Added ${args[0]} ${args[1]} to the database.`);
    }
    askMain();
  } catch (err) {
    console.error(err);
  }
};

async function updateQueryDB(query, ...args) {
  try {
    await db.query(query, args);
    console.log(`Updated Employee's role.`);
    askMain();
  } catch (err) {
    console.error(err);
  }
}

function findIndex(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return i + 1;
  }
}