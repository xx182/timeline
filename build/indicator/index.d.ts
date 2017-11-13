/// <reference types="react" />
import * as React from 'react';
export interface IProps {
    left: number;
    onClick: (x: number) => void;
    onMove: (left: number) => void;
    width: number;
}
export interface IState {
    dragOffset: number;
    left: number;
    width: number;
}
declare class Indicator extends React.Component<IProps, IState> {
    private el;
    state: {
        dragOffset: any;
        left: number;
        width: number;
    };
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
    private cursorX;
    private onClick;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
}
export default Indicator;
