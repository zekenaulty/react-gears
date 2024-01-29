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
  fillStyle: string = "silver";
  lineStyle: string = "black";
  size: number = this.calcSize();
}

export default Gear;
