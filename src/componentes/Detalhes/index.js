import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import "./Detalhe.css";

const Detalhes = (props) => {
  console.log(props);

  const history = useHistory();
  const cliqueHome = () => {
    history.push("/");
  };

  return (
    <div>
      <div>
        <ArrowBackIcon onClick={cliqueHome} className="App-Detalhe-Return" />
      </div>
      <img src={props.imgTopo} className="imagemTopo" />
      <div className="App-Detalhe-box">
        <div className="App-Detalhe-texto">
          <h1>{props.textoTitulo}</h1>
          <h2>{props.textonota}</h2>
        </div>
        <img src={props.imgStar} />
        <div className="App-Detalhe-classificação">
          <h6 className="App-Detalhe-texto1">{props.texto1} </h6>
          <h6 className="App-Detalhe-texto1">{props.texto2}</h6>
        </div>
        <h1 className="App-Detalhe-texto3">{props.textoDescricao}</h1>
        <h6 className="App-Detalhe-texto-lorem">{props.textoLorem}</h6>
      </div>
    </div>
  );
};

export default Detalhes;
