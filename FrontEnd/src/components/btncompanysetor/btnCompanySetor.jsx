import React from "react";
import { NavLink } from "react-router-dom";

export function BtnCompanySetor() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1%",
        }}
      >
        <button
          style={{
            backgroundColor: "#398E2B",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            fontSize: "16px",
            margin: "0px 10px",
          }}
        >
          <NavLink
            to="/cadcompany"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            +Empresa
          </NavLink>
        </button>
        <button
          style={{
            backgroundColor: "#2B478E",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            textDecoration: "none",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            fontSize: "16px",
            margin: "0px 10px",
          }}
        >
          <NavLink
            to="/cadsector"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            +Setor
          </NavLink>
        </button>
      </div>
    </>
  );
}
