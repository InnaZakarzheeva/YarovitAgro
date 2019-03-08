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
                    {this.props.item.title} 
                </h2>
            </ScrollableAnchor>
                <div className="block_product">     
                    <div className="photo">
                        <Carousel>
                            {this.props.item.photo.map(photo => <img src={photo}/>)}
                        </Carousel>
                    </div>
                    <div className="order_description">
                        <div className="aboutProduct">
                           {this.props.item.aboutProduct}
                            </div>
                        <div className="price">    
                            <div className="priceText">
                                Стоимость:
                            </div>
                            <div className="priceNumber">
                                {this.props.item.price}
                            </div>
                         </div>
                        <button onClick={this.onOpenModal} className="buy" type="submit">Купить</button>
                            <Modal open={open} onClose={this.onCloseModal} center>
                                <div className="yourOrder">Ваш заказ: </div>
                                <div className="modalWindow">{this.props.item.title}</div>
                                <div className="modalWindow">Стоимость: {this.props.item.price}  </div>
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
                                    {this.props.item.detail_item.map(detail_item => <li><span className="detail-item"> {detail_item}</span></li>)}                    
                                </ul>
                            </div>
                            <div className="details_title">
                                Основные химические параметры удобрения:
                            </div>
                            <div className="block_details">
                                <ul className="ul">  
                                    {this.props.item.detail_item1.map(detail_item1 => <li><span className="detail-item1"> {detail_item1}</span></li>)}
                                </ul>
                            </div>  
                            <div className="details_title_item">{this.props.item.details_title_item}</div>
                            <div className="detail-item" >
                           {this.props.item.norma}
                            </div>
                     
                        </div>
                        ):null}
                         <br></br><br></br>
                            <img className="image_product" src={this.props.item.image} />
                        <br></br>

                </div>
                <br></br>
                    </div>
        );
    }
}