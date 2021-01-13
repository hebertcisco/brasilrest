const express = require("express");
const statusController = require("./controllers/StatusController");

const routes = express.Router();
const estadosController = require("./controllers/EstadosController");
const cidadesController = require("./controllers/CidadesController");

routes.get("/", async (req, res) => {
  res.redirect("/v1/status");
});

routes.get("/v1/status", async (req, res) => {
  await statusController.show(req, res);
});

routes.get("/v1/estados", estadosController.read);
routes.get("/v1/cidades", cidadesController.read);

module.exports = routes;
