import IGear from "./IGear";

class Gear implements IGear {
  static gradiant = (context: CanvasRenderingContext2D, gear: IGear) => {
    const size = gear.size!;
    const x = size / 4;
    const y = size / 2;
    const grad = context.createRadialGradient(
      x,
      x,
      Math.PI * 100,
      y,
      y,
      Math.PI * 2,
    );

    grad.addColorStop(0, "rgba(99, 99, 99, 1)");
    grad.addColorStop(0.5, "rgba(147, 147, 147, 1)");
    grad.addColorStop(1, "rgba(66, 66, 66, 1)");
    return grad;
  };

  private calcSize = () => Math.max(this.outerRadius, this.innerRadius) * 2;

  private gearPoints = () => {
    const points = [];
    const numPoints = this.numTeeth * 2;
    for (let n = 0; n < numPoints; n++) {
      const radius = n % 3 === 0 ? this.outerRadius : this.innerRadius;
      const theta = ((Math.PI * 2) / numPoints) * (n + 1);
      const [x, y] = [radius * Math.sin(theta), radius * Math.cos(theta)];
      const [nx, ny] = [x + this.offset, y + this.offset];
      points.push({ x: x, y: y });
    }
  };

  x: number = 0;
  y: number = 0;
  outerRadius: number = 25;
  innerRadius: number = 15;
  holeRadius: number = 6;
  numTeeth: number = 12;
  theta: number = 0.5;
  thetaSpeed: number = 0.01;
  clockwise: boolean = true;
  midRadius: number = 1;
  size: number = this.calcSize();

  private offset: number = 0;
  private radius: number = 0;
  private canvas: HTMLCanvasElement;

  constructor(config: IGear) {
    Object.assign(this, config);
    this.size = this.calcSize();
    this.offset = this.size / 2;
    this.radius = this.size / 2;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.canvas.height = this.size;
  }

  private drawPolygon(
    context: CanvasRenderingContext2D,
    points: { x: number; y: number }[],
  ) {}

  draw(context: CanvasRenderingContext2D) {
    if (!context) {
      return;
    }

    context.save();
    context.fillStyle = Gear.gradiant(context, this);
    context.strokeStyle = "black";

    try {
    } catch (error) {}

    context.restore();
  }
}

export default Gear;
