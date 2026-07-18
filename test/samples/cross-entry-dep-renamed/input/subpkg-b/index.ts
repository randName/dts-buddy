import { Foo } from '../shared/types.js';

export function makeWidget(n: number): Foo {
	return new Foo(n);
}
