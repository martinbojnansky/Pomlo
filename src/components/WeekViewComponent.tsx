import * as React from 'react';
import { StoreState } from 'states/StoreState';
import { Action } from 'actions/Actions';
import { Task } from 'models/Task';

export interface WeekViewComponentProps {
    tasks: Task[];
}

export interface WeekViewComponentDispatch {
    loadTasks: () => Promise<Action>
}

export class WeekViewComponent extends React.Component<WeekViewComponentProps & WeekViewComponentDispatch, StoreState> {
    componentWillMount() {
        this.props.loadTasks();
    }

    render() {
        return (
            <div className="weekview">
                {this.props.tasks.map((task) => {
                    return (
                        <div key={task.id}>
                            <label>
                                <input type="checkbox" readOnly={true} checked={task.completed}/>
                                <b>{task.name}</b>
                            </label>
                            <br/>
                            {/* <span>{task.date}</span> */}
                            <span>{task.description}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}