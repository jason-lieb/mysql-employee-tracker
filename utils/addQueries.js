const addDepartmentQuery = `
  INSERT INTO department
  VALUES (?, ?)
  `;

const addRoleQuery = `
  INSERT INTO role
  VALUES (?, ?, ?, ?)
  `; //

const addEmployeeQuery = `
  INSERT INTO employee
  VALUES (?, ?, ?, ?, ?)
  `; //

  module.exports = { addDepartmentQuery, addRoleQuery, addEmployeeQuery };
