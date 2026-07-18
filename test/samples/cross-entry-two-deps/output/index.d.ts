declare module 'cross-entry-two-deps/subpkg-a' {
	export class Foo {
		a: number;
		constructor(a: number);
	}

	export {};
}

declare module 'cross-entry-two-deps/subpkg-b' {
	import type { Foo } from 'cross-entry-two-deps/subpkg-a';
	export function takeFooA(f: Foo): Foo;
	export function makeFooB(b: string): Foo_1;
	class Foo_1 {
		b: string;
		constructor(b: string);
	}

	export {};
}

//# sourceMappingURL=index.d.ts.map