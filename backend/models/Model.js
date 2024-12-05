// Un modelo es una abstraccion que representa una tabla en la base de datos

// importamos la conexion a la DB
import db from "../database/db.js";
// importamos sequielize
import { DataTypes } from "sequelize";

const Model = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default Model;
