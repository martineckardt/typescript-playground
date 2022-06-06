"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    x;
    y;
    name;
    weight;
    size;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.default = Point;
//# sourceMappingURL=point.js.map