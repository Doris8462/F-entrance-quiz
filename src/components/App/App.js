import React, { Component } from 'react';
import './App.scss';
import GroupList from '../GroupList/GroupList';
import TrainerList from '../TrainerList/TrainerList';
import TraineeList from '../TraineeList/TraineeList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TraineeList> </TraineeList>
      </div>
    );
  }
}

export default App;
