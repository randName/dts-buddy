declare module 'cross-entry-reexport-and-dep/subpkg-a' {
	export class Foo {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'cross-entry-reexport-and-dep/subpkg-b' {
	import type { Foo } from 'cross-entry-reexport-and-dep/subpkg-a';
	export { Foo } from 'cross-entry-reexport-and-dep/subpkg-a';
	export function makeFoo(x: number): Foo;

	export {};
}

//# sourceMappingURL=index.d.ts.map