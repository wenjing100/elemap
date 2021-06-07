
import { ImainBase } from '@/typings/shape_main_Interface';
import { line_width,line_length } from '@/config/shape&layout';

const a = line_width();
//出口 nextPoint
function HighV_mainLine(pload:ImainBase) {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.direction = pload.direction || 'd';
  this.lineWidth = a.light;
  this.ctx = pload.ctx;
  this.lineLen = line_length.line_self;

  this.nextPoint = {x: 0, y: 0}//确定下一个连接点
  switch(this.direction){
    case 'l':
      this.nextPoint.x = this.x + this.lineLen;
      this.nextPoint.y = this.y;
      break;
    case 'r':
      this.nextPoint.x = this.x - this.lineLen;
      this.nextPoint.y = this.y;
      break;
    case 'u':
      this.nextPoint.x = this.x;
      this.nextPoint.y = this.y - this.lineLen;
      break;
    case 'd':
      this.nextPoint.x = this.x;
      this.nextPoint.y = this.y + this.lineLen;
      break;
    default:break;
  }
}

HighV_mainLine.prototype.draw = function (){
  this.ctx.beginPath();
  this.ctx.lineCap = 'round';
  this.ctx.lineWidth = this.lineWidth;
  this.ctx.strokeStyle = this.color;
  this.ctx.moveTo(this.x,this.y);
  this.ctx.lineTo(this.nextPoint.x,this.nextPoint.y);
  //连接处的圆点
  this.ctx.arc(this.nextPoint.x,this.nextPoint.y,this.lineWidth,0,Math.PI*2);
  this.ctx.stroke();
}

export {
  HighV_mainLine
}