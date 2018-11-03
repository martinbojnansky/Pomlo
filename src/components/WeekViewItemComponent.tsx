import * as React from 'react';
import { StoreState } from 'states/storeState';
// import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { TaskCardComponent } from 'components/TaskCardComponent';
import TaskModalContainer from 'containers/TaskModalContainer';
import { Action } from 'actions/actions';

export interface WeekViewItemComponentProps {
    name: string;
    tasks: Task[];
    date?: Date;
}

export interface WeekViewItemComponentDispatch {
    onOpenTask: (id: string) => void;
    onCreateTask: (date?: Date) => Promise<Action>;
}

export class WeekViewItemComponent extends React.Component<WeekViewItemComponentProps & WeekViewItemComponentDispatch, StoreState> {
    constructor(props: WeekViewItemComponentProps & WeekViewItemComponentDispatch) {
        super(props);

        this.handleCreateTask = this.handleCreateTask.bind(this);
    }

    handleCreateTask() {
        this.props.onCreateTask(this.props.date);
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="weekview-item">
                    <div className="weekview-item-header">
                        <p>{this.props.name}</p>
                        <button 
                            title="Add Task"
                            onClick={this.handleCreateTask}>
                            +
                        </button>
                    </div>
                    <div className="weekview-item-list">
                        {this.props.tasks.map((task) => {
                            return (
                                <TaskCardComponent 
                                    key={task.id} 
                                    task={task} 
                                    onClick={this.props.onOpenTask} 
                                />
                            );
                        })}
                    </div>
                </div>
                <TaskModalContainer />
            </React.Fragment>
        );
    }
}