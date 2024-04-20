import { connection } from "../config/configDB.js";

export async function createTableSector() {
  const client = await connection();
  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS Sector ( id SERIAL4 PRIMARY KEY, descricao VARCHAR NOT NULL)"
    );
  } catch (error) {
    console.error("Erro ao criar tabela:", error);
  } finally {
    client.release();
  }
}
//Create Table
export async function insertSector(sector) {
  const client = await connection();
  try {
    await client.query("INSERT INTO Sector (descricao) VALUES ($1)", [
      sector.descricao,
    ]);
  } catch (error) {
    console.error("Error to try insert in the table: ", error);
  } finally {
    client.release();
  }
}
