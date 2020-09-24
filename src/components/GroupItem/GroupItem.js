import React, { Component } from 'react';
import './GroupItem.scss';

export default class GroupItem extends Component {
  render() {
    return (
      <div className="group-item">
        <div className="group-item"> Team {this.props.index}</div>
        <ul className="name">
          <li> </li>
        </ul>
      </div>
    );
  }
}
