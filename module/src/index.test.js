const BR = require("./index");

Promise.resolve(BR('v1/estados')).then(function (value) {
  console.log(value);
});

Promise.resolve(BR('v1/cidades')).then(function (value) {
    console.log(value);
  });