const fetch = require("node-fetch");
const iconv = require("iconv-lite");

function parseResponse(response) {
  if (!response.ok) {
    throw new Error("Erro ao obter dados");
  }
  return response
    .arrayBuffer()
    .then((arrayBuffer) =>
      iconv.decode(Buffer.from(arrayBuffer), "iso-8859-1").toString()
    )
    .then(parseJSON);
}
function parseJSON(bodyString) {
  return bodyString;
}

function parseError(error) {
  throw new Error(error.message);
}
module.exports = async (route) => {
  return await fetch(`https://brasilrest.now.sh/${route}`, {
    method: "GET",
  })
    .then(parseResponse)
    .catch(parseError);
};
