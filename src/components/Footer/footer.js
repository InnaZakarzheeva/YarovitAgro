import React, { Component } from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="iFooterWrapper">
                <div className="iFooterLogo">
                <div>YAROVIT AGRO</div>
                </div>
                <div className="iFooterAbout">
                О нашем интернет-магазине:
                <p>Гуминовые удобрения ТМ «YAROVIT AGRO» это качественная органика и минералы изготовленные по европейским стандартам.</p>
                </div>
                <div className="iFooterContacts">
                Контакты:
                    <div className="iFooterPhone">
                    <img src={require("../../image/phone.png")}></img><a href="tel:+380900000000">+38 (090) 00 00 000</a>
                    </div>
                    <div className="iFooterMail">
                    <img src={require("../../image/mail.png")}></img><a href="tel:+380900000000">+38 (090) 00 00 000</a>
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