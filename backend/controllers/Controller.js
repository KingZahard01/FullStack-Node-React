// importar el modelo
import Model from "../models/Model.js";

//** Metodos para el crud */

// mostrar todos los registros
export const getAll = async (req, res) => {
  try {
    const blogs = await Model.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// mostrar un registro
export const getOne = async (req, res) => {
  try {
    const blog = await Model.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// crear un registro
export const createOne = async (req, res) => {
  try {
    await Model.create(req.body);
    res.json({
      message: "Registro creado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// actualizar un registro
export const updateOne = async (req, res) => {
  try {
    await Model.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro actualizado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// eliminar un resgistro
export const deleteOne = async (req, res) => {
  try {
    await Model.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "Registro eliminado correctamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
