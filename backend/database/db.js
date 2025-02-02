// Sequelize es un ORM para Node.js
import { Sequelize } from "sequelize";
// nombre-db, user, password
const db = new Sequelize("zeabur", "root", "EpcjFvSO426K8LWG1gmD0nNr95Yz7xh3", {
  host: "free.clusters.zeabur.com",
  dialect: "mysql",
  port: 32438,
});

export default db;

/* zeabur: 
username=root
password= EpcjFvSO426K8LWG1gmD0nNr95Yz7xh3
database=zeabur
host=free.clusters.zeabur.com
port=32438
*/

/*
CREATE TABLE zeabur.blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content VARCHAR(300) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
);

INSERT INTO blogs (id, title, content) VALUES
(1, 'Título 1', 'Contenido de mi primer post'),
(2, 'Título 2', 'Contenido de mi segundo post'),
(3, 'Título 3', 'Contenido de mi tercer post'),
(4, 'Título 4', 'Contenido de mi cuarto post'),
(5, 'Título 5', 'Contenido de mi quinto post'),
(6, 'Título 6', 'Contenido de mi sexto post');
*/
