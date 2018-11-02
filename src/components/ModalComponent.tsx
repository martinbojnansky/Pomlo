import * as React from 'react';

export interface ModalComponentProps {
    isVisible: boolean;   
    title?: string | React.Component;
    width?: string;
    height?: string;
    isLightDismissEnabled?: boolean;
    headerContent?: any;
    footerContent?: any;
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
                        {this.props.headerContent ? 
                            <div className="modal-header">
                                {this.props.headerContent}
                            </div>
                            : null 
                        }
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        {this.props.footerContent ? 
                            <div className="modal-footer">
                                {this.props.footerContent}
                            </div>
                            : null 
                        }
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}