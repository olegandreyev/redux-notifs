import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import {
  createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import {
  notifsReducer,
  sendNotification,
  Notifs,
// eslint-disable-next-line import/no-unresolved
} from 'redux-notifs';
import '../src/styles.css';

// React component
class Demo extends Component {
  state = {
    msg: 'hello!',
    kind: 'info',
    dismissAfter: 2000,
  };

  onKindChange = (ev) => {
    this.setState({ kind: ev.target.value });
  };

  handleChange = (ev) => {
    this.setState({ msg: ev.target.value });
  };

  handleDismissAfter = (ev) => {
    this.setState({ dismissAfter: ev.target.value });
  };

  send = () => {
    const id = (this.state.id === '') ? null : this.state.id;
    this.props.sendNotification({
      id,
      message: this.state.msg,
      kind: this.state.kind,
      dismissAfter: this.state.dismissAfter,
    });
  };

  render() {
    const {
      msg,
      kind,
      dismissAfter,
    } = this.state;
    const kinds = ['info', 'success', 'warning', 'danger'];

    return (
      <div className="content">
        <Notifs />
        <div className="row">
          <div className="col col-md-3">
            <form className="form-group">
              <fieldset>
                <legend>redux-notifs Demo</legend>
                <div className="form-group">
                  <label>Message</label>
                  <input
                    className="form-control"
                    id="message"
                    type="text"
                    value={msg}
                    onChange={this.handleChange}
                  />
                </div>
                {kinds.map((k, index) =>
                  <div className="radio" key={index}>
                    <label>
                      <input
                        className=""
                        type="radio"
                        name={k}
                        value={k}
                        checked={kind === k}
                        onChange={this.onKindChange}
                      />
                      {k}
                    </label>
                  </div>
                )}
                <div className="form-group">
                  <label>Dismiss After (ms)</label>
                  <input
                    className="form-control"
                    type="text" value={dismissAfter}
                    onChange={this.handleDismissAfter}
                  />
                </div>
              </fieldset>
            </form>
            <button className="btn btn-primary" onClick={this.send}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}
Demo.propTypes = {
  sendNotification: PropTypes.func,
};

// Store:
const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

const store = createStoreWithMiddleware(combineReducers({ notifs: notifsReducer }), {});

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count,
  };
}

// Connected Component:
const App = connect(
  mapStateToProps,
  { sendNotification }
)(Demo);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
