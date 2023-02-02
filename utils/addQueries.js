const addDepartmentQuery = `
  INSERT INTO department (name)
  VALUES (?)
  `;

const addRoleQuery = `
  INSERT INTO role (title, salary, department_id)
  VALUES (?, ?, ?)
  `;

const addEmployeeQuery = `
  INSERT INTO employee (first_name, last_name, role_id, manager_id)
  VALUES (?, ?, ?, ?)
  `;

  module.exports = { addDepartmentQuery, addRoleQuery, addEmployeeQuery };
