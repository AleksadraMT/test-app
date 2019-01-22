import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import classNames from 'classnames/bind';

import TopicsList from './TopicsList/TopicsList';
import CreateNewItem from './TopicsList/CreateNewItem/CreateNewItem';
import TopicDetails from './TopicsList/TopicDetails/TopicDetails';

export default class Content extends Component {
  routes = [
    {
      path: '/test-app/',
      content: () => <TopicsList />,
      exact: true,
    },
    {
      path: '/test-app/create',
      content: () => <CreateNewItem />,
    },
    {
      path: '/test-app/topic-:id',
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

withRouter(connect(null, null)(Content));