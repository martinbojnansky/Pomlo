import * as React from 'react';
import { StoreState } from 'states/StoreState';
import { Action } from 'actions/Actions';
import { Task } from 'models/Task';
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