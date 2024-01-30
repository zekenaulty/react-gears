export class Point {
  x: number = 0;
  y: number = 0;

  constructor(config: { x: number; y: number } | any = { x: 0, y: 0 }) {
    Object.assign(this, config);
  }
}
