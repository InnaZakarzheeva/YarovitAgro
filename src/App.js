import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Product from './components/Products/product';
import Company from './components/Company/company';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <ScrollUpButton style={{background: "transparent"}}/>
      <Menu/>
        <div className="body">
          <div className="products">
            <Header/>
            <ScrollableAnchor id={'company'}><Company/></ScrollableAnchor>
            <ScrollableAnchor id={'products'}><Product/></ScrollableAnchor>
            <br></br>
            <br></br>
          </div>
        </div>
        <ScrollableAnchor id={'contacts'}><Footer/></ScrollableAnchor>
      </div>
    );
  }
}

