const mainQuestion = {
  'type': 'list',
  'message': 'What would you like to do?',
  'name': 'main',
  'choices': [
    'View All Departments',
    'View All Roles',
    'View All Employees',
    'Add A Department',
    'Add A Role',
    'Add An Employee',
    'Update An Employee Role',
    'Quit'
  ]
};

const addDepartment = {
  // 'type': 'list',
  // 'message': 'What would you like to do?',
  // 'name': 'main',
  // 'choices': [
  //   'View All Departments',
  //   'View All Roles',
  //   'View All Employees',
  //   'Add A Department',
  //   'Add A Role',
  //   'Add An Employee',
  //   'Update An Employee Role',
  //   'Quit'
  // ]
};
// What is the name of the department?
// Success: Added {name} to the database

const addEmployee = {};
// What is the employee's first name?
// What is the employee's last name?
// What is the employee's role?
// Who is the employee's manager? [Includes none]
// Success

const addRole = {};
// What is the name of the role?
// What is the salary of the role?
// Which department does the role belong to?
// Success: Added {} to the database

const updateEmployee = {};
// Which employee's role do you want to update? [List of employees (first and last)]
// Which role do you want to assign the selected employee? [List of roles]
// Success: Updated employee's role

module.exports = { mainQuestion };