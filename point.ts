
class Point {
    protected x: number;
    protected y: number;
    name: string;
    weight: number;
    size: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        
    }

    setCoordinates(x: number, y: number) {
        this.x = x
        this.y = y
    }
}



export default Point;