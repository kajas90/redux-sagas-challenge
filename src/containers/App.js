import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import Header from 'components/Header'
import AppTitle from 'components/AppTitle'
import Menu from 'components/Menu'

// import components from react-router-dom if needed
import AddNote from './AddNote'
import Notes from './Notes'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <AppTitle>
            Our little app
          </AppTitle>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/add">Add Note</Link>
          </Menu>
        </Header>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/add" component={AddNote} />
        </Switch>
      </div>
    );
  }
}

export default App;
