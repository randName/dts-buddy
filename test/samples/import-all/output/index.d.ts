declare module 'import-all' {
	export type Y =Namespace.X;
	namespace Namespace {
		interface X {
			error(): string;
		}
	}
	type Z = true;

	export type { Z };

	export {};
}

//# sourceMappingURL=index.d.ts.map