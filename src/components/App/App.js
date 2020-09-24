import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GroupPage from '../GroupPage/GroupPage';
import AddTrainer from '../AddTrainer/AddTrainer';
import AddTrainee from '../AddTrainee/AddTrainee';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/addTrainer" component={AddTrainer} />
            <Route path="/addTrainee" component={AddTrainee} />
            <Route path="*" component={GroupPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
