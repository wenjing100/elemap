
// 电源接入点、高压母线、双绕组-接地-变压器 、三绕组-变压器
interface ImainBase{
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  direction?:string;//l 左  r 右 u 上 d 下
}


//画线接口---第一种  根据起点坐标和长度画线
interface ILineTypeOne{
  x: number;
  y: number;
  lineD:string;// l 左   r 右   u 上   d 下
  len:number;//长度
  ctx: CanvasRenderingContext2D;

  color?: string;
  lineStyle?: string;
  lineCap?: string;//线顶端样式
  lineWidth?:number;//线宽度
}
//画线接口---第二种 根据起点坐标  终点坐标画线
interface ILineTypeTwo{
  x1:number;
  y1:number;
  x2:number;
  y2:number
  ctx:CanvasRenderingContext2D;

  lineStyle?:string;
  color?:string
  lineCap?: string;
  lineWidth?:number;//线宽度
}

export {
  ImainBase,
  ILineTypeOne,
  ILineTypeTwo,
}