/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import GroupItem from '../GroupItem/GroupItem';
import './GroupList.scss';

export default class GroupList extends Component {
  render() {
    return (
      <div className="group-list">
          <h2>分组列表</h2>
          <button className="group-btn" onClick={this.getGroup}>
            分组学员
          </button>
        <GroupItem> </GroupItem>
      </div>
    );
  }
}
