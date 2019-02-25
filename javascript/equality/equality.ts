// 在 JavaScript 中让注意区分 === 和 == 的不同。
// 在两种不同类型的变量进行 == 操作时，== 会试图做类型强制转换
// e.g. 将 string 转换为 number
console.log(5 == '5'); // true
console.log(5 === '5'); // false

// 然而，JavaScript 的这种选择并不是一个好主意。
console.log('' == '0'); // false
console.log(0 == ''); // true

console.log("" === "0"); // false
console.log(0 === ""); // false

// 结构化相等
console.log({a:123} == {a:123}); // false
console.log({a:123} === {a:123}); // false

type IdDisplay = {
    id: string,
    display: string
}

const list: IdDisplay[] = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    }
]

const fooIndex = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // 0
