declare module 'cross-entry-typedef/subpkg-a' {
	export function makeFoo(n: number): Foo;
	class Foo {
		
		constructor(x: number);
		
		x: number;
	}

	export type { Foo };

	export {};
}

declare module 'cross-entry-typedef/subpkg-b' {
	import type { Foo } from 'cross-entry-typedef/subpkg-a';
	export { makeFoo } from 'cross-entry-typedef/subpkg-a';
	export function takeFoo(f: Foo): number;

	export type { Foo };

	export {};
}

declare module 'cross-entry-typedef/subpkg-c' {
	import type { Foo } from 'cross-entry-typedef/subpkg-b';
	export function useFoo(f: Foo): number;

	export {};
}

//# sourceMappingURL=index.d.ts.map