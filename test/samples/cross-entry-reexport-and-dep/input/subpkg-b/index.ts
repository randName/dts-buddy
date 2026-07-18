import { Foo } from '../shared/types.js';

export function makeFoo(x: number): Foo {
	return new Foo(x);
}

export { Foo } from '../shared/types.js';
