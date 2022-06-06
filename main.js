"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
const ColorfulPoint_1 = require("./ColorfulPoint");
let p = new point_1.default(2, 3);
let p2 = new ColorfulPoint_1.default(2, 3, "red");
p2.setColor('blue');
p2.color;
console.log(p);
console.log(p2);
//# sourceMappingURL=main.js.map