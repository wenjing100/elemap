
import { BASE_SIZE } from '../../../config/shape&layout';
import { IeEnter } from '../mainInterface';
/* 
上接线长度：2.5 base
*/

//l-圆 2.5base
function EleDianYaHuGan(pload: IeEnter) {
  this.x = pload.x;
  this.y = pload.y;
  this.r = BASE_SIZE * 2.5;
  this.color = pload.color;
  this.ctx = pload.ctx;
  
}

EleDianYaHuGan.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.strokeStyle = this.color;
  this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
  const y2 = this.y + BASE_SIZE*3;

  this.ctx.moveTo(this.x + this.r,y2);
  this.ctx.arc(this.x,y2,this.r,0,Math.PI*2,false);

  this.ctx.moveTo(this.x,this.y - this.r);
  this.ctx.lineTo(this.x,this.y - this.r*2);
  this.ctx.stroke();
}

export default EleDianYaHuGan