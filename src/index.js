import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import firebase from './firebase';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
} 

const RootWithAuth = withRouter(Root);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RootWithAuth />
      </Router>,
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);