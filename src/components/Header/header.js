import React from 'react';
import './header.css';
import NP from '../../image/NP1.png'

export default class Header extends React.Component{
    render(){
        return(
            
                <div className="iHeaderImage">
                {/*
                <div className="elements"> <img src={require("../../image/elements.png")} /></div>
                */}
                    <div className="products" ><img src={require("../../image/prod.png")}/></div>
                    
                    <div className="text">
                    Бесплатная доставка по всей территории Украины
                    <img src={NP} className="NP" />
                    </div>
                    
                </div>
        );
    }
    
}