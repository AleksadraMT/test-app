import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { changeHeader, addComment } from "./../../../../actions";

import CommentItem from './CommentItem';
import NewCommentForm from './NewCommentForm';

import './TopicDetails.scss';

function mapDispatchToProps(dispatch) {
  return {
    changeHeader: obj => dispatch(changeHeader(obj)),
    addComment: (id, text) => dispatch(addComment(id, text)),
  };
}

const mapStateToProps = state => {
  return { 
    list: state.sayer 
  };
};

class TopicDetails extends Component {
  constructor(props) {
    super(props);

    const { list, match, history, } = this.props;
    const commentsBlock = list.filter(item => (
      Number(match.params.id) === Number(item.id))
    );

    this.state = {
      comments: commentsBlock[0].comments,
      title: history.location.state.title,
      newCommentText: '',
      id: match.params.id,
      defaultHeader: {
        back: true,
        title: '',
        subtitle: 'New Topic',
        page: true,
      }
    };

    //init ref element
    this.container = React.createRef();
  }

  static propTypes={
    list: PropTypes.array,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    changeHeader: PropTypes.func.isRequired
  }

  changeHead = (subtitle) => {
    const { changeHeader, } = this.props;
    const { defaultHeader, } = this.state;

    changeHeader(
      {
        ...defaultHeader,
        ...{ subtitle, }
      }
    )
  }

  componentDidMount() {
    const { title, comments, } = this.state;

    this.changeHead(title);

    if (comments.length) {
      this.scrollTopBottom();
    }
  }

  scrollTopBottom = () => {
    this.container.current.scrollTop = this.container.current.scrollHeight;
  }

  handleChange = (event) => {
    this.setState({ 
      'newCommentText' : event.target.value 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { newCommentText, id, comments, } = this.state;

    this.props.addComment(id, newCommentText);

    this.setState(() => ({
      'comments': [...comments, {
        'id': comments.reduce((maxId, topic) => Math.max(topic.id, maxId), -1) + 1,
        'avatarClass': comments.length % 2 === 1 ? 'male' : 'female',
        'text': newCommentText,
      }],
      'newCommentText': '',
    }))

    setTimeout(() => {this.scrollTopBottom()});
  }

  render() {
    const { comments, newCommentText, } = this.state;
    const isEmpty = !!comments.length;

    return (
      <div className={classNames('comments-container')}>
        { isEmpty ?
          <div 
            className={classNames('comments-scroll')} 
            ref={this.container}
          >
            <ul className={classNames('comments')}>
              { comments.map((el, index) => (
                  <CommentItem
                    el={el}
                    index={el.id}
                    key={index}
                  />
                ))
              }
            </ul>
          </div>
          : <div className={classNames('empty-block')}>No comments</div> 
        }
        <NewCommentForm 
          newCommentText={newCommentText}
          onSubmit={(e) => this.handleSubmit(e)}
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopicDetails));