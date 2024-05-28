// 1.空差值比较
function areEqual(num1, num2, tolerance = Number.EPSILON) {
    return Math.abs(num1 - num2) < tolerance;
}

// 例如
console.log(areEqual(0.1 + 0.2, 0.3)); // true

// 2.整数计算
function areEqual2(num1, num2) {
    const precision = 1000000; // 保留6位小数
    const num1Int = Math.round(num1 * precision);
    const num2Int = Math.round(num2 * precision);
    return num1Int === num2Int;
}

// 例如
console.log(areEqual2(0.1 + 0.2, 0.3)); // true

// 3.引入三方库
