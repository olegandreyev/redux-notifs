'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNotification = sendNotification;
var objectAssign = require('object-assign');

var NOTIF_SEND = exports.NOTIF_SEND = 'NOTIF_SEND';
var NOTIF_DISMISS = exports.NOTIF_DISMISS = 'NOTIF_DISMISS';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */
function sendNotification(notif) {
  var payload = objectAssign({}, notif);
  if (!payload.id) {
    payload.id = new Date().getTime();
  }
  return function (dispatch) {
    dispatch({ type: NOTIF_SEND, payload: payload });

    if (payload.dismissAfter) {
      setTimeout(function () {
        dispatch({
          type: NOTIF_DISMISS,
          payload: payload.id
        });
      }, payload.dismissAfter);
    }
  };
}