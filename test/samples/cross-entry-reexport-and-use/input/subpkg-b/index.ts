import { Widget } from '../shared/types.js';

export { Widget };

export function wrapWidget(id: number): Widget {
	return new Widget(id);
}
