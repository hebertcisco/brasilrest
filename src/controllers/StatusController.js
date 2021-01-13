const mongodb = require("../config/mongodb");

class StatusController {
  async show(req, res) {
    res.status(200);
    res.json({
      status: "online",
      date: new Date(),
      environment: process.env.NODE_ENV,
      database: {
        status: await mongodb
          .then(() => "Connected! <3")
          .catch((err) => `Disconnected )-; ${err}`),
      },
      aws: {
        region: process.env.AWS_REGION || "local",
        function_version: process.env.AWS_LAMBDA_FUNCTION_VERSION || "local",
      },
    });
  }
}

module.exports = new StatusController();
