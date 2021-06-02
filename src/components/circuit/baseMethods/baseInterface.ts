interface IbaseShap{
  x:number;
  y:number;
  color:string;
  ctx:CanvasRenderingContext2D;
}

interface Icircle extends IbaseShap{
  r: number;
}
interface Irect extends IbaseShap{
  w: number;
  h: number;
}

interface ISparkThree extends IbaseShap{
  len:number;
}

interface IdrawFork extends IbaseShap{
  w:number;
}

interface IdrawOpenLine extends IbaseShap{
  len:number;
}
export {
  Icircle,
  Irect,
  ISparkThree,
  IdrawFork,
  IdrawOpenLine,
}
