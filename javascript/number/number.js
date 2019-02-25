// Number
// 每当你在不同语言中处理数字的时候，你需要特别注意它处理数字的特有风格。
// Core Type
// JavaScript 只有一个数字类型，它是双精度，64位数字
// Decimal 小数
console.log(.1 + .2); // 0.30000000000000004
// Integer 整数
console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER }); // {max:9007199254740991, min: -9007199254740991}
// NaN
// not a number
console.log(Math.sqrt(-1)); // NaN
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
// Infinity
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE); // true!
console.log(-Number.MAX_VALUE - 1 == -Number.MAX_VALUE); // true!
console.log(Number.MAX_VALUE + Math.pow(10, 1000)); // Infinity
console.log(-Number.MAX_VALUE - Math.pow(10, 1000)); // -Infinity
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Number.POSITIVE_INFINITY === Infinity); // true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // true
console.log(Infinity > 1); // true
console.log(-Infinity < -1); // true
// Infinitesimal
// 无穷小
console.log(Number.MIN_VALUE); // 5e-324
// 比最小值还小的值 都被转换为0
console.log(Number.MIN_VALUE / 10); // 0
