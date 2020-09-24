import React, { Component } from 'react';
import GroupList from '../GroupList/GroupList';
import TrainerList from '../TrainerList/TrainerList';
import TraineeList from '../TraineeList/TraineeList';

export default class GroupPage extends Component {
  deleteUser = (url) => {
    fetch(url, {
      method: 'DELETE',
    }).then((res) => {
      if (res.status === 204) {
        alert('删除成功');
      } else alert('删除失败');
    });
  };

  render() {
    return (
      <div>
        <GroupList> </GroupList>
        <TrainerList deleteUser={this.deleteUser}> </TrainerList>
        <TraineeList deleteUser={this.deleteUser}> </TraineeList>
      </div>
    );
  }
}
