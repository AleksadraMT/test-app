import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Link, withRouter } from 'react-router-dom';

import { removeTopic } from "./../../../../actions";

import './TopicItem.scss';

function mapDispatchToProps(dispatch) {
  return {
    removeTopic: id => dispatch(removeTopic(id))
  };
}

class TopicsItem extends Component {
  constructor () {
    super();

    this.removePost = this.removePost.bind(this);
  }

  static propTypes={
    removeTopic: PropTypes.func.isRequired,
    index: PropTypes.number,
    el: PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired
    })
  }

  removePost(id) {
    const {removeTopic, } = this.props;
    const isDelete = window.confirm('Do you want to DELETE this topic?');

    if (isDelete) {
      removeTopic(id);
    }
  }

  render() {
    const {index, el, } = this.props;
    const {id, text, comments, } = el;
    
    return (
      <li 
        key={index} 
        className={classNames('topics-item')}
      >
        <Link to={{
          pathname: `/topic-${id}`,
          state: {
            title: text,
            },
          }}
        >
          <span className={classNames('topics-title')}>{text}</span>
        </Link>
        <span className={classNames('topics-counter')}>{comments.length}</span>
        <span 
          className={classNames('topics-remove')}
          onClick={() => this.removePost(id)}
        >
          Delete
        </span>
      </li>
    )
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TopicsItem));