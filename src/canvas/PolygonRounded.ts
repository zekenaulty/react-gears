import { Point } from "./Point";
import { DrawConfig } from "./DrawConfig";
import { Polygon } from "./Polygon";

export class PolygonRounded extends Polygon {
  cornerRadius: number;

  constructor(
    config:
      | {
          x: number;
          y: number;
          points: Point[] | null | undefined;
          cornerRadius?: number;
        }
      | any = {
      x: 0,
      y: 0,
      points: [],
      cornerRadius: 10,
    },
  ) {
    super(config);
    this.cornerRadius = config.cornerRadius || 10;
  }

  draw(config: DrawConfig) {
    const c = config;
    DrawConfig.beginDraw(c, new Point({ x: this.x, y: this.y }));
    c.context.beginPath();

    for (let i = 0; i < this.points.length; i++) {
      const p1 = this.points[i];
      const p2 = this.points[(i + 1) % this.points.length];
      const midX = (p1.x + p2.x) / 2;
      const midY = (p1.y + p2.y) / 2;

      // Calculate the direction vector
      const directionX = p2.x - p1.x;
      const directionY = p2.y - p1.y;

      // Calculate the normalized perpendicular vector
      const length = Math.sqrt(
        directionX * directionX + directionY * directionY,
      );
      const perpX = -directionY / length;
      const perpY = directionX / length;

      // Calculate the control points for the arcs
      const control1X = midX + perpX * this.cornerRadius;
      const control1Y = midY + perpY * this.cornerRadius;
      const control2X = midX - perpX * this.cornerRadius;
      const control2Y = midY - perpY * this.cornerRadius;

      // Move to the start point of the line
      if (i === 0) {
        c.context.moveTo(p1.x, p1.y);
      }

      // Draw the line and the arc
      c.context.lineTo(control1X, control1Y);
      c.context.arcTo(midX, midY, control2X, control2Y, this.cornerRadius);
    }

    c.context.closePath();
    DrawConfig.endDraw(c);
  }
}
