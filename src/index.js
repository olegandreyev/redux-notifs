import { notifsReducer } from './reducer';
import { sendNotification } from './actions';
import { NotifsController as Notifs } from './components/Notifs';

export {
  Notifs,
  sendNotification,
  notifsReducer,
};
