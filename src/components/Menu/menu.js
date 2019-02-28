import React, { Component } from 'react';
import './menu.css';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="wrapper_menu">
            <div className="logo">
            YAROVIT AGRO
            </div>
                <div className="menuItem">
                    <a href="#company">О компании</a>
                </div>
                <div className="menuItem">
                    <a href="#products">Каталог</a>
                </div>
                <div className="menuItem">
                    <a href="#contacts">Контакты</a>
                </div>
                <div className="callButton">
                    Подзвонить
                </div>
            </div>
        );
    }
    
}