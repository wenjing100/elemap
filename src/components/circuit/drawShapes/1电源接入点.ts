

import { shap_scale,line_width } from '@/config/shape&layout';
import { ImainBase } from '@/typings/shape_main_Interface';
import { drawLineTypeOne } from '../baseMethods/drawLine';
/* 
  名称：电源接入点
  比例: middle
  外接点也是圆的输入点
*/
const scale = shap_scale.middle;
const a = line_width();

function EleEnter(pload: ImainBase):void {
  this.x = pload.x;
  this.y = pload.y;
  this.r = scale/2;
  this.lineLength = scale*1.5;
  this.color = pload.color;
  this.lineWdth = a.light;
  this.ctx = pload.ctx;
  this.nextPoint = {x:this.x,y:this.y}
}

EleEnter.prototype.draw = function (){
  const x0 = this.x;
  const y0 = this.y + this.r;
  const x1 = this.x - this.r;
  const y1 = y0
  const x2 = this.x + this.r;
  const y2 = y0;
  this.ctx.beginPath();
  this.ctx.lineWidth = this.lineWdth;
  //画圆
  this.ctx.arc(x0,y0,this.r,0,Math.PI*2);
  this.ctx.stroke();
  //画线
  drawLineTypeOne({x:x1,y:y1,ctx:this.ctx,lineD:'l',len:this.lineLength});
  drawLineTypeOne({x:x2,y:y2,ctx:this.ctx,lineD:'r',len:this.lineLength});
}

export {
  EleEnter
} 