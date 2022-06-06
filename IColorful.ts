export type Color = "red" | "blue" | "yellow";

export default interface IColorful {
    getColor(): Color;
    setColor(color: Color): void;
}