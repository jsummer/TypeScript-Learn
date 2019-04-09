var Something = /** @class */ (function () {
    function Something() {
        Something.instance++;
    }
    Something.instance = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instance);
