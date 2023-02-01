DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
  id PRIMARY KEY INT NOT NULL,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
  id PRIMARY KEY INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  department_id INT NOT NULL,
  salary DECIMAL NOT NULL,
  FOREIGN KEY(department_id),
  REFERENCES department(id)
);

CREATE TABLE employee(
  id PRIMARY KEY INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY(role_id),
  REFERENCES role(id),
  FOREIGN KEY(manager_id),
  REFERENCES employee(id)
);
