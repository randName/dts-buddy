/**
 * @template T
 */
export class Box {
	/** @type {T} */
	#value;

	/** @param {T} value */
	constructor(value) {
		this.#value = value;
	}

	get() {
		return this.#value;
	}
}

/**
 * @template T
 * @param {T} value
 */
export const box = (value) => new Box(value);
