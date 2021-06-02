const estadosModel = require("../database/schemas/EstadosModel");

const runMiddleware = require('expmidd');
const Cors = require('cors');

const cors = Cors({
  methods: ['GET'],
});
class EstadosController {
  async read(req, res) {
    const estados = await estadosModel.find({});
    await runMiddleware(req, res, cors);
    return res.status(200).json(estados);
  }
}

module.exports = new EstadosController();
