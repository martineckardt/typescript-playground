import Point from "./point";
import IColorful, { Color } from "./IColorful";

class ColorfulPoint extends Point implements IColorful {
    private color: Color;

    constructor(x = 0, y = 0, color: Color) {
        super(x, y);
        this.color = color;
    }

    getColor(): Color {
        return this.color;
    }

    setColor(color: Color): void {
        this.color = color;
    }

}

export default ColorfulPoint;