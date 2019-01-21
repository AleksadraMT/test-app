import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

export default class NewCommentForm extends Component {
  static propTypes={
    newCommentText: PropTypes.string.isRequired,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
  }

  render () {
    const {newCommentText, onSubmit, onChange, } = this.props;
    return (
      <form 
        className={classNames('new-comment-form')}
        onSubmit={onSubmit}
      >
        <input 
          className={classNames('new-comment-input')} 
          type="text" 
          id="title" 
          placeholder="Type new comment" 
          onChange={onChange}
          value={newCommentText}
          required 
        />
        <button className={classNames('new-comment-button')}></button>
      </form>
    )
  }
}
