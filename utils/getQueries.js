const getDepartmentQuery = `
  SELECT *
  FROM department
  `;

const getRoleQuery = `
  SELECT role.id, role.title, department.name AS department, role.salary
  FROM role
  JOIN department
  ON role.department_id = department.id
  `;

const getEmployeeQuery = `
  SELECT e.id, e.first_name, e.last_name, role.title,
    department.name AS department, role.salary,
    CONCAT(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  JOIN role
  ON e.role_id = role.id
  JOIN department
  ON role.department_id = department.id
  LEFT JOIN employee m
  ON m.id = e.manager_id
  `;

module.exports = { getDepartmentQuery, getRoleQuery, getEmployeeQuery };
