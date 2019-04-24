import React from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Notif from './Notif';

// This checks to see if object is immutable and properly access it
const getter = (obj, propName) => (obj.get ? obj.get(propName) : obj[propName]);

const Notifs = (props) => {
  const {
    notifications,
    className,
    componentClassName,
    transitionEnterTimeout,
    transitionLeaveTimeout,
  } = props;

  const renderedNotifications = notifications.map((notification) => (
    <Notif
      {...props}
      componentClassName={componentClassName}
      key={getter(notification, 'id')}
      id={getter(notification, 'id')}
      message={getter(notification, 'message')}
      kind={getter(notification, 'kind')}
    />
  ));

  const classes = [
    `${componentClassName}__container`,
    className,
  ].join(' ').split();

  return (
    <div className={classes} >
      <CSSTransitionGroup
        transitionName={`${componentClassName}-transition`}
        transitionEnterTimeout={transitionEnterTimeout}
        transitionLeaveTimeout={transitionLeaveTimeout}
      >
        {renderedNotifications}
      </CSSTransitionGroup>
    </div>
  );
};

Notifs.defaultProps = {
  className: null,
  componentClassName: 'notif',
  transitionEnterTimeout: 600,
  transitionLeaveTimeout: 600,
};

const mapStateToProps = (state) => {
  const { notifs = [] } = state;

  return { notifications: notifs };
};

export const NotifsController = connect(mapStateToProps)(Notifs);
