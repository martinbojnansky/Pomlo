import * as React from 'react';
import { Task } from 'models/task';
import { ModalComponent } from './ModalComponent';

export interface TaskModalComponentProps {
    task?: Task;
}

export interface TaskModalComponentDispatch {
    onClosed: () => void;
}

export class TaskModalComponent extends React.Component<TaskModalComponentProps & TaskModalComponentDispatch, {}> {    
    render() {
        if(this.props.task) {
            return (
                <ModalComponent
                    title={this.props.task.name}
                    isVisible={true}
                    onClosed={this.props.onClosed}
                    width="80vw"
                    height="80vh">
                    {this.props.task.name}
                </ModalComponent>
            );
        }
        else {
            return null;
        }
    }
}