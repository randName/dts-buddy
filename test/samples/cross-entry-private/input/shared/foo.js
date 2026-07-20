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
	static #bar() {
		return 0;
	}

	/** @param {number} n */
	constructor(n) {
		this.n = n;
	}

	foo() {
		return this.#foo();
	}

	#foo() {
		return Bar.bar();
	}

	static bar() {
		return this.#bar();
	}
}
