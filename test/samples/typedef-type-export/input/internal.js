export class Foo {
	/** @param {number} x */
	constructor(x) {
		this.x = x;
	}
}

/** @param {number} n */
export const foo = (n) => new Foo(n);
