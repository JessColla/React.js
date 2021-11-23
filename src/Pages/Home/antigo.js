// import "./styles.css";
// import bancoImg from "../../img/Banco.png";
// import Pesquisa from "../../componentes/campodepesquisa/Pesquisa";
// import CartazUnico from "../../componentes/CartazUnico/Cartazunico";
// import Aranha from "../../img/Aranha.png";
// import Power from "../../img/Power.png";
// import Cartazcomtitulo from "../../componentes/Cartazcomtitulo/Cartazcomtitulo";
// import Mulher from "../../img/Mulher.png";
// import Cofre from "../../img/Cofre.png";
// import Policial2 from "../../img/Policial2.png";
// import Guerra from "../../img/Guerra.png";
// import Star from "../../img/Star.png";
// import { ListItem } from "@material-ui/core";

// const Home = () => {
//   const DATA = [
//     {
//       id: "1",
//       title: "Homem Aranha",
//       src: Aranha,
//     },
//     {
//       id: "2",
//       title: "Power",
//       src: "/img/Power.png",
//     },
//     {
//       id: "3",
//       title: "O Futuro",
//       src: "/img/Aranha.png",
//       textoStar: "5.9/10",
//     },
//   ];

//   console.log("Data", DATA);

//   return (
//     <div className="Index">
//       <div className="Index-cabecalho">
//         <h1>React Prime</h1>
//         <Pesquisa />
//       </div>
//       <div className="Index-body">
//         <h1>Em Cartaz</h1>
//       </div>
//       <img src={bancoImg} alt="banco" />
//       <div className="Index-CartazUnico">
//         <CartazUnico
//           Cartaz={Aranha}
//           texto="Homem Aranha"
//           star={Star}
//           textoStar="8/10"
//         />
//         <CartazUnico
//           Cartaz={Power}
//           texto="The Power"
//           star={Star}
//           textoStar="5.9/10"
//         />
//       </div>

//       <div>
//         <h1 className="Index-CartarUnico-margem">Populares</h1>
//         <div className="Indez-CartazUnico">
//           <Cartazcomtitulo
//             Cartaztitulo={Mulher}
//             texto="O Futuro"
//             star={Star}
//             textoStar="6.9/10"
//           />
//           <Cartazcomtitulo
//             Cartaztitulo={Cofre}
//             texto="El Cofre"
//             star={Star}
//             textoStar="8.9/10"
//           />
//         </div>
//       </div>
//       <div>
//         <h1 className="Index-CartarUnico-margem">Mais Votados</h1>
//         <div className="Index-CartazUnico">
//           <Cartazcomtitulo
//             Cartaztitulo={Policial2}
//             texto="007- O Ataque"
//             star={Star}
//             textoStar="7/10"
//           />
//           <Cartazcomtitulo
//             Cartaztitulo={Guerra}
//             texto="Viver ou Morrer"
//             star={Star}
//             textoStar="6/10"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
