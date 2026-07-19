/**
 * Add two numbers
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} the sum
 * @deprecated
 */
export const add = (a, b) => a + b;

/**
 * A function expression
 * @param {number} x the value
 */
export const funcExpr = function (x) {
	return x * 2;
};

/**
 * An internal helper — should be stripped entirely
 * @internal
 * @param {number} x the value
 * @returns {number} the result
 */
export const hidden = (x) => x * 3;
