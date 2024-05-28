const Decimal = require('decimal.js')

// // 1.空差值比较
// function areEqual(num1, num2, tolerance = Number.EPSILON) {
//     return Math.abs(num1 - num2) < tolerance;
// }
//
// // 例如
// console.log(areEqual(0.1 + 0.2, 0.3)); // true
//
// // 2.整数计算
// function areEqual2(num1, num2) {
//     const precision = 1000000; // 保留6位小数
//     const num1Int = Math.round(num1 * precision);
//     const num2Int = Math.round(num2 * precision);
//     return num1Int === num2Int;
// }
//
// // 例如
// console.log(areEqual2(0.1 + 0.2, 0.3)); // true

// 3.引入三方库
function areEqual3(num1, num2) {
    // const decimalNum1 = new Decimal(num1);
    // const decimalNum2 = new Decimal(num2);
    return num1.eq(num2);
}

// 例如
console.log(areEqual3(new Decimal(0.1 + 0.2), new Decimal(0.3))); // false，因为0.1+0.2已经存在精度丢失
console.log(areEqual3(new Decimal(0.1).plus(0.2), new Decimal(0.3))) // true


// Ques: 为何js的浮点数计算会有误差？
// 因为js的浮点数计算是使用二进制来表示的，而二进制的精度是有限的，所以计算结果会有误差。