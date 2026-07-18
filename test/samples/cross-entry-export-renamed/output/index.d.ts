declare module 'cross-entry-export-renamed/subpkg-a' {
	export class Foo {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'cross-entry-export-renamed/subpkg-b' {
	import type { Foo as FooRenamed } from 'cross-entry-export-renamed/subpkg-a';
	export { Foo as FooRenamed } from 'cross-entry-export-renamed/subpkg-a';
	export function takeFoo(f: FooRenamed): FooRenamed;

	export {};
}

//# sourceMappingURL=index.d.ts.map