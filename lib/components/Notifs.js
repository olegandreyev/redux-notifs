'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifsController = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _Notif = require('./Notif');

var _Notif2 = _interopRequireDefault(_Notif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This checks to see if object is immutable and properly access it
var getter = function getter(obj, propName) {
  return obj.get ? obj.get(propName) : obj[propName];
};

var Notifs = function Notifs(props) {
  var notifications = props.notifications,
      className = props.className,
      componentClassName = props.componentClassName,
      transitionEnterTimeout = props.transitionEnterTimeout,
      transitionLeaveTimeout = props.transitionLeaveTimeout;


  var renderedNotifications = notifications.map(function (notification) {
    return _react2.default.createElement(_Notif2.default, _extends({}, props, {
      componentClassName: componentClassName,
      key: getter(notification, 'id'),
      id: getter(notification, 'id'),
      message: getter(notification, 'message'),
      kind: getter(notification, 'kind')
    }));
  });

  var classes = [componentClassName + '__container', className].join(' ').split();

  return _react2.default.createElement(
    'div',
    { className: classes },
    _react2.default.createElement(
      _CSSTransitionGroup2.default,
      {
        transitionName: componentClassName + '-transition',
        transitionEnterTimeout: transitionEnterTimeout,
        transitionLeaveTimeout: transitionLeaveTimeout
      },
      renderedNotifications
    )
  );
};

Notifs.defaultProps = {
  className: null,
  componentClassName: 'notif',
  transitionEnterTimeout: 600,
  transitionLeaveTimeout: 600
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$notifs = state.notifs,
      notifs = _state$notifs === undefined ? [] : _state$notifs;


  return { notifications: notifs };
};

var NotifsController = exports.NotifsController = (0, _reactRedux.connect)(mapStateToProps)(Notifs);