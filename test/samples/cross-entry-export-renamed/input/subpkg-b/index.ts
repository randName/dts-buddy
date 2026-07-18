import { Foo as FooRenamed } from '../shared/types.js';

export function takeFoo(f: FooRenamed): FooRenamed {
	return f;
}

export { Foo as FooRenamed } from '../shared/types.js';
