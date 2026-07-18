export { makeFoo } from '../subpkg-a/index.js';

/** @typedef {import('../subpkg-a').Foo} Foo */

/** @param {Foo} f */
export function takeFoo(f) {
	return f.x;
}
