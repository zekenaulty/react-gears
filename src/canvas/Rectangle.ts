import { Point } from "./Point";
import { DrawConfig } from "./DrawConfig";
import { Polygon } from "./Polygon";

export class Rectangle extends Point {
  width: number = 0;
  height: number = 0;
  private polygon!: Polygon;

  constructor(
    config: { x: number; y: number; width: number; height: number } = {
      x: 0,
      y: 0,
      width: 110,
      height: 55,
    },
  ) {
    super(config);
    Object.assign(this, config);
    this.polygon = new Polygon({
      x: this.x,
      y: this.y,
      points: [
        new Point({ x: this.x, y: this.y }),
        new Point({ x: this.x + this.width, y: this.y }),
        new Point({ x: this.x + this.width, y: this.y + this.height }),
        new Point({ x: this.x, y: this.y + this.height }),
      ],
    });
  }

  draw(config: DrawConfig) {
    const c = config;
    this.polygon.draw(c);
  }
}
