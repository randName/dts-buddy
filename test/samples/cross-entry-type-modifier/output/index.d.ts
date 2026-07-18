declare module 'cross-entry-type-modifier/subpkg-a' {
	export class Token {
		value: string;
		constructor(value: string);
	}

	export {};
}

declare module 'cross-entry-type-modifier/subpkg-b' {
	export type { Token } from 'cross-entry-type-modifier/subpkg-a';

	export {};
}

//# sourceMappingURL=index.d.ts.map