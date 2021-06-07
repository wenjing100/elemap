
import { ILineTypeOne, ILineTypeTwo } from '@/typings/shape_main_Interface';

//根据起点坐标、方向、长度画线-----返回一个终点坐标对象
function drawLineTypeOne(loadone:ILineTypeOne) {
  let x1 = null;
  let y1 = null;
  switch(loadone.lineD){
    case 'l':
      x1 = loadone.x - loadone.len;
      y1 = loadone.y;
      break;
    case 'r':
      x1 = loadone.x + loadone.len;
      y1 = loadone.y;
      break;
    case 'u':
      x1 = loadone.x;
      y1 = loadone.y - loadone.len;
      break;
    case 'd':
      x1 = loadone.x;
      y1 = loadone.y + loadone.len;
      break;
  }
  loadone.ctx.beginPath();
  //判断线的类型
  if(loadone.lineStyle || loadone.lineStyle == 'dashed'){
    loadone.ctx.setLineDash([2,2]);
  }
  if(loadone.lineCap || loadone.lineCap == 'round'){
    loadone.ctx.lineJoin = 'round';
  }
  if(loadone.color){
    loadone.ctx.strokeStyle = loadone.color;
  }
  if(loadone.lineWidth){
    loadone.ctx.lineWidth = loadone.lineWidth;
  }
  loadone.ctx.moveTo(loadone.x,loadone.y);
  loadone.ctx.lineTo(x1,y1);
  loadone.ctx.stroke();
  //返回终点坐标
  return {x:Math.floor(x1),y:Math.floor(y1)}
}


//根据起点坐标  终点坐标画线
function drawLineTypeTwo(loadtow:ILineTypeTwo) {
  loadtow.ctx.beginPath();
  loadtow.ctx.moveTo(loadtow.x1,loadtow.y1);
  loadtow.ctx.lineTo(loadtow.x2,loadtow.y2);
  if(loadtow.lineStyle || loadtow.lineStyle == 'dashed'){
    loadtow.ctx.setLineDash([2,2]);
  }
  if(loadtow.lineCap || loadtow.lineCap == 'round'){
    loadtow.ctx.lineCap = 'round';
  }
  if(loadtow.color){
    loadtow.ctx.strokeStyle = loadtow.color;
  }
  if(loadtow.lineWidth){
    loadtow.ctx.lineWidth = loadtow.lineWidth;
  }
  loadtow.ctx.stroke();
}

export {
  drawLineTypeOne,
  drawLineTypeTwo
}