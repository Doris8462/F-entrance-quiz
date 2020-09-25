/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import GroupItem from '../GroupItem/GroupItem';
import './GroupList.scss';

export default class GroupList extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
    };
  }

  getGroups = () => {
    fetch('http://localhost:8080/groups', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((groups) => {
        this.setState({
          groups,
        });
      });
  };

  render() {
    return (
        //  TODO feedback: 没有使用section标签
      <div className="group-list">
        <h2>分组列表</h2>
        <button className="group-btn" onClick={this.getGroups}>
          分组学员
        </button>
        {Object.keys(this.state.groups).map((key) => {
          return <GroupItem index={key} group={this.state.groups[key]} />;
        })}
      </div>
    );
  }
}
