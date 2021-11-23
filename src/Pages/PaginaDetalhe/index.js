import React from "react";
import { useLocation } from "react-router-dom";
import Detalhes from "../../componentes/Detalhes";
import Star from "../../img/Star.png";

const PaginaDetalhe = () => {
  const params = useLocation();
  const film = params.state.data;
  console.log(" ddd", film);
  const CARTAZ = {
    id: film.id,
    imgTopo: film.img,
    textoTitulo: film.texto,
    textonota: film.textoStar,
    imgStar: Star,
    texto1: film.categoria,
    texto2: film.subcategoria,
    textoDescricao: film.descricao,
    textoLorem:
      "Lorem ipsum dolor sit amet. Aut consequatur beatae id ipsum incidunt sit tempora nihil vel alias suscipit ad animi laborum ut animi dignissimos est laudantium magni. Est veritatis commodi eos dolorem laboriosam eos ratione illum a sunt officiis sed enim ratione aut repudiandae officiis qui consequatur blanditiis? Quo sunt pariatur et voluptatem inventore in iusto quis aut consectetur nobis ut accusantium eius cum nobis fugit. Vel dolorem consequuntur aut quasi quaerat vel provident veritatis. Qui aliquam fuga ut ipsa recusandae At illo vitae et voluptatum blanditiis qui nihil consequuntur aut laborum ipsum sit odio cupiditate? Est quisquam sunt eum mollitia odio aut soluta rerum in ratione esse ut doloribus minus eos assumenda porro! Aut itaque voluptatem aut error voluptas eos veniam quidem et iusto repellat et saepe debitis. Eos debitis libero ad consequatur odit qui tenetur officia? Et omnis accusamus rem soluta incidunt in iusto omnis. Est labore explicabo quo optio atque et cupiditate cupiditate quo quia internos. Ut dicta amet et officiis obcaecati et Quis possimus.",
  };

  return (
    <div>
      <Detalhes {...CARTAZ} />
    </div>
  );
};

export default PaginaDetalhe;
