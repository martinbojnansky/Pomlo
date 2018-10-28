import * as React from 'react';

export interface ModalComponentProps {
    isVisible: boolean;   
    title?: string;
}

export interface ModalComponentDispatch {
    onClosed: () => void;
}

export class ModalComponent extends React.Component<ModalComponentProps & ModalComponentDispatch, {}> {    
    render() {
        if(this.props.isVisible) {
            return (
                <div className="modal visible">
                    <div 
                        className="modal-overlay"
                        onClick={this.props.onClosed}/>
                    <div className="modal-wrapper">
                        <div className="modal-header">
                            <span>{this.props.title}</span>
                            <button
                                title="Close"
                                onClick={this.props.onClosed}>
                                ※
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer"/>
                    </div>
                </div>
            );
        }
        else {
            return <div className="modal hidden"/>;
        }
    }
}