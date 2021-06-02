import { Icircle, IdrawFork, IdrawOpenLine, Irect, ISparkThree } from "./baseInterface";


//圆
function drawBasicCircle(pload:Icircle) :void{
  pload.ctx.beginPath();
  pload.ctx.strokeStyle = pload.color;
  pload.ctx.arc(pload.x,pload.y,pload.r,0,Math.PI*2,false);
  pload.ctx.stroke(); 
}
//矩形
function drawBasicRect(pload:Irect):void {
  pload.ctx.beginPath();
  pload.ctx.strokeStyle = pload.color;
  pload.ctx.strokeRect(pload.x,pload.y,pload.w,pload.h); 
}
//三线 伞状
function drawSparkThree(pload:ISparkThree):void {
  pload.ctx.beginPath();
  pload.ctx.strokeStyle = pload.color;

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
//fork
function drawFork(pload:IdrawFork) :void{
  const x1 = pload.x;
  const x2 = pload.x + pload.w;
  const y1 = pload.y;
  const y2 = pload.y + pload.w;

  pload.ctx.beginPath();
  pload.ctx.strokeStyle = pload.color;
  pload.ctx.moveTo(x1,y1);
  pload.ctx.lineTo(x2,y2);
  pload.ctx.moveTo(x1,y2);
  pload.ctx.lineTo(x2,y1);
  pload.ctx.stroke();
}
//向上 开启斜线
function drawOpenLine(pload:IdrawOpenLine):void{
  console.log('空白');
}
function drawTriangle(){
  console.log('空白');
}
function drawDoubleArrowU(){
  console.log('空白');
}
function drawDoubleArrowD(){
  console.log('空白');
}
function drawDoubleSide(){
  console.log('空白');
}
function drawTiltRect(){
  console.log('空白');
}
function drawLineGround(){
  console.log('空白');
}
export {
  drawBasicCircle,
  drawBasicRect,
  drawSparkThree,
  drawFork,
  drawOpenLine,
  drawTriangle,
  drawDoubleArrowU,
  drawDoubleArrowD,
  drawDoubleSide,
  drawTiltRect,
  drawLineGround
}