import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { withRouter } from 'react-router-dom'

import { changeHeader, addTopic } from "./../../../../actions";

import './CreateNewItem.scss';

function mapDispatchToProps(dispatch) {
  return {
    changeHeader: obj => dispatch(changeHeader(obj)),
    addTopic: text => dispatch(addTopic(text)),
  };
}

class CreateNewItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: '',
      defaultHeader: {
        back: true,
        title: '',
        subtitle: 'Create new item',
        page: true,
      }
    };
  }

  static propTypes={
    changeHeader: PropTypes.func.isRequired,
    addTopic: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  changeHead = () => {
    this.props.changeHeader(this.state.defaultHeader)
  }

  handleSubmit = (event) => {
    const { addTopic, history } = this.props;
    const { text } = this.state;

    event.preventDefault();

    addTopic(text);

    history.push('/test-app/')

    this.setState({
      'text': ''
    })
  }

  handleChange = (event) => {
    this.setState({
      'text' : event.target.value
    });
  }

  componentDidMount() {
    this.changeHead();
  }

  render() {
    return (
      <form
        className={classNames('new-item-form')}
        onSubmit={(e) => this.handleSubmit(e)}
      >
        <input
          className={classNames('new-item-input')}
          type="text"
          id="title"
          placeholder="Type new item name"
          onChange={(e) => this.handleChange(e)}
          required
        />
        <button className={classNames('new-item-button')}></button>
      </form>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CreateNewItem));