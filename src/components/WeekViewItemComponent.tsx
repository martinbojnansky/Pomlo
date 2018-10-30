import * as React from 'react';
import { StoreState } from 'states/storeState';
// import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { TaskCardComponent } from 'components/TaskCardComponent';
import { ModalComponent } from './ModalComponent';

export interface WeekViewItemComponentProps {
    name: string;
    tasks: Task[];
}

export interface WeekViewItemComponentDispatch {
}

export class WeekViewItemComponent extends React.Component<WeekViewItemComponentProps & WeekViewItemComponentDispatch, StoreState> {
    render() {
        return (
            <React.Fragment>
                <div className="weekview-item">
                    <div className="weekview-item-header">
                        <p>{this.props.name}</p>
                        <button title="Add Task">
                            +
                        </button>
                    </div>
                    <div className="weekview-item-list">
                        {this.props.tasks.map((task) => {
                            return (
                                <TaskCardComponent key={task.id} task={task} />
                            );
                        })}
                        {this.props.tasks.length > 0 ?
                            <button title="Add Task">
                                +
                            </button>
                            : 
                            <React.Fragment/>
                        }
                    </div>
                </div>
                <ModalComponent
                    title="Task 1254"
                    isVisible={false}
                    onClosed={() => {}}
                    width="80vw"
                    height="80vh">
                    xxx
                </ModalComponent>
            </React.Fragment>
        );
    }
}