import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import classNames from 'classnames/bind';

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import TopicsList from './TopicsList/TopicsList';
import CreateNewItem from './TopicsList/CreateNewItem/CreateNewItem';
import TopicDetails from './TopicsList/TopicDetails/TopicDetails';

export default class Content extends Component {
  routes = [
    {
      path: '/',
      content: () => <TopicsList />,
      exact: true,
    },
    {
      path: '/create',
      content: () => <CreateNewItem />,
    },
    {
      path: '/topic-:id',
      content: () => <TopicDetails />,
    }
  ]

  render() {
    return (
      <Router>
        <div className={classNames('container')}>
            {this.routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.content}
              />
            ))}
          </div>
      </Router>
    )
  }
}

withRouter(connect(null,null)(Content));
