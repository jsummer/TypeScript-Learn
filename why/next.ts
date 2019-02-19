// Future JavaScript => Now
// 将未来的语法转化为现在版本
class Point {
    constructor(public x: number, public y: number) {
    }
    add(point: Point) {
        return new Point(this.x + point.y, this.y + point.y);
    }
}

var p1 = new Point(1, 10);
var p2 = new Point(10, 20);
var p33 = p1.add(p2);
