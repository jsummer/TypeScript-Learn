// this
// this 通常表示 "calling context" 调用上下文
function foo() {
    console.log(this);
}
foo(); // window in browsers
var bar = {
    foo: foo
};
bar.foo(); // bar
