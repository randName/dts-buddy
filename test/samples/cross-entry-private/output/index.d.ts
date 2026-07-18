declare module 'cross-entry-private' {
	export class Foo {
		
		constructor(x: number);
		get value(): number;
		#private;
	}
	export class Bar {
		
		constructor(n: number);
		n: number;
	}

	export {};
}

declare module 'cross-entry-private/subpackage' {
	import type { Foo, Bar } from 'cross-entry-private';
	export function takeFoo(f: Foo): Foo;

	export function makeBar(n: number): Bar;

	export {};
}

//# sourceMappingURL=index.d.ts.map