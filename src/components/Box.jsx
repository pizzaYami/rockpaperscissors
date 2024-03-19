import React from "react";

function Box({ title, data, result }) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <img src={data.url} alt={data.name} />
      <h2 className={`${result}`}> {result}</h2>
    </div>
  );
}

export default Box;
