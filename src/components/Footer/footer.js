import React, { Component } from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="iFooterWrapper">

                <div className="iFooterLogo">
                YAROV<img src={require('../../image/logo.png')} className="logo_img1" />T
                </div>

                <div className="iFooterAbout">
               <h6>О нашем интернет-магазине:</h6>
                <p>Гуминовые удобрения ТМ «YAROVIT» это качественная органика и минералы изготовленные по европейским стандартам.</p>
                </div>

                <div className="iFooterContacts">
                <h6>Контакты:</h6>
                    <div className="iFooterPhone">
                    <img src={require("../../image/phone.png")}></img><a href="tel:+380672570187">+38(067)2570187</a>
                    </div>
                    <div className="iFooterMail">
                    <img src={require("../../image/mail.png")}></img><a href="mailto:andkoff.ua@gmail.com">andkoff.ua@gmail.com</a>
                    </div>
                    
                    <div className="iFooterSocial">
                    <img src={require("../../image/telegram.png")}></img>
                    <img src={require("../../image/viber.png")}></img>
                    <img src={require("../../image/instagram.png")}></img>
                    <img src={require("../../image/youtube.png")}></img>
                    </div>
                
                </div>
            </div>
        );
    }
    
}