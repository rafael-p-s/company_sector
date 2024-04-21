import { Link } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";
import { Research } from "../components/researchInput/research";
import { BtnCompanySetor } from "../components/btncompanysetor/btnCompanySetor";
import { MainTable } from "../components/table/mainTable";

export function Home() {
  return (
    <>
      <NavBar>Company.Sector</NavBar>
      <Research />
      <BtnCompanySetor />
      <MainTable />
    </>
  );
}
