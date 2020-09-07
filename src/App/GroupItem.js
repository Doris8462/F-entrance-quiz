import React, { Component } from 'react';
import './GroupItem.scss';

export default class GroupItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="groupItem">
        <div className="groupName"> Team {this.props.index}</div>
        <ul className="name">
          {this.props.team.map((item) => {
            return (
              <li>
                {item.id}.{item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
