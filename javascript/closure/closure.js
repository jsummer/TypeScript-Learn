// Closure 闭包
// JavaScript 中最好的事情是闭包。即 JS 中的 function 能访问外层作用域中已经定义的变量
function outerFunction(arg) {
    var variableInOuterFunction = arg;
    function bar() {
        console.log(variableInOuterFunction);
    }
    bar();
}
outerFunction("你好，闭包");
// Reason why it's awesome.
// 为什么它是最好的
// 它允许你更方便的编写对象。例如，以模块模式展现。
function createCounter() {
    var val = 0;
    return {
        increment: function () { val++; },
        getVal: function () { return val; }
    };
}
var counter = new createCounter();
counter.increment();
console.log(counter.getVal()); // 1
counter.increment();
console.log(counter.getVal()); // 2
