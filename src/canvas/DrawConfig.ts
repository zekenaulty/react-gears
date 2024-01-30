import { Point } from "./Point";

export class DrawConfig {
  context: CanvasRenderingContext2D;
  stroke: CanvasGradient | CanvasPattern | string;
  fill: CanvasGradient | CanvasPattern | string;
  lineWidth: number;
  mask: boolean;

  constructor(
    context: CanvasRenderingContext2D,
    stroke: CanvasGradient | CanvasPattern | string,
    fill: CanvasGradient | CanvasPattern | string,
    lineWidth: number,
    mask: boolean,
  ) {
    this.context = context;
    this.stroke = stroke;
    this.fill = fill;
    this.lineWidth = lineWidth;
    this.mask = mask;
  }

  static beginDraw = (
    config: DrawConfig,
    translateTo: Point = new Point({ x: 0, y: 0 }),
  ) => {
    if (!config.context) {
      return;
    }

    config.context.save();

    config.context.translate(translateTo.x, translateTo.y);

    if (config.stroke) {
      config.context.strokeStyle = config.stroke;
    }

    if (config.fill) {
      config.context.fillStyle = config.fill;
    }

    if (config.lineWidth != config.context.lineWidth) {
      config.context.lineWidth = config.lineWidth;
    }

    if (config.mask) {
      config.context.globalCompositeOperation = "destination-out";
    }
  };

  static endDraw = (config: DrawConfig) => {
    if (config.stroke) {
      config.context.stroke();
    }

    if (config.fill) {
      config.context.fill();
    }

    config.context.restore();

    if (config.mask) {
      config.context.globalCompositeOperation = "source-out";
    }
  };
}
