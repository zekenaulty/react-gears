import { Point } from "./Point";
import { DrawConfig } from "./DrawConfig";

export class Polygon extends Point {
  points: Point[] = [];
  constructor(
    config:
      | { x: number; y: number; points: Point[] | null | undefined }
      | any = {
      x: 0,
      y: 0,
      points: [],
    },
  ) {
    super(config);
    Object.assign(this, config);
  }

  xMax() {
    let m = 0;
    this.points?.map((p) => {
      const v = p.x;
      m = Math.max(m, v);
    });
    return m;
  }

  xMin() {
    let m = 0;
    this.points?.map((p) => {
      const v = p.x;
      m = Math.min(m, v);
    });
    return m;
  }

  yMax() {
    let m = 0;
    this.points?.map((p) => {
      const v = p.y;
      m = Math.max(m, v);
    });
    return m;
  }

  yMin() {
    let m = 0;
    this.points?.map((p) => {
      const v = p.y;
      m = Math.min(m, v);
    });
    return m;
  }

  size() {
    return {
      width: this.xMax() - this.xMin(),
      height: this.yMax() - this.yMin(),
    };
  }

  draw(config: DrawConfig) {
    const c = config;
    DrawConfig.beginDraw(c, new Point({ x: this.x, y: this.y }));
    c.context.beginPath();
    c.context.moveTo(this.points[0].x, this.points[0].y);
    this.points?.forEach((p) => {
      c.context.lineTo(p.x, p.y);
    });
    c.context.lineTo(this.points[0].x, this.points[0].y);
    c.context.closePath();
    DrawConfig.endDraw(c);
  }
}
