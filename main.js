function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
var count = 5;
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4];
var f = [1, true, "a", false];
var colorred = 0;
var colorBlue = 1;
var colorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["green"] = 1] = "green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backGroundColor = Color.Red;
//Type Assertion
var note;
note = "abc";
var endWithC = note.endsWith("c");
var altWay = note.endsWith("c");
var draw = function (point) { };
draw({ x: 1, y: 2 });
//Class impl.
var PointClass = /** @class */ (function () {
    function PointClass(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    PointClass.prototype.draw = function () {
        console.log("x : " + this.x + ", y: " + this.y);
    };
    return PointClass;
}());
var pointy = new PointClass(1, 2);
// pointy.x = 1S;
pointy.draw();
