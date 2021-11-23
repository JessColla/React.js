import React from "react";

import "./Cartazunico.css";

const CartazUnico = (props) => {
  return (
    <div onClick={props.onClick} className="App-Cartaz-Unico">
      <img src={props.img} className="App-img-CartazUnico" />
      <h6 className="App-img-CartazUnico-texto">{props.texto}</h6>
      <div className="App-img-CartazUnico-Nota">
        <img src={props.imgstar} className="App-img-CartazUnico-Star" />
        <h6 className="App-img-CartazUnico-textoStar">{props.textoStar}</h6>
      </div>
    </div>
    // className = 'App-img-CartazUnico'
  );
};
export default CartazUnico;
