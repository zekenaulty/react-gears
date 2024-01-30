import { Point } from "./Point";
import { DrawConfig } from "./DrawConfig";

export class Circle extends Point {
  radius: number = 6;
  constructor(config: { x: number; y: number; radius: number }) {
    super(config);
    Object.assign(this, config);
  }

  get size() {
    return this.radius * 2;
  }

  draw(config: DrawConfig) {
    const c = config;
    const r: number = this.radius;

    if (c.context === null || c.context === undefined) return;

    DrawConfig.beginDraw(c, new Point({ x: this.x, y: this.y }));
    c.context.beginPath();
    c.context.arc(this.x + r, this.y + r, r, -1, Math.PI * 2);
    DrawConfig.endDraw(c);
  }
}
