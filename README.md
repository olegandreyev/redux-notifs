# `redux-notifs`

[React](https://github.com/facebook/react) & [Redux](https://github.com/rackt/redux) based notifications center.

Thanks to Redux, the notification objects are maintained within Redux Store's State and are fired by Actions.

## Implementation

##### 1. Installation

`npm install --save redux-notifs`
or
`yarn add redux-notifs`

##### 2. The next thing you need to do is to add the `redux-notifs` `reducer` to Redux.
```js
import { combineReducers } from 'redux'
import { reducer as notifsReducer } from 'redux-notifs';

combineReducers({
  notifs: notifsReducer,
  // ... more reducers here ...
})
```

##### 3. Add the `Notifs` component at the root of your app
```js
import { Provider }  from 'react-redux'
import { Notifs } from 'redux-notifs';

<Provider store={store}>
  <React.Fragment>
    // ... other things like router ...
    <Notifs />
  </React.Fragment>
</Provider>
```

##### 4. Optionally import default CSS
`redux-notifs` uses [react-css-transition-group](https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup) with the following classes:
- .notif-transition-enter
- .notif-transition-enter-active
- .notif-transition-leave
- .notif-transition-leave-active

To import the default stylesheet:
```js
import 'redux-notifs/lib/styles.css';
```

## Sending notifications

Thanks to Redux, sending notification is simply done by firing an `Action`:

``` javascript
import { connect } from 'redux-connect';
import { sendNotification } from 'redux-notifications';

class Demo extends React.Component {
  sendNotification = () => {
    this.props.dispatch(sendNotification({
      message: 'hello world',
      kind: 'info',
      dismissAfter: 2000
    }));
  };

  render() {
    <button onClick={this.sendNotification}>Send Notification</button>
  }
}

const DemoController = connect(null, { sendNotification })(Demo);

```

## Actions

#### `actions.sendNotification({config})`

##### `config.message : node` [required]
> The notification message, can be one of: `string`, `integer`, `element` or `array` containing these types.

##### `config.kind : string` [optional] [default:'info']
> The notification kind, can be one of: `info`, `success`, `warning`, `danger`.

##### `config.id : string` [optional] [default:Date.now()]
> Set an ID for the notification. If not set, defaults to Date.now().

##### `config.dismissAfter : integer` [optional] [default:null]
> Auto dismiss the notification after the given number of milliseconds.

---

## Notifs Component

##### `className : string` [optional] [default:null]
> Pass a custom classname to the <Notifs /> component.

##### `componentClassName : string` [optional] [default:'notif']
> The base className for each Notif component. Can be used to override CSS styles.

##### `transitionEnterTimeout : integer` [optional] [default:600]
> Define the react-transition-group enter timeout is milliseconds.

##### `transitionLeaveTimeout : integer` [optional] [default:600]
> Define the react-transition-group leave timeout is milliseconds.

##### `actionLabel : string`
> Label for action click

##### `onActionClick : func`
> Function when action is clicked. Requires `actionLabel` prop

## Development

```
git clone https://github.com/zero-t4/redux-notifs.git
cd redux-notifs
yarn
yarn start
```
Listening on localhost:9000
