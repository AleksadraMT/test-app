import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TopicItem from './TopicItem/TopicItem';
import { changeHeader } from "./../../../actions";

import './TopicsList.scss';

const mapStateToProps = state => {
  return {
    list: state.sayer
  };
};

function mapDispatchToProps (dispatch) {
  return {
    changeHeader: obj => dispatch(changeHeader(obj)),
  };
}

class TopicsList extends Component {
  static propTypes={
    list: PropTypes.array.isRequired,
    history: PropTypes.object
  }

  componentDidMount() {
    this.props.changeHeader({
      back: false,
      title: 'Sayer',
      subtitle: 'World’s most used time waster',
      page: false,
    });
  }

  render() {
    const {list, history} = this.props;

    return (
      <div>
        <div className={classNames('topics-container')}>
          { list !== null && list.length ? (
            <ul className={classNames('topics')}>
              {list.map((el, index) => (
                <TopicItem
                  key={index}
                  el={el}
                />
              ))}
            </ul>
            ) : <div className={classNames('empty-block')}>No items</div>
          }
        </div>
        <div className={classNames('create-item')}>
          <button
            className={classNames('create-item-button')}
            onClick={() => history.push('/test-app/create')}
          >
            <span className={classNames('create-item-text')}>+</span>
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicsList));