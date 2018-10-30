import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { WeekViewItemComponent } from './WeekViewItemComponent';

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
                <WeekViewItemComponent 
                    name="Backlog"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Monday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Tuesday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Wednesday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Thursday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Friday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Saturday"
                    tasks={this.props.tasks}/>
                <WeekViewItemComponent 
                    name="Sunday"
                    tasks={this.props.tasks}/>
            </div>
        );
    }
}