// Future JavaScript => Now
// 将未来的语法转化为现在版本
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.y, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(1, 10);
var p2 = new Point(10, 20);
var p33 = p1.add(p2);
