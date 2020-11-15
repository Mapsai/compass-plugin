import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Gmt from 'components/GMT';
import store from 'stores';

class Plugin extends Component {
  static displayName = 'GmtPlugin';

  /**
   * Connect the Plugin to the store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <Provider store={store}>
        <Gmt />
      </Provider>
    );
  }
}

export default Plugin;
