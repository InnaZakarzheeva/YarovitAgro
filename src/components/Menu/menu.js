import React, { Component } from 'react';
import './menu.css';


export default class Menu extends React.Component{
    render(){
        return(
            <div className="wrapper_menu">
            <div className="logo">
            YAROV<img src={require('../../image/logo.png')} className="logo_img" />T
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
                <a href="tel:+380672570187" className="callButton">
                    Позвонить
                </a>                
                <div className="callText">
                    <a href="tel:+380672570187">+38(067) 25 70 187</a>
                </div>
            </div>
        );
    }
    
}