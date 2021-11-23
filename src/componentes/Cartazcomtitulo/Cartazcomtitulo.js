import React from "react";

import './Cartazcomtitulo.css'

const Cartazcomtitulo = (props) => {
    return (
        <div style={{ marginLeft: props.marginleft }}>
            <img src={props.Cartaztitulo} className='App-img-Cartazcomtitulo' />
            <h6 className={'App-img-Cartazcomtitulo-texto'}>{props.texto}</h6>
            <div className='App-img-Cartazcomtitulo-Nota'>
                <img src={props.star} className='App-img-Cartazcomtitulo-Star' />
                <h6 className='App-img-Cartazcomtitulo-textoStar'>{props.textoStar} </h6>
            </div>
        </div >


    )
}
export default Cartazcomtitulo

