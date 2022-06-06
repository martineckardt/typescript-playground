import Point from "./point";
import ColorfulPoint from "./ColorfulPoint";


let p = new Point(2, 3);
let p2 = new ColorfulPoint(2, 3, "red");

p2.setColor('blue');
console.log(p2.getColor());

console.log(p);
console.log(p2);