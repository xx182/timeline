// import * as React from 'react'
import Event from "../../../../../models/event"
import { EVENT_MIN_SPACE, EVENT_HEIGHT } from "../../../../../constants"
import createElement from '../../../../../utils/create-element'

export default class PointInTime {
	 constructor(private event: Event) {
		event.isRendered = true
	}

	public render() {
		const li = createElement(
			'li',
			'pit-wrap',
			[
				'box-sizing: border-box',
				'font-size: 0.8em',
				'position: absolute',
				'white-space: nowrap',
				`max-width: ${EVENT_MIN_SPACE}px`,
			],
			[
				`left: ${this.event.left - 5}px`,
				`top: ${this.event.top}px`,
			]
		)
		li.setAttribute('title', this.event.date.toString())

		const title = createElement(
			'div',
			'pit-title',
			[
				'background-color: rgba(255,255,255,.75)',
				'display: inline-block',
				`line-height: ${EVENT_HEIGHT}px`,
				`max-width: calc(${EVENT_MIN_SPACE}px - ${EVENT_HEIGHT}px)`,
				'overflow: hidden',
				'padding: .25em',
				'text-overflow: ellipsis',
			]
		)
		title.textContent = this.event.title

		const point = createElement(
			'div',
			'pit-point',
			[
				'background-image: radial-gradient(white 20%, black 100%)',
				`border-radius: ${EVENT_HEIGHT/2}px`,
				'display: inline-block',
				'margin: .25em 0',
				`width: ${EVENT_HEIGHT}px`,
				`height: ${EVENT_HEIGHT}px`,
			]
		)

		li.appendChild(point)
		li.appendChild(title)

		return li
	}
}
