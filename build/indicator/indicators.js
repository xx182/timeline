"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.DomainIndicator = (props) => React.createElement("div", { onClick: props.onClick, ref: props.setRef, style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: `${props.domain.viewportHeight}px`,
    } }, props.children);
exports.VisibleDomainIndicator = (props) => React.createElement("div", { onMouseDown: props.onMouseDown, style: {
        position: 'absolute',
        bottom: 0,
        cursor: '-webkit-grab',
        border: '1px solid red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        height: `${props.domain.viewportHeight}px`,
        left: `${props.left}px`,
        transition: props.dragging ? 'inital' : 'left 300ms ease-in-out',
        width: `${props.width}px`,
        zIndex: 3,
    } }, props.children);