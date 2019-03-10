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
    price1: "1000л-59.5ГРН/л",
    price2: "100л-64ГРН/л",
    price3: "20л-69ГРН/л",
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
    details_title_item: 'Расчет нормы гумата калия',
    norma:'Для грамотного расчета нормы гумата калия вносимого удобрения, необходимо учесть общую долю азотных удобрений, которые используются на 1 га земли. С учетом этого показателя, на 1 га понадобится 0,4-1л гумата калия (доля гуминовых кислот должна составлять 84 г/л).',
    image: 
      require("./image/product1.jpg")
  
  },
    {
      title: "Гумат калия YAROVIT «Бор»",
      photo:[
        require('./image/b_1.jpg'),
        require('./image/b_2.jpg')
      ],
      aboutProduct: "Применение гумат калия «Бор» приводит к росту урожайности подсолнуха в среднем на 15-35%. Способствует повышению содержания масла. Уменьшает содержания вредных веществ в растении в особенности взращиваемых по технологии «CLEARFIELD».",
      price1: "1000л-67.5ГРН/л",
      price2: "100л-70ГРН/л",
      price3: "20л-75ГРН/л",
      detail_item: [
        "Равномерное созревание;", "Повышение масленичности;", "Стимуляция роста и развития растений;", "Снижение фитотоксичности от используемых пестицидов;", "Формирование и стимулирование развития сильной корневой системы, что является залогом хорошего урожая.", "Ускорение созревание на 10-15 дней;"
      ],
      detail_item1: [
        "Гуминовые кислоты 84 г / л;",
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
      details_title_item: 'Инструкции по приготовление рабочего раствора Гумат калия «Бор»',
      norma:'Залить 2/3 необходимое количество воды, включить перемешивание, внести подготовленное количество препарата 0.5 - 1 л/га, через 2-3 минуты долить 1/3 воды. Полученным раствором обработать растения любым удобным способом.',
      image: 
        require("./image/product.jpg")
    
    },
      {
        title: "Гумат калия YAROVIT «Цинк»",
        photo:[
          require('./image/zn_1.jpg'),
          require('./image/zn.jpg')
        ],
        aboutProduct: "Применение гумат калия «Цинк» приводит к росту урожайности кукурузы в среднем на 5-10 центнеров при условиях оптимального агрофона и на 3-4 центнера с 1 га при условиях засухи. Повышает засухо-устойчивость растения.",
        price1: "1000л-67.5ГРН/л",
        price2: "100л-70ГРН/л",
        price3: "20л-75ГРН/л",
        detail_item: [
          "Формирование и стимулирование развития сильной корневой системы;", "Поддерживает растения в питательных веществах;", "Снижает гербицидную нагрузку;", "Способствует увеличению зеленой массы;", "Увеличивает массу кочана кукурузы;", "Ускорение созревание на 8-10 дней;"
        ],
        detail_item1: [
          " Гуминовые кислоты 84 г / л;",
          " Фульвовые кислоты 42,4 г / л",
          "Азот 10 г / л;",
          " Фосфор 8 г / л;",
          "Калий 24,1г / л;",
          "Цинк 17 г / л;",
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
        details_title_item: 'Инструкции по приготовление рабочего раствора Гумат калия «Цинк»',
        norma:'Залить 2/3 необходимое количество воды, включить перемешивание, внести подготовленное количество препарата 0.5 - 1 л/га, через 2-3 минуты долить 1/3 воды. Полученным раствором обработать растения любым удобным способом. 1-е опрыскивание в фазу всходов - появление 3-5-х листьев, совместно с после-всходовыми гербицидами.2-е опрыскивание в фазу -  появление 6-9-х листьев.',
        image: 
          require("./image/product3.jpg")
      
      }]
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <ScrollUpButton style={{background: "transparent", zIndex: "10000"}}/>
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

