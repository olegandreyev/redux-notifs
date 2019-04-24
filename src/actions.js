const objectAssign = require('object-assign');

export const NOTIF_SEND = 'NOTIF_SEND';
export const NOTIF_DISMISS = 'NOTIF_DISMISS';

/**
 * Publish a notification,
 * - if `dismissAfter` was set, the notification will be auto dismissed after the given period.
 * - if id wasn't specified, a time based id will be generated.``
 */
export function sendNotification(notif) {
  const payload = objectAssign({}, notif);
  if (!payload.id) {
    payload.id = new Date().getTime();
  }
  return dispatch => {
    dispatch({ type: NOTIF_SEND, payload });

    if (payload.dismissAfter) {
      setTimeout(() => {
        dispatch({
          type: NOTIF_DISMISS,
          payload: payload.id,
        });
      }, payload.dismissAfter);
    }
  };
}
