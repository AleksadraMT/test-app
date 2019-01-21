import React, { Component } from 'react';

import './Sayer.scss';

// components

import Header from '../components/Header/Header';
import Content from '../components/Content/Content';

export default class Sayer extends Component {
  render() {
    return (
      <div className="sayer">
        <Header />
        <Content />
      </div>
    );
  }
}
