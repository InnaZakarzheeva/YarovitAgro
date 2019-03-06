import React from "react";
import './product.css';
import Modal from 'react-responsive-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Arrow from '../../image/down.png'
import ScrollableAnchor from 'react-scrollable-anchor';


export default class Product extends React.Component{
    state = {
        open: false,
        openD: false,
      };
     
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        const { open } = this.state; 
        return(
            <div className="wrapper">
            <div className="product">
            <ScrollableAnchor id={'products'}>
                <h2 className="title">
                    Гумат калия YAROVIT «Универсальный»  
                </h2>
            </ScrollableAnchor>
                <div className="block_product">
               
                    <div className="photo">
                        <Carousel>
                            <div>
                                <img className="picture" src={require('../../image/2.jpg')} />
                            </div>
                            <div>
                                <img className="picture" src={require('../../image/univ1.jpg')} />
                            </div>
                            {/*<div>
                                <img className="picture" src={require('../../image/1.jpg')} />
                            </div>
                            <div>
                                <img className="picture" src={require('../../image/3.jpg')} />
                            </div>
                            <div>
                                <img className="picture" src={require('../../image/b.jpg')} />
                            </div>
                            <div>
                                <img className="picture" src={require('../../image/zn.jpg')} />
                            </div>*/}

                        </Carousel>
                    </div>
                    <div className="order_description">
                        <div className="aboutProduct">
                            Применение гумат калия «Универсальный» приводит к росту урожайности в среднем на 15-30%, а на овощных культурах — до 40%, заметному повышению содержания полезных веществ в растениях (витаминов, сахаров, в пшенице — клейковины, в масличных культурах — масел). Уменьшает содержания вредных веществ в растениях и плодах (например, нитратов). Стимулирует деятельность почвенных микроорганизмов, что ведет к обогащению почвы доступными для растений элементами питания.
                            </div>
                        <div className="price">    
                            <div className="priceText">
                                Стоимость:
                            </div>
                            <div className="priceNumber">
                                80 ГРН
                            </div>
                         </div>
                        <button onClick={this.onOpenModal} className="buy" type="submit">Купить</button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <div className="yourOrder">Ваш заказ: </div>
                                <div className="modalWindow">Gumat i td i tpasdasdasd</div>
                                <div className="modalWindow">Стоимость: 80 ГРН  </div>
                                <div className="modalWindow">Наш телефон:</div>
                                <div className="modalWindow"><a href="tel:+380672570187">+38 (067) 25-70-187</a></div>
                            </Modal>
                    </div>
                </div>
                <div className="seeMore" onClick={() =>this.setState({openD: !this.state.openD})}>
                    Подробнее <img src={Arrow} />
                </div>{
                        this.state.openD ? (
                        <div className="details">
                            <div className="block_details">
                                <div className="details_title">
                                    Преимущества:
                                </div>
                                <ul>
                                    <li><span className="detail-item">
                                         Повышение объема получаемого урожая до 35% (в том числе и на почвах низкой плодородности);
                                         </span>
                                    </li>
                                    <li><span className="detail-item">
                                         Укрепление иммунитета, обеспечение стойкости культур к болезням;
                                        </span>
                                    </li>
                                    <li><span className="detail-item">
                                         Способствование формированию крепкой и сильной корневой системы;
                                        </span>
                                    </li>
                                    <li><span className="detail-item">  
                                         Качественное улучшение урожая;
                                        </span>
                                    </li>
                                    <li><span className="detail-item">
                                         Повышение объема получаемого урожая до 35% (в том числе и на почвах низкой       плодородности);
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="details_title">
                                    Основные химические параметры удобрения:
                            </div>
                            <div className="block_details">
                                <ul className="ul">
                                    <li><span className="detail-item1">
                                        Гуминовые кислоты 84 г / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                    Фульвовые кислоты 42,4 г / л,
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Азот 10 г / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Фосфор 8 г / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Калий 24,1г / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Кремний 40 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Сэра 14 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Магний 0,9 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Марганец 19,6 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Цинк 10 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Никелю 1,14 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Медь 18,6 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Кобальт 4,53 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        Молибден 0,4 мг / л;
                                        </span>
                                    </li>
                                    <li><span className="detail-item1">
                                        PH – 9,5.
                                        </span>
                                    </li>
                                </ul>
                            </div>  
                            <div className="details_title">Расчет нормы гумата калия</div>
                            <div className="detail-item" >
                            Для грамотного расчета нормы гумата калия вносимого удобрения, необходимо учесть общую долю азотных удобрений, которые используются на 1 га земли. С учетом этого показателя, на 1 га понадобится 0,4-1л гумата калия (доля гуминовых кислот должна составлять 84 г/л).
                            </div>
                     
                        </div>
                        ):null}
                         <br></br><br></br>
                        {/*<div className="image_product">
                            <img src={require("../../image/product.jpg")}></img>
                        </div>*/}

                </div>
                <br></br>
                    </div>
        );
    }
}