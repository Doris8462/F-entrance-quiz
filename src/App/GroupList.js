/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import GroupItem from './GroupItem';
import './GroupList.scss';

export default class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classMate: [],
      teams: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/classMate/list')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          classMate: data,
        });
        // console.log(this.state.classMate);
      });
  }

  getGroup = () => {
    fetch('http://localhost:8080/classMate/group')
      .then((response) => {
        return response.json();
      })
      .then((teams) => {
        this.setState({
          teams,
        });
      });
  };

  addClassMate = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '' }),
    };
    fetch('http://localhost:8080/classMate/add', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((teams) => {
        this.setState({
          teams,
        });
      });
  };

  render() {
    return (
      <div className="groupList">
        <header>
          <h2>分组列表</h2>
          <button className="btn" onClick={this.getGroup}>
            分组学员
          </button>
        </header>
        {Object.keys(this.state.teams).map((key) => {
          return <GroupItem index={key} team={this.state.teams[key]} />;
        })}
        <div className="classMateList">
          <h2>学员列表</h2>
          <div className="list">
            {this.state.classMate.map((item) => {
              return (
                <div className="nameItem">
                  {item.id}.{item.name}
                </div>
              );
            })}
            <div className="nameItem">+添加学员</div>
          </div>
        </div>
      </div>
    );
  }
}
