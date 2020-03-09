'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifsReducer = exports.sendNotification = exports.Notifs = undefined;

var _reducer = require('./reducer');

var _actions = require('./actions');

var _Notifs = require('./components/Notifs');

exports.Notifs = _Notifs.NotifsController;
exports.sendNotification = _actions.sendNotification;
exports.notifsReducer = _reducer.notifsReducer;