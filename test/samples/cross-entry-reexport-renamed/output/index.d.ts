declare module 'cross-entry-reexport-renamed/subpkg-a' {
	export class Widget {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'cross-entry-reexport-renamed/subpkg-b' {
	export { Widget } from 'cross-entry-reexport-renamed/subpkg-a';

	export {};
}

//# sourceMappingURL=index.d.ts.map