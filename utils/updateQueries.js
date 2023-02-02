const updateEmployeeRoleQuery = `
  UPDATE employee
  SET
    role_id = ?
  WHERE id = ?
  `;

module.exports = { updateEmployeeRoleQuery };