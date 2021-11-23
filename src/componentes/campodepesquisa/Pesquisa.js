import React from "react";

import "./Pesquisa.css";
import SearchIcon from "@mui/icons-material/Search";

const Pesquisa = (props) => {
  return (
    <div className="App-cabecalho-ajusteflex">
      {/* <div><input placeholder={props.placeholder} style={{ backgroundColor: props.color }} className="App-input"></input></div> */}
      <div>
        <input placeholder="Procurar Algo?" className="App-input"></input>
      </div>
      <div>
        <SearchIcon className="App-cabecalho-Search" fontSize="large" />
      </div>
    </div>
  );
};
export default Pesquisa;
