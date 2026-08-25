/**
 * @typedef {{ id: number }} Base
 */

/**
 * @template {Base} T
 * @typedef {{ find(): Promise<T> }} Repo
 */

/** @param {Base} item */
export function getId(item) {
	return item.id;
}
