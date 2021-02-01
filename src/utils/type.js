/**
 * Check type of operand with more specificity than `typeof`.
 *   Slightly modified version of MDN helper found in `typeof` definition page.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#real-world_usage
 *
 * @param {*} obj
 * @returns {string}
 */
export default function type(obj) {
  if (obj == null) {
    return (obj + '').toLowerCase() // implicit toString() conversion
  }

  const deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

  if (deepType === 'generatorfunction') {
    return 'function'
  }

  // Prevent over-specificity (for example, [object HTMLDivElement], etc).
  // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
  // String.prototype.match is universally supported.

  if (deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/)) {
    return deepType
  }

  return (typeof obj === 'object' || typeof obj === 'function')
    ? 'object'
    : typeof obj
}
