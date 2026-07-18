export class Foo {
	/** @type {number} */
	#x;

	/** @param {number} x */
	constructor(x) {
		this.#x = x;
	}

	get value() {
		return this.#x;
	}
}

export class Bar {
	/** @param {number} n */
	constructor(n) {
		this.n = n;
	}
}
