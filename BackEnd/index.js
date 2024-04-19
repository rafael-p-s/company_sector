const express = require("express");

const app = express();

app.get("/", (request, response) => {
    // \/ will be return 
  return response.json({
    evento:"Avaliação",
    feito: "Rafael Prado"
  });
});

app.listen(3333);
