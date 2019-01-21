import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './CommentItem.scss';

export default class CommentItem extends Component {

  static propTypes={
    el: PropTypes.shape({
      avatarClass: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  render() {
    const { el } = this.props;

    return (
      <li
        className={classNames('comments-item')}
      >
        <div className={classNames('comments-avatar', el.avatarClass)}></div>
        <div className={classNames('comments-text')}>{ el.text }</div>
      </li>
    )
  }
}
