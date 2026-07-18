declare module 'cross-entry-dep-local-clash/subpkg-a' {
	export class Foo {
		a: number;
		constructor(a: number);
	}

	export {};
}

declare module 'cross-entry-dep-local-clash/subpkg-b' {
	import type { Foo as Foo_1 } from 'cross-entry-dep-local-clash/subpkg-a';
	export class Foo {
		b: number;
		constructor(b: number);
	}
	export function wrap(f: Foo_1): Foo;

	export {};
}

//# sourceMappingURL=index.d.ts.map