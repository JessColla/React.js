import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import "./index.css";

const Filmes = (props) => {
  const history = useHistory();
  const cliqueFilmes = () => {
    history.push("/");
  };
  return (
    <div className="App-Filmes-body" onClick={cliqueFilmes}>
      <h4 className="App-Filmes-Titulo">{props.titulo}</h4>
      <div className="App-Filmes-classificação">
        <img src={props.imgStar} />
        <h6 className="App-Filmes-classificação-texto-Star">
          {props.textoStar}
        </h6>
      </div>
      <div className="App-Filmes-Detalhes">
        <div>
          <h5 className="App-Filmes-Detalhes-button">{props.detalhes}</h5>
        </div>
        <div className="App-Filmes-Detalhes-lixeira">
          <DeleteIcon />
          <FavoriteIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};

export default Filmes;
