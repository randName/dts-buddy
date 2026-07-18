declare module 'cross-entry-reexport-and-use/subpkg-a' {
	export class Widget {
		id: number;
		constructor(id: number);
	}

	export {};
}

declare module 'cross-entry-reexport-and-use/subpkg-b' {
	import type { Widget } from 'cross-entry-reexport-and-use/subpkg-a';
	export { Widget } from 'cross-entry-reexport-and-use/subpkg-a';
	export function wrapWidget(id: number): Widget;

	export {};
}

//# sourceMappingURL=index.d.ts.map