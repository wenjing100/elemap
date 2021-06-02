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
//和openline、triangle、doubleArrowUp/doubleArrowDown公用接口
interface ISparkThree extends IbaseShap{
  len:number;
}

interface IdrawFork extends IbaseShap{
  w:number;
}

interface ItiltRect extends IbaseShap{
  h:number;
}

interface IfillArrow extends ISparkThree{
  deg:number;
}
export {
  Icircle,
  Irect,
  ISparkThree,
  IdrawFork,
  ItiltRect,
  IfillArrow,
}
