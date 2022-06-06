"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
class ColorfulPoint extends point_1.default {
    color;
    constructor(x = 0, y = 0, color) {
        super(x, y);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
}
exports.default = ColorfulPoint;
//# sourceMappingURL=ColorfulPoint.js.map