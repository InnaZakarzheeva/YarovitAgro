import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Product from './components/Products/product';
import Company from './components/Company/company';

const arr = [
  {
    title: "Гумат калия YAROVIT «Универсальный»",
    photo:[
      require('./image/2.jpg'),
      require('./image/univ1.jpg')
    ],
    aboutProduct: "Применение гумат калия «Универсальный» приводит к росту урожайности в среднем на 15-30%, а на овощных культурах — до 40%, заметному повышению содержания полезных веществ в растениях (витаминов, сахаров, в пшенице — клейковины, в масличных культурах — масел). Уменьшает содержания вредных веществ в растениях и плодах (например, нитратов). Стимулирует деятельность почвенных микроорганизмов, что ведет к обогащению почвы доступными для растений элементами питания.",
    price: "80 грн",
    detail_item: [
      "Повышение объема получаемого урожая до 35% (в том числе и на почвах низкой плодородности);", " Укрепление иммунитета, обеспечение стойкости культур к болезням;", " Способствование формированию крепкой и сильной корневой системы;", " Качественное улучшение урожая;", "Повышение объема получаемого урожая до 35% (в том числе и на почвах низкой       плодородности);"
    ],
    detail_item1: [
      " Гуминовые кислоты 84 г / л;",
      " Фульвовые кислоты 42,4 г / л",
      "Азот 10 г / л;",
      " Фосфор 8 г / л;",
      "Калий 24,1г / л;",
      "Кремний 40 мг / л;",
      " Сэра 14 мг / л;",
      "Магний 0,9 мг / л;",
      " Марганец 19,6 мг / л;",
      "Цинк 10 мг / л;",
      "Никелю 1,14 мг / л;",
      "Медь 18,6 мг / л;",
      " Кобальт 4,53 мг / л;",
      "Молибден 0,4 мг / л;",
      "PH – 9,5."
    ],
    image: 
      require("./image/product.jpg")
    

  }
]
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <ScrollUpButton style={{background: "transparent"}}/>
      <Menu/>
      <Header/>
      <Company/>
      <br></br>
      <div>
        {
          arr.map(item=>{
            return(
              <Product item={item}/>
            )
          })
        }
      </div>
      
      <br></br>
      <br></br>
      <ScrollableAnchor id={'contacts'}><Footer/></ScrollableAnchor>
      </div>
    );
  }
}

