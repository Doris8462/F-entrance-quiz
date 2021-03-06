import React, { Component } from 'react';
import { Tooltip } from 'antd';
import { Link, Route} from "react-router-dom";
import AddTrainer from '../AddTrainer/AddTrainer';
import 'antd/dist/antd.css';
import '../TraineeList/TraineeList.scss';

export default class TrainerList extends Component {
  constructor() {
    super();
    this.state = { trainers: [] };
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainers?grouped=false')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          trainers: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>讲师列表</h2>
        <div className="trainee-list">
          {/*TODO feedback: 这里没有使用到ES6的解构赋值*/}
          {Object.keys(this.state.trainers).map((key) => (
              // TODO feedback: 列表元素没有使用ul li
            <Tooltip key={this.state.trainers[key].id}
              title={`${this.state.trainers[key].id} ${this.state.trainers[key].name}`}
            >
              <div className="name-item" key={this.state.trainers[key].id}>
                {`${this.state.trainers[key].id}. ${this.state.trainers[key].name}`}
              </div>
            </Tooltip>
          ))}
          <Link to="/addTrainer" className="name-item add-trainee">+添加讲师</Link>
        </div>
      </div>
    );
  }
}
