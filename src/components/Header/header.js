import React from 'react';
import './header.css';
import NP from '../../image/NP.png'

export default class Header extends React.Component{
    render(){
        return(
                <div className="iHeaderImage">
                    <div className="text">Бесплатная доставка по всей территории Украины</div><img src={NP} className="NP" />
                </div>
        );
    }
    
}