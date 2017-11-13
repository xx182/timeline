import * as React from 'react'
import { DomainIndicator, VisibleDomainIndicator } from './indicators';

export interface IProps {
	left: number
	onClick: (x: number) => void
	onMove: (left: number) => void
	width: number
}
export interface IState {
	dragOffset: number
	left: number
	width: number
}
class Indicator extends React.Component<IProps, IState> {
	private el: Element

	public state = {
		dragOffset: null, // Relative to indicator
		left: this.props.left,
		width: this.props.width,
	}

	public componentWillReceiveProps(nextProps) {
		if (nextProps.left !== this.state.left ||
			nextProps.width !== this.state.width) {
			this.setState({
				left: nextProps.left,
				width: nextProps.width,
			})	
		}
	}

	public render() {
		return (
			<DomainIndicator
				onClick={this.onClick}
				setRef={(el) => { this.el = el }}
			>
				<VisibleDomainIndicator
					dragging={this.state.dragOffset != null}
					onMouseDown={this.onMouseDown}
					{...this.state}
				/>
			</DomainIndicator>
		)
	}

	private cursorX = (ev) => ev.clientX - this.el.getBoundingClientRect().left

	private onClick = (ev) => {
		if (this.state.dragOffset == null) this.props.onClick(this.cursorX(ev))	
	}

	private onMouseDown = (ev) => {
		document.addEventListener('mousemove', this.onMouseMove)
		document.addEventListener('mouseup', this.onMouseUp)

		this.setState({
			dragOffset: this.cursorX(ev) - this.state.left,
		})
	}

	private onMouseMove = (ev) => {
		if (this.state.dragOffset) {
			const left = this.cursorX(ev) - this.state.dragOffset
			this.setState({ left })
		}
	}

	private onMouseUp = () => {
		document.removeEventListener('mousemove', this.onMouseMove)
		document.removeEventListener('mouseup', this.onMouseUp)
		this.props.onMove(this.state.left)

		// Wrap setState in setTimeout to fire onClick before
		// unsetting dragOffset (ability to check if dragging)
		setTimeout(() => { this.setState({ dragOffset: null }) }, 0)
	}
}

export default Indicator