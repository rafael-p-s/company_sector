import express from "express";
import { createTable, insertCompany } from "./controller/company.js";

const app = express();
app.use(express.json());

// Inicializa a tabela no banco de dados
createTable();

app.get("/", (request, response) => {
  return response.json({
    evento: "Avaliação",
    feito: "Rafael Prado",
  });
});

app.post("/company", async function (req, res) {
  try {
    await insertCompany(req.body);  // Torna a chamada assíncrona para lidar adequadamente
    res.json({
      statusCode: 200,
      message: "Empresa inserida com sucesso"
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Erro ao inserir empresa",
      error: error.message
    });
  }
});


app.listen(3333, () => {
  console.log("Servidor rodando na porta 5432");
});
