//Hooks:
import React, { useState } from "react";

//CSS
import styledropdown from "./Dropdown.module.css";
//Components
import { MainTable } from "../table/mainTable";

export function Research() {
  const [selection, setSelection] = useState("todos");

  const [placeholderText, setPlaceholderText] = useState(
    "Informe o nome da Empresa ou do Setor."
  );
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelection(value);
    console.log(value);
    if (value === "todos") {
      return setPlaceholderText("Informe o nome da Empresa ou do Setor.");
    }
    if (value === "company") {
      return setPlaceholderText("Informe o nome da Empresa.");
    }
    return setPlaceholderText("Informe o nome do Setor.");
  };

  return (
    <>
      <div className={styledropdown.div_father}>
        <div className={styledropdown.div_select}>
          <select
            name="choices"
            id="management-choices"
            onChange={handleSelect}
          >
            <option value="todos">Todos</option>
            <option value="company">Empresas</option>
            <option value="sector">Setor</option>
          </select>
        </div>
        <div className={styledropdown.div_input}>
          <input type="text" placeholder={placeholderText} />
        </div>
      </div>
      <MainTable selectedValue={selection} />
    </>
  );
}
