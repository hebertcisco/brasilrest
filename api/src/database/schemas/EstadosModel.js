const mongoose = require("mongoose");

const EstadosModel = new mongoose.Schema(
  {
    ID: {
      type: String,
      required: true,
    },
    Sigla: {
      type: String,
      required: true,
    },
    Nome: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model("estados", EstadosModel);
