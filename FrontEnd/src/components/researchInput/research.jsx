import React, { useState } from "react";
import styledropdown from "./Dropdown.module.css";

export function Research() {
  const [selection, setSelection] = useState("todos");
  
  const [teste, setTeste] = useState("Informe o nome da Empresa ou do Setor.");
  const handleSelect = (e) => {
    const value = e.target.value;
    setSelection(value);
    console.log(value);
    if (value === "todos") {
      return setTeste("Informe o nome da Empresa ou do Setor.");
    }
    if (value === "company") {
      return setTeste("Informe o nome da Empresa.");
    }
    return setTeste("Informe o nome do Setor.");
  };

  return (
    <>
      <div className={styledropdown.div_father}>
        <div className={styledropdown.div_select}>
          <select name="choices" id="management-choices" onChange={handleSelect}>
            <option value="todos">Todos</option>
            <option value="company">Empresas</option>
            <option value="sector">Setor</option>
          </select>
        </div>
        <div className={styledropdown.div_input}>
          <input type="text" placeholder={teste} />
        </div>
      </div>
    </>
  );
}