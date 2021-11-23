import React from "react";
import "./styles.css";
import bancoImg from "../../img/Banco.png";
import Pesquisa from "../../componentes/campodepesquisa/Pesquisa";
import CartazUnico from "../../componentes/CartazUnico/Cartazunico";
import Titulo from "../../componentes/Titulo";
import BasicModal from "../../componentes/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import POPULAR from "../../Data/popular";
import { useHistory } from "react-router-dom";
import CARTAZ from "../../Data/cartaz";
import MAISVOTADOS from "../../Data/maisvotados";

const Home = () => {
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cliquePopular = (item) => {
    history.push("/FilmeDetalhe/" + item.id, { data: item });
  };

  return (
    <div className="Index">
      <div className="Index-Cabecalho">
        <div className="Index-Cabecalho-Menu">
          <button
            className="Index-Cabecalho-Button"
            style={{ background: "transparent", border: "none" }}
            onClick={handleOpen}
          >
            <MenuIcon style={{ color: "white" }} fontSize="large" />
          </button>
          <div>
            <h1 className="Index-Cabecalho-Prime">React Prime</h1>
          </div>
        </div>
        <Pesquisa />
      </div>
      <div className="Index-body">
        <Titulo titulo="Em Cartaz" />
      </div>
      <img className="Index-bancoImg" src={bancoImg} alt="banco" />
      <div className="Index-CartazUnico">
        {CARTAZ.map((item) => (
          <CartazUnico
            onClick={() => cliquePopular(item)}
            {...item}
            marginleft={10}
            imgstar={item.star}
          />
        ))}
      </div>

      <div>
        <Titulo titulo="Populares" />
        <div className="Index-CartazUnico">
          {POPULAR.map((item) => (
            <CartazUnico
              onClick={() => cliquePopular(item)}
              texto={item.texto}
              img={item.img}
              textoStar={item.textoStar}
              marginleft={10}
              imgstar={item.star}
            />
          ))}
        </div>
      </div>

      <div>
        <Titulo titulo="Mais Votados" />
        <div className="Index-CartazUnico">
          {MAISVOTADOS.map((item) => (
            <CartazUnico
              onClick={() => cliquePopular(item)}
              texto={item.texto}
              img={item.img}
              textoStar={item.textoStar}
              marginleft={10}
              imgstar={item.star}
            />
          ))}
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Home;
