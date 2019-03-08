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
                    <a title="Telegram" href="tg://resolve?domain=AndKoff"><img src={require("../../image/telegram.png")} className="iFooterSocialImg"></img></a>
                    <a title="Viber" href="viber://add?number=380672570187"><img src={require("../../image/viber.png")} className="iFooterSocialImg"/></a>
                    <img src={require("../../image/instagram.png")} className="iFooterSocialImg"></img>
                    <img src={require("../../image/youtube.png")} className="iFooterSocialImg"></img>
                    </div>
                
                </div>
            </div>
        );
    }
    
}