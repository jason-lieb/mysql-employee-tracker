const helpDepartmentQuery = `
  SELECT name
  FROM department
  `;

const helpRoleQuery = `
  SELECT title
  FROM role
  `;

const helpEmployeeQuery = `
  SELECT CONCAT(first_name, ' ', last_name) AS name
  FROM employee
  `;

module.exports = { helpDepartmentQuery, helpRoleQuery, helpEmployeeQuery };
