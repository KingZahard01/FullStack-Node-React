// Sequelize es un ORM para Node.js
import { Sequelize } from "sequelize";

const db = new Sequelize("crud_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
