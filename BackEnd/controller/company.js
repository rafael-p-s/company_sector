import { connection } from "../config/configDB.js";

export async function createTableCompany() {
  const client = await connection();
  try {
    await client.query(
      "CREATE TABLE IF NOT EXISTS Company (id SERIAL4 PRIMARY KEY, razao_social VARCHAR NOT NULL, nome_fantasia VARCHAR, cnpj VARCHAR NOT NULL)"
    );
  } catch (error) {
    console.error("Erro ao criar tabela:", error);
  } finally {
    client.release();
  }
}
//Create Table
export async function insertCompany(company) {
  const client = await connection();
  try {
    await client.query(
      "INSERT INTO Company (razao_social, nome_fantasia, cnpj) VALUES ($1, $2, $3)",
      [company.razao_social, company.nome_fantasia, company.cnpj]
    );
  } catch (error) {
    console.error("Error to try insert in the table: ", error);
  } finally {
    client.release();
  }
//R

}

