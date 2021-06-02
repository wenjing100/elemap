
interface ImainBase{
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D;
}


//元器件接口   元件id：1、33
interface IeEnter extends ImainBase{
  
  
}

//画线接口---第一种  根据起点坐标和长度画线
interface ILineTypeOne{
  x:number;
  y:number;
  lineStyle?:string;//线段类型----->以后改为枚举：虚线dashed 实线normal
  lineD:string;// l 左   r 右   t 上   b 下
  long:number;//长度
  ctx:CanvasRenderingContext2D;
  color?:string
}
//画线接口---第二种 根据起点坐标  终点坐标画线
interface ILineTypeTwo{
  x1:number;
  y1:number;
  x2:number;
  y2:number
  lineStyle?:string;//线段类型----->以后改为枚举：虚线 实线
  ctx:CanvasRenderingContext2D;
  color?:string
}

export {
  ImainBase,
  IeEnter,
  ILineTypeOne,
  ILineTypeTwo
}