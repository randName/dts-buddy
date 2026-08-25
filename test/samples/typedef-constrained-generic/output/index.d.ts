declare module 'typedef-constrained-generic' {
	export function getId(item: Base): number;
	type Base = {
		id: number;
	};
	type Repo<T extends Base> = {
		find(): Promise<T>;
	};

	export type { Base, Repo };

	export {};
}

//# sourceMappingURL=index.d.ts.map