

import { BASE_SIZE } from '../../../config/shape&layout';
import { IeEnter } from '../mainInterface';

/* 
两边线段长 3 base
*/
//s-圆
function EleEnter(pload: IeEnter) {
  this.x = pload.x;
  this.y = pload.y;
  this.r = BASE_SIZE;
  this.color = pload.color;
  this.ctx = pload.ctx;
  this.direction = pload.direction ?pload.direction: 0;
  this.o1 = {};
  this.o2 = {};
}

EleEnter.prototype.draw = function (){

  this.ctx.beginPath();
  this.ctx.strokeStyle = this.color;
  this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
 
  this.ctx.moveTo(this.x - this.r,this.y);
  this.ctx.lineTo(this.x - this.r*4,this.y);
  this.o1.x = this.x - this.r*4;
  this.o1.y = this.y;

  this.ctx.moveTo(this.x + this.r,this.y);
  this.ctx.lineTo(this.x + this.r*4,this.y);
  this.o2.x = this.x + this.r*4;
  this.o2.y = this.y;
  this.ctx.stroke();
   //旋转*********************************
   if(this.direction){
    this.ctx.save();
    const deg = 45;
    this.ctx.rotate(Math.PI/4);
    this.ctx.restore();
  }
}

EleEnter.prototype.rotate = function () {
  this.ctx.save();
  const deg = 45;
  this.ctx.rotate(deg);
  this.ctx.restore();
}
EleEnter.prototype.output = {
  o1:{}
}
export {
  EleEnter
} 