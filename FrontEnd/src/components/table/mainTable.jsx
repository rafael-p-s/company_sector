import React from "react";

export function MainTable({ selectedValue }) {
//This function will check the selectedValue is ===null, if != will change de first latter inside the selectedValue
  function capitalizeFirstLetter(string) {
    if (string === null || string === undefined) {
      return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const capitalizedSelectedValue = capitalizeFirstLetter(selectedValue);
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          height: "15vh !import",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>{capitalizedSelectedValue}</h1>
        </div>
      </div>
    </>
  );
}
