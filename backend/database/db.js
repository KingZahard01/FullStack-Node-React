// Sequelize es un ORM para Node.js
import { Sequelize } from "sequelize";
// nombre-db, user, password
const db = new Sequelize("crud_app", "admin", "rootawsdb", {
  host: "database-notas.chmu0coycs49.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

export default db;
