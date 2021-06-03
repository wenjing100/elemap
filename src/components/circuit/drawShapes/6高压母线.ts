
import { IhighVmainline } from '../main_Interface';
import { line_width,line_length } from '@/config/shape&layout';

const a = line_width();
//出口 nextPoint
function HighV_mainLine(pload:IhighVmainline) {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.direction = pload.direction;
  this.lineWidth = a.normal;
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
  this.ctx.stroke();
}

export {
  HighV_mainLine
}