interface IGear {
  x: number;
  y: number;
  outerRadius?: number;
  innerRadius?: number;
  holeRadius?: number;
  numTeeth?: number;
  theta?: number;
  thetaSpeed?: number;
  clockwise?: boolean;
  midRadius?: number;
  //fillStyle?: string | CanvasGradient | CanvasPattern;
  //lineStyle?: string;
  size?: number;
}

export default IGear;
