import { NOTIF_SEND, NOTIF_DISMISS } from './actions';

export function notifsReducer(domain = [], action) {
  if (!action || !action.type) return domain;

  switch (action.type) {
    case NOTIF_SEND:
      return [action.payload, ...domain.filter(({ id }) => id !== action.payload.id)];
    case NOTIF_DISMISS:
      return domain.filter(notif =>
          notif.id !== action.payload
      );
    default:
      return domain;
  }
}
