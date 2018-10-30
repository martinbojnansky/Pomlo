import * as React from 'react';

export interface ModalComponentProps {
    isVisible: boolean;   
    title?: string;
    width?: string;
    height?: string;
    isLightDismissEnabled?: boolean;
}

export interface ModalComponentDispatch {
    onClosed?: () => void;
}

export class ModalComponent extends React.Component<ModalComponentProps & ModalComponentDispatch, {}> {    
    render() {
        let style: React.CSSProperties = { width: this.props.width, height: this.props.height };

        if(this.props.isVisible) {
            return (
                <div className="modal visible">
                    <div 
                        className="modal-overlay"
                        onClick={this.props.isLightDismissEnabled ? this.props.onClosed : () => {}}/>
                    <div className="modal-wrapper" style={style}>
                        <div className="modal-header">
                            <span>{this.props.title}</span>
                            <button
                                title="Close"
                                onClick={this.props.onClosed}>
                                &times;
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
            return null;
        }
    }
}