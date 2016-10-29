import React, {Component} from 'react';
import Task from './Task.js';

class TaskList extends Component {
    render() {
        var tasks = [
            {
                'time': '12',
                'period': 'AM',
                'activity_title': 'Finish Tutorial Series',
                'activity_description': '#ReactForNewbies'
            }, {
                'time': '9',
                'period': 'AM',
                'activity_title': 'Meeting with Team Leads',
                'activity_description': 'New Project Kickoff'
            }, {
                'time': '11',
                'period': 'AM',
                'activity_title': 'Call Mom',
                'activity_description': 'Return her call before she kills me'
            }, {
                'time': '3',
                'period': 'PM',
                'activity_title': 'Fix Wifey\'s website',
                'activity_description': 'FB Ads Integration not working'
            }, {
                'time': '6',
                'period': 'PM',
                'activity_title': 'Do DB Backups',
                'activity_description': 'Related to upcoming server migration'
            }
        ];

        return (
            <div>
                {tasks.map(function(task, index) {
                    return <Task
                                key={task.activity_title}
                                time={task.time}
                                period={task.period}
                                activity_title={task.activity_title}
                                activity_description={task.activity_description}/>
                })}
            </div>
        );
    }
}

export default TaskList;
