class Something {
    static instance = 0;
    constructor() {
        Something.instance++;
    }
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.instance);
