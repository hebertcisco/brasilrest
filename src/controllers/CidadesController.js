const cidadesModel = require("../database/schemas/CidadesModel");

const runMiddleware = require("expmidd");
const Cors = require("cors");

const cors = Cors({
  methods: ["GET"],
});
class CidadesController {
  async read(req, res) {
    await runMiddleware(req, res, cors);
    const cidades = await cidadesModel.find({});

    return res.status(200).json(cidades);
  }
}

module.exports = new CidadesController();
