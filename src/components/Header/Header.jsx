/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { connect } from 'react-redux';

import './Header.scss';

const mapStateToProps = state => {
  return { 
    header: state.header 
  };
};

class Header extends Component {
  static propTypes = {
    header: PropTypes.shape({
      back: PropTypes.bool.isRequired,
      title: PropTypes.string,
      page: PropTypes.bool.isRequired,
      subtitle: PropTypes.string
    })
  }

  render() {
    const { header } = this.props;

    return (
      <div className={ classNames('sayer-header') }>
        { header.back ? (
          <div>
            <a 
              className={ classNames('header-back') } 
              href="/"
            ></a>
          </div>
          ) : null }
        { header.title ? (
          <h1>
            { header.title }
          </h1> 
          ) : '' }
        <h4 className={ classNames({'title-page': header.page}) }>
          { header.subtitle }
        </h4> 
      </div>
    )
  }
}

export default connect(mapStateToProps)(Header);