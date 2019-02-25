// Null and Undefined
// JavaScript 有两个基本数据类型 : null 和 undefined.
// 未初始化: undefined
// 不可用: null

console.log(undefined === undefined); // true
console.log(null === undefined); // true

console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

// 推荐用 `== null` 来检查 undefined 或者 null
function foo(arg: string | null | undefined) {
    if (arg != null) {
        // arg 必须是 string
    }
}

// 检查根元素的undefined 用 typeof
if (typeof someglobal !== 'undefined') {
    // if Something
    return {a:1,b2};
    // else
    return {a:1,b:undefined};
}

// 你应该用类型注解
function foo():{a: number, b?:number} {
    // if Something
    return {a:1,b:2};
    // else
    return {a:1};
}
