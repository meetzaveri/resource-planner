import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import {routes} from './routes/routes';
import Loadable from 'react-loadable';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import Rootreducer from './store/store';
import mySaga from './sagas/sagas'
import './App.css';
import 'antd/dist/antd.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Rootreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

const Loading = () => (
  <div>
    Loading ...
  </div>
);

const HomePageLoader = Loadable({
  loader: () => import ('./containers/HomeContainer'),
  loading: Loading
});

const MobileScreenLoader = Loadable({
  loader: () => import ('./containers/MobileScreenContainer'),
  loading: Loading
});

const EmployeeLoader = Loadable({
  loader: () => import ('./containers/EmployeeContainer'),
  loading: Loading
});

const ProjectPanelLoader = Loadable({
  loader: () => import ('./containers/ProjectsContainer'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.index} component={HomePageLoader}/>
            <Route exact path={routes.resources.mobile} component={MobileScreenLoader}/>
            <Route exact path={routes.employees} component={EmployeeLoader}/>
            <Route exact path={routes.projects} component={ProjectPanelLoader}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
