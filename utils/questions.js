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
  'type': 'input',
  'message': 'What is the name of the department?',
  'name': 'dept'
};

const addRole = [{
  'type': 'input',
  'message': "What is the name of the role?",
  'name': 'name'
},
{
  'type': 'input',
  'message': "What is the salary of the role?",
  'name': 'salary'
},
{
  'type': 'list',
  'message': "Which department does the role belong to?",
  'name': 'dept',
  'choices': []
}];;

const addEmployee = [{
  'type': 'input',
  'message': "What is the employee's first name?",
  'name': 'firstName'
},
{
  'type': 'input',
  'message': "What is the employee's last name?",
  'name': 'lastName'
},
{
  'type': 'list',
  'message': "What is the employee's role?",
  'name': 'role',
  'choices': []
},
{
  'type': 'list',
  'message': "Who is the employee's manager?",
  'name': 'manager',
  'choices': ['None']
}];

const updateEmployee = [{
  'type': 'list',
  'message': "Which employee's role do you want to update?",
  'name': 'employee',
  'choices': []
},
{
  'type': 'list',
  'message': "Which role do you want to assign the selected employee?",
  'name': 'role',
  'choices': []
}];
// Success: Updated employee's role

module.exports = { mainQuestion, addDepartment, addRole, addEmployee, updateEmployee };