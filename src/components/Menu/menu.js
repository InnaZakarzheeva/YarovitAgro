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
                <div className="callButton">
                    Позвонить
                </div>
                <div className="callText">
                    +380 67 25 70 187
                </div>
            </div>
        );
    }
    
}