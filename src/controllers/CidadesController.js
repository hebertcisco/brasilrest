const cidadesModel = require("../database/schemas/CidadesModel");

class CidadesController {
  async read(req, res) {
    const cidades = await cidadesModel.find({});

    return res.status(200).json(cidades);
  }
}

module.exports = new CidadesController();
