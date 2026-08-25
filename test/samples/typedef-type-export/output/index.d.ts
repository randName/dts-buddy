declare module 'typedef-type-export/default' {
	export default class Foo {
		x: number;
		constructor(x: number);
	}

	export {};
}

declare module 'typedef-type-export/generic' {
	class Box<T> {
		
		constructor(value: T);
		get(): T;
		#private;
	}
	export function box<T>(value: T): Box<T>;

	export type { Box };

	export {};
}

declare module 'typedef-type-export' {
	class Foo {
		
		constructor(x: number);
		x: number;
	}
	export function foo(n: number): Foo;

	export type { Foo };

	export {};
}

//# sourceMappingURL=index.d.ts.map