import { CENTER_CHANGE, CENTER_CHANGE_DONE, Ratio, Milliseconds } from "../constants"
import Config from "./config"
import { debounce } from "../utils"
import Domain from "./domain"

export class Props {
	private readonly defaultCenter = .5
	config: Config
	domains: Domain[]
	time: Milliseconds
	viewportHeight: number
	viewportWidth: number

	init(config: Config) {
		this.config = config
		if (config.center != null) this.center = config.center
		this.time = config.to - config.from
		this.dimensions = config.rootElement
		this.domains = config.domains.map(d => new Domain(d))
	}

	/** Current center of the timeline by ratio [0, 1] */
	private _center: Ratio = this.defaultCenter
	get center() { return this._center }
	set center(n: Ratio) {
		if ((this._center === 0 && n < 0) || (this._center === 1 && n > 1)) return
		else if (n < 0) this._center = 0
		else if (n > 1) this._center = 1
		else this._center = n

		document.dispatchEvent(new CustomEvent(CENTER_CHANGE, { detail: n }))
		this.centerChangeDone()
	}

	set dimensions(rootElement: HTMLElement) {
		const style = getComputedStyle(rootElement)
		const nextWidth = parseInt(style.getPropertyValue('width'), 10)
		const nextHeight = parseInt(style.getPropertyValue('height'), 10)

		this.viewportWidth = nextWidth
		this.viewportHeight = nextHeight
	}

	private centerChangeDone = debounce(() => document.dispatchEvent(new CustomEvent(CENTER_CHANGE_DONE)), 300)
}

export default new Props()