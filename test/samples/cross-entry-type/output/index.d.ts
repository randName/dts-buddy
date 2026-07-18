declare module 'cross-entry-type/subpkg-a' {
	class Foo {
		x: number;
		constructor(x: number);
	}
	export function makeFoo(n: number): Foo;

	export type { Foo };

	export {};
}

declare module 'cross-entry-type/subpkg-b' {
	import type { Foo } from 'cross-entry-type/subpkg-a';
	export { makeFoo } from 'cross-entry-type/subpkg-a';
	export function takeFoo(f: Foo): Foo;

	export {};
}

//# sourceMappingURL=index.d.ts.map