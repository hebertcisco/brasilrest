const estadosModel = require("../database/schemas/EstadosModel");

class EstadosController {
  async read(req, res) {
    const estados = await estadosModel.find({});

    return res.status(200).json(estados);
  }
}

module.exports = new EstadosController();
