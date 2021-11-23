import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Filmes from "../../Filmes/index";
import Data from "../../Data/meusfilmes";
import "./index.css";
import BasicModal from "../../componentes/Modal";
import { useHistory } from "react-router-dom";

const MeusFilmes = () => {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cliqueVoltar = () => {
    history.push("/");
  };

  // const params = useLocation();
  // const film = params.state.DATA;

  return (
    <div className="App-body">
      <div className="App-cabecalho-titulo-meusFilmes">
        <div>
          <buttton
            className="App-cabecalho-button-meusFilmes"
            style={{ background: "transparent", border: "none" }}
            onClick={handleOpen}
          >
            <MenuIcon
              style={{ color: "white" }}
              fontSize="large"
              onClick={() => cliqueVoltar}
            />
          </buttton>
        </div>
        <div>
          <h1 className="App-cabecalho-button-titulo">Meus Filmes</h1>
        </div>
      </div>
      <div>
        {Data.map((item) => (
          <Filmes {...item} />
        ))}
      </div>
      <BasicModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default MeusFilmes;
