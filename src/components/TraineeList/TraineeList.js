import React, { Component } from 'react';
import './TraineeList.scss'

export default class TraineeList extends Component {
  constructor() {
    super();
    this.state = { trainees: [] };
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainees?grouped=false')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          trainees: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div className="trainee-list">
          {Object.keys(this.state.trainees).map((key) => (
            <div className="name-item" key={this.state.trainees[key].id}>
              {`${this.state.trainees[key].id}. ${this.state.trainees[key].name}`}
            </div>
          ))}
          <button className="name-item add-trainee">+添加学员</button>
        </div>
      </div>
    );
  }
}
