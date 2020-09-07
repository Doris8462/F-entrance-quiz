/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import GroupItem from './GroupItem';
import './GroupList.scss';

export default class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classMate: [],
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

  render() {
    return (
      <div className="groupList">
        <header>
          <h2>分组列表</h2>
          <button className="btn">分组学员</button>
        </header>
        <GroupItem>GroupItem</GroupItem>
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
          </div>
        </div>
      </div>
    );
  }
}
