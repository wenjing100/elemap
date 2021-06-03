import { Icircle, IdrawFork, IfillArrow, Irect, ISparkThree, ItiltRect } from "./base_Interface";
import { drawLineTypeOne } from './drawLine';

//圆
function drawBasicCircle(pload:Icircle) :void{
  pBegin(pload.ctx,pload.color);
  pload.ctx.arc(pload.x,pload.y,pload.r,0,Math.PI*2,false);
  pload.ctx.stroke(); 
}
//矩形
function drawBasicRect(pload:Irect):void {
  pBegin(pload.ctx,pload.color);
  pload.ctx.strokeRect(pload.x,pload.y,pload.w,pload.h); 
}
//三线 伞状 中心坐标
function drawSparkThree(pload:ISparkThree):void {
  pBegin(pload.ctx,pload.color);

  for(let i = 0;i < 3; i++){
    pload.ctx.save();

    const deg = i*(2/3)*Math.PI;
    pload.ctx.translate(pload.x,pload.y);
    pload.ctx.rotate(deg);
    pload.ctx.beginPath();
    pload.ctx.moveTo(0,0);
    pload.ctx.lineTo(0,pload.len);
    pload.ctx.stroke();

    pload.ctx.restore();
  }
}
//fork 左上角坐标
function drawFork(pload:IdrawFork) :void{
  const x1 = pload.x;
  const x2 = pload.x + pload.w;
  const y1 = pload.y;
  const y2 = pload.y + pload.w;

  pBegin(pload.ctx,pload.color);
  pload.ctx.moveTo(x1,y1);
  pload.ctx.lineTo(x2,y2);
  pload.ctx.moveTo(x1,y2);
  pload.ctx.lineTo(x2,y1);
  pload.ctx.stroke();
}
//向上 开启斜线左30
function drawOpenLine(pload:ISparkThree):void{
  pload.ctx.save();
  pload.ctx.translate(pload.x,pload.y);
  pload.ctx.rotate(-Math.PI*2/3);
  pBegin(pload.ctx,pload.color);
  pload.ctx.moveTo(0,0);
  pload.ctx.lineTo(pload.x-pload.len,0);
  pload.ctx.stroke();

  pload.ctx.restore();
}
//三角形  输入底线的中点坐标 和边长
function drawTriangle(pload:ISparkThree):void{
  const l = (Math.sqrt(3)/2)*pload.len;
  const x1 = pload.x - pload.len/2;
  const x2 = pload.x + pload.len/2;
  const y1 = pload.y;
  const y2 = pload.y - l;
  pBegin(pload.ctx,pload.color);
  pload.ctx.moveTo(x1,y1);
  pload.ctx.lineTo(pload.x,y2);
  pload.ctx.lineTo(x2,y1);
  pload.ctx.closePath();
  pload.ctx.stroke();
}
//向上双箭头 箭头尖是起始坐标
function drawDoubleArrowUp(pload:ISparkThree):void{
  pBegin(pload.ctx,pload.color);
  arrowUp(pload.ctx,pload.x,pload.y,pload.len);
  arrowUp(pload.ctx,pload.x,pload.y+2/3*pload.len,pload.len);

}
//向下双箭头 箭头尖是起始坐标
function drawDoubleArrowDown(pload:ISparkThree):void{
  pBegin(pload.ctx,pload.color);
  arrowDown(pload.ctx,pload.x,pload.y,pload.len);
  arrowDown(pload.ctx,pload.x,pload.y-2/3*pload.len,pload.len);
}
//双斜线 电感 起点最左
function drawDoubleSide(pload:ISparkThree):void{
  pBegin(pload.ctx,pload.color);
  const l = pload.len*3/2;
  const x1 = pload.x + 17/24*pload.len;
  const x2 = pload.x + 17/24*pload.len + pload.len/3;
  const y1 = pload.y - 3*Math.sqrt(3)/8*pload.len;
  const y2 = y1

  lineLeftDown30(pload.ctx,x1,y1,l);
  lineLeftDown30(pload.ctx,x2,y2,l);
  pload.ctx.moveTo(pload.x,pload.y);
  pload.ctx.lineTo(pload.x + pload.len,pload.y);
  pload.ctx.stroke();
}
//斜矩形 长宽比 3：1
function drawTiltRect(pload:ItiltRect):void{
  pBegin(pload.ctx,pload.color); 
  pload.ctx.save();
  pload.ctx.rotate(Math.PI*1/6);
  pload.ctx.strokeRect(pload.x,pload.y,pload.h,pload.h/3);
  pload.ctx.restore();
}
//接地线
function drawLineGround(pload:ISparkThree):void{
  const x0 = pload.x - pload.len/2;

  const x1 = x0;
  const x2 = x0 + pload.len/4;
  const y1 = pload.y + pload.len/2;
  const y2 = pload.y + pload.len;
  pBegin(pload.ctx,pload.color);
  drawLineTypeOne({x:x1,y:pload.y,lineD:'r',len:pload.len,ctx:pload.ctx});
  drawLineTypeOne({x:x2,y:y1,lineD:'r',len:pload.len/2,ctx:pload.ctx});
  drawLineTypeOne({x:x2,y:y2,lineD:'r',len:pload.len/2,ctx:pload.ctx});
}
//实心三角箭头  可调整旋转角度
function drawFillArrow(pload:IfillArrow):void{
  const x1 = -pload.len/2;
  const x2 = pload.len/2;
  const y1 = 0;
  const y2 = pload.len*2.5;

  pload.ctx.save();
  pload.ctx.beginPath();
  pload.ctx.fillStyle = pload.color;
  pload.ctx.translate(pload.x,pload.y);
  pload.ctx.rotate(pload.deg);
  pload.ctx.moveTo(x1,y1);
  pload.ctx.lineTo(x2,y1);
  pload.ctx.lineTo(0,y2);
  pload.ctx.lineTo(x1,y1);
  pload.ctx.fill();
  pload.ctx.restore();
}
//双子交叠圆 
// function drawDoubleCircle():void{

// }

//******工具********
function pBegin(ctx:CanvasRenderingContext2D,color:string){
  ctx.beginPath();
  ctx.strokeStyle = color;
}
function arrowDown(ctx:CanvasRenderingContext2D,x:number,y:number,len:number){
  const deg = Math.PI*5/6;
  fnArrowHelp(ctx,x,y,len,deg);
}
function arrowUp(ctx:CanvasRenderingContext2D,x:number,y:number,len:number){
  const deg = Math.PI/6;
  fnArrowHelp(ctx,x,y,len,deg);
}

function fnArrowHelp(ctx:CanvasRenderingContext2D,x:number,y:number,len:number,deg:number){
  for(let i = 0; i < 2; i++){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(Math.pow(-1,i)*deg);
    ctx.moveTo(0,0);
    ctx.lineTo(0,len);
    ctx.stroke();
    ctx.restore();
  }
}
//左下偏移 30线
function lineLeftDown30(ctx:CanvasRenderingContext2D,x:number,y:number,len:number){
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(Math.PI/6);
    ctx.moveTo(0,0);
    ctx.lineTo(0,len);
    ctx.stroke();
    ctx.restore();
}
export {
  drawBasicCircle,
  drawBasicRect,
  drawSparkThree,
  drawFork,
  drawOpenLine,
  drawTriangle,
  drawDoubleArrowUp,
  drawDoubleArrowDown,
  drawDoubleSide,
  drawTiltRect,
  drawLineGround,
  drawFillArrow,
  // drawDoubleCircle
}