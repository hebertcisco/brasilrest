"use strict";

const Fetch = require("./services/api.service");

module.exports = async (route) => {
  const result = await Fetch(route);
  if (result.length < 1)
    return {
      error: "service_error",
      message: "O serviço não retornou eventos",
    };
  return result;
};
