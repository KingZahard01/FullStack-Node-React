// Sequelize es un ORM para Node.js
import { Sequelize } from "sequelize";
// nombre-db, user, password
const db = new Sequelize("crud_app", "admin", "rootawsdb", {
  host: "database-notas.chmu0coycs49.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

export default db;

/*
INSERT INTO blogs (id, title, content) VALUES
(1, 'Título 1', 'Contenido de mi primer post'),
(2, 'Título 2', 'Contenido de mi segundo post'),
(3, 'Título 3', 'Contenido de mi tercer post'),
(4, 'Título 4', 'Contenido de mi cuarto post'),
(5, 'Título 5', 'Contenido de mi quinto post'),
(6, 'Título 6', 'Contenido de mi sexto post');
*/
