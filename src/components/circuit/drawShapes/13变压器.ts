
import { BASE_SIZE } from '../../../config/shape&layout';

/* 

*/

//参数接口
interface IbianYa {
  x: number;
  y: number;
  color: string;
  ctx: CanvasRenderingContext2D
}
//l-圆 2.5base
function EleBianYaQi(pload: IbianYa) {
  this.x = pload.x;
  this.y = pload.y;
  this.r = BASE_SIZE * 2.5;
  this.color = pload.color;
  this.ctx = pload.ctx;
}

EleBianYaQi.prototype.draw = function () {
  const w = this.r;
  //三角形的高
  const y1 =this.y - (this.r)*4.2;
  //第二个圆心 y
  const y2 = this.y + BASE_SIZE*3;

  this.ctx.beginPath();
  this.ctx.strokeStyle = this.color;
  this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);

  this.ctx.moveTo(this.x + this.r,y2);
  this.ctx.arc(this.x,y2,this.r,0,Math.PI*2,false);

  this.ctx.moveTo(this.x,this.y - this.r);
  this.ctx.lineTo(this.x,this.y - this.r*2);

  this.ctx.moveTo(this.x - w/2,this.y);
  this.ctx.lineTo(this.x + w/2,this.y);
  this.ctx.lineTo(this.x,this.y - y1);
  this.ctx.lineTo(this.x - w/2,this.y);
  //120'线，画线旋转
  this.ctx.stroke();
}

export default EleBianYaQi