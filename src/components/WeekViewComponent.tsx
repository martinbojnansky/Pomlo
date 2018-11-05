import * as React from 'react';
import { StoreState } from 'states/storeState';
import { Action } from 'actions/actions';
import { Task } from 'models/task';
import { WeekViewItemComponent } from './WeekViewItemComponent';
import dateUtils from 'utils/dateUtils';
import TaskModalContainer from 'containers/TaskModalContainer';

export interface WeekViewComponentProps {
    tasks: Task[];
    date: Date;
}

export interface WeekViewComponentDispatch {
    onLoadTasks: () => Promise<Action>;
    onOpenTask: (id: string) => void;
    onCreateTask: (date?: Date) => Promise<Action>;
}

export class WeekViewComponent extends React.Component<WeekViewComponentProps & WeekViewComponentDispatch, StoreState> {
    componentWillMount() {
        this.props.onLoadTasks();
    }

    render() {
        let weekDays = dateUtils.getWeekDays(this.props.date, 1),
        weekViewItems: JSX.Element[] = [];

        weekViewItems.push(
            <WeekViewItemComponent 
                key={-1}
                name="Backlog"
                tasks={this.props.tasks}
                onOpenTask={this.props.onOpenTask}
                onCreateTask={this.props.onCreateTask}
            />
        );

        for(let i = 0; i < 7; i++) {
            weekViewItems.push(
                <WeekViewItemComponent            
                    key={i}
                    name={`${weekDays[i].name}, ${weekDays[i].date.getDate()}`}
                    tasks={filterWeekItemTasks(this.props.tasks, weekDays[i].date)}
                    onOpenTask={this.props.onOpenTask}
                    onCreateTask={this.props.onCreateTask}
                    date={weekDays[i].date}
                />
            );
        }

        return (
            <React.Fragment>
                <div className="weekview">
                    {weekViewItems.map(i => i)}
                </div>
                <TaskModalContainer />
            </React.Fragment>
        );
    }
}

function filterWeekItemTasks(tasks: Task[], date: Date): Task[] {
    return tasks.slice(0, tasks.length)
        .filter(t => t.date && dateUtils.getStartOfDay(t.date.toDate()).getTime() === dateUtils.getStartOfDay(date).getTime());
}