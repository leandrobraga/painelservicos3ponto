import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../common/templates/Header';
import MenuTop from '../common/templates/MenuTop';
import Dashboard from '../components/DashBoard';

function App() {
  return (
    <div>
      <MenuTop />
      <Header />
      <div style={{ paddingTop: '1%' }} className="container">
        <div className="columns is-mobile">
          <div className="column is-12">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              {/* <Route exact path="/celery" component={} />
              <Route exact path="/postgresql" component={} />
              <Route exact path="/gunicorn" component={} />
              <Route exact path="/nginx" component={} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
