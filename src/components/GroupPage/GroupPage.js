import React, { Component } from 'react'
import GroupList from '../GroupList/GroupList';
import TrainerList from '../TrainerList/TrainerList';
import TraineeList from '../TraineeList/TraineeList';

export default class GroupPage extends Component {
    render() {
        return (
            <div>
                <TrainerList> </TrainerList>
                <TraineeList> </TraineeList>
            </div>
        )
    }
}
