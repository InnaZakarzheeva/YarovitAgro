import React, { Component } from 'react';
import './company.css';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class Company extends React.Component {
  render() {
    return (
        <div className="iCompanyWrapper">
            <ScrollableAnchor id={'company'}><h1>Гуминовые удобрения ТМ «YAROVIT AGRO» это качественная органика и минералы изготовленные по европейским стандартам.</h1></ScrollableAnchor>
           
            <p> <img className="imageCompany" src={require("../../image/company.jpg")}></img>Компания «YAROVIT AGRO» занимается производством и продажей органо-минеральных удобрений с 2005 года. 
В основе производства лежит качество выпускаемой продукции и качество сырьевого материала. 
Торьфьяные залежи Украины богаты на гуминовые вещества что в свою очередь дает конкурентное преимущество перед заграничными аналогами.  В Ровненской области, занимающей второе место по количеству залежей торфа после Волыни, в пгт Смыга Дубенского района действует предприятие по производству гуматов «YAROVIT AGRO»
В центральной части Украины открыт филиал для удобства и сокращения времени доставки.
Вся продукция компании отправляется курьерскими службами доставки : Интайм и Новая почта.</p>

        </div>
    );
  }
}