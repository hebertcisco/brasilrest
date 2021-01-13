const mongoose = require("mongoose");

const CidadesModel = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Nome: {
      type: String,
      required: true,
    },
    Estado: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("cidades", CidadesModel);
