import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { WeekViewItemComponent } from './WeekViewItemComponent';

export interface WeekViewComponentProps {
    tasks: Task[];
}

export interface WeekViewComponentDispatch {
    loadTasks: () => Promise<Action>;
    onOpenTask: (id: string) => void;
}

export class WeekViewComponent extends React.Component<WeekViewComponentProps & WeekViewComponentDispatch, StoreState> {
    componentWillMount() {
        this.props.loadTasks();
    }

    render() {
        return (
            <div className="weekview">
                <WeekViewItemComponent 
                    name="Backlog"
                    tasks={this.props.tasks}
                    onOpenTask={this.props.onOpenTask}/>
            </div>
        );
    }
}