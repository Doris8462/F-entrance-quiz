import React, { Component } from 'react';
import './GroupItem.scss';

export default class GroupItem extends Component {
  render() {
    return (
      <div className="groupItem">
        <div className="groupName"> Team 1</div>
        <ul className="name">
          <li>1.沈乐棋</li>
          <li>1.沈乐棋</li>
          <li>1.沈乐棋</li>
          <li>1.沈乐棋</li>
          <li>1.沈乐棋</li>
          <li>1.沈乐棋</li>
        </ul>
      </div>
    );
  }
}
