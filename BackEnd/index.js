import express from "express";
import { createTableCompany, insertCompany } from "./controller/company.js";
import { createTableSector, insertSector } from "./controller/sector.js";

const app = express();
const port = 3333;
app.use(express.json());

// Start the table in the bd
await createTableCompany();
await createTableSector();

// app.get("/", (request, response) => {
//   return response.json({
//     evento: "Avaliação",
//     feito: "Rafael Prado",
//   });
// });

//C
app.post("/company", async function (req, res) {
  try {
    const company = await insertCompany.create({
      razao_social: req.body.razao_social,
      nome_fantasia: req.body.nome_fantasia,
      cnpj: req.body.cnpj,
    });
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json(err);
  }
});
app.post("/sector", async function (req, res) {
  try {
    const sector = await insertSector.create({
      descricao: req.body.descricao,
    });
    res.status(201).json(sector);
  } catch (err) {
    res.status(400).json(err);
  }
});

//R
app.get("/company", async (req, res) => {
  try {
    const company = await insertCompany.findAll();
    return res.status(200).json(company);
  } catch (err) {}
});
app.get("/sector", async (req, res) => {
  try {
    const sector = await insertSector.findAll();
    return res.status(200).json(sector);
  } catch (err) {}
});
//U
app.put("/company", async (req, res) => {
  try {
    const company = await insertCompany.update();
    return res.status(200).json(company);
  } catch (err) {}
});
app.put("/sector", async (req, res) => {
  try {
    const sector = await insertSector.update();
    return res.status(200).json(sector);
  } catch (err) {}
});
//D
app.delete("/comapny:id", async (req, res) => {
  try {
    await insertCompany.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});
app.delete("/sector:id", async (req, res) => {
  try {
    await insertSector.destroy({ where: { id: req.params.id } });
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});
//Where Bakcend running
app.listen(port, () => {
  console.log(`Backend running on port: ${port}`);
});
