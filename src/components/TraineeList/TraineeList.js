import React, { Component } from 'react';

export default class TraineeList extends Component {
  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div className="trainee-list">
          <div className="name-item"> </div>
          <input className="name-item" value="+" />
        </div>
      </div>
    );
  }
}
