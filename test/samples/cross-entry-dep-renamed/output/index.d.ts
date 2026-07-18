declare module 'cross-entry-dep-renamed/subpkg-a' {
	export class Widget {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'cross-entry-dep-renamed/subpkg-b' {
	import type { Widget } from 'cross-entry-dep-renamed/subpkg-a';
	export function makeWidget(n: number): Widget;

	export {};
}

//# sourceMappingURL=index.d.ts.map