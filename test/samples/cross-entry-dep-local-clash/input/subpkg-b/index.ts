import { Foo as FooA } from '../shared/a.js';

export class Foo {
	b: number;
	constructor(b: number) {
		this.b = b;
	}
}

export function wrap(f: FooA): Foo {
	return new Foo(f.a);
}
