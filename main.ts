function log(message) {
  console.log(message);
}

var message = "Hello World";

log(message);

let count = 5;

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3, 4];
let f: any[] = [1, true, "a", false];

const colorred = 0;
const colorBlue = 1;
const colorGreen = 2;

enum Color {
  Red = 0,
  green = 1,
  Blue = 2,
}

let backGroundColor = Color.Red;

//Type Assertion
let note;
note = "abc";
let endWithC = (<string>note).endsWith("c");
let altWay = (note as string).endsWith("c");

//Intergace impl.
interface Point {
  x: number;
  y: number;
}
let draw = (point: Point) => {};
draw({ x: 1, y: 2 });

//Class impl.
class PointClass {
  constructor(private x?: number, private y?: number) {
    // this.x = x;
    // this.y = y;
  }

  draw() {
    console.log("x : " + this.x + ", y: " + this.y);
  }
}

let pointy = new PointClass(1, 2);
// pointy.x = 1S;

pointy.draw();
