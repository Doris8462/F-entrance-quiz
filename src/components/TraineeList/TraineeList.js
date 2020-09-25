import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';
import './TraineeList.scss';

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
          {/*TODO feedback: 这里没有使用到ES6的解构赋值*/}
          {Object.keys(this.state.trainees).map((key) => (
              // TODO feedback: 列表元素没有使用ul li
            <Tooltip key={this.state.trainees[key].id}
              title={`${this.state.trainees[key].id} ${this.state.trainees[key].name} ${this.state.trainees[key].office} ${this.state.trainees[key].email} ${this.state.trainees[key].github}`}
            >
              <div className="name-item" key={this.state.trainees[key].id}>
                {`${this.state.trainees[key].id}. ${this.state.trainees[key].name}`}
              </div>
            </Tooltip>
          ))}
          <Link to="/addTrainee" className="name-item add-trainee">
            +添加学员
          </Link>
        </div>
      </div>
    );
  }
}
