

import { shap_scale,line_width,line_length } from '@/config/shape&layout';
import { ImainBase } from '@/typings/shape_main_Interface';
import { drawDoubleSide } from '@/components/circuit/baseMethods/baseShapes';
import { drawLineTypeOne } from '@/components/circuit/baseMethods/drawLine';
import { bd } from '@/utils/utils_drawShap';

const scale = shap_scale.small;
const a = line_width();

function doubleDianliu_support(pload: ImainBase):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;
  this.direction = pload.direction || 'd';//默认向下
  this.r = scale;
  this.len = line_length.line_extra_exShort;
  this.lineW = a.light;
  const ll = 2*this.r + 2*this.len;
  this.nextPoint = {
    x:this.x,
    y:this.direction == 'd'?this.y+2*ll-this.len:this.y-2*ll+this.len,
  }
  //圆心处--1
  this.y1 = this.direction =='d'?this.y + ll/2:this.y-ll/2;
  //圆心处--2
  this.y2 = this.direction =='d'?this.y + ll + this.r/2:this.y - ll - this.r;

}

doubleDianliu_support.prototype.draw = function (){

  drawLineTypeOne({
    x:this.x,
    y:this.y,
    len:4*this.r + 3*this.len,
    lineD:this.direction,
    ctx:this.ctx,
    color:this.color,
    lineWidth:this.lineW,
    lineCap:'round'
  })
  //画圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,this.y1,this.r,0,Math.PI*2);
  this.ctx.stroke();
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,this.y2,this.r,0,Math.PI*2);
  this.ctx.stroke();
  //画侧边电感
  drawDoubleSide({
    x:this.x+this.r,
    y:this.y1,
    len:this.r*2,
    color:this.color,
    ctx:this.ctx
  });
  drawDoubleSide({
    x:this.x+this.r,
    y:this.y2,
    len:this.r*2,
    color:this.color,
    ctx:this.ctx
  });

}

export {
  doubleDianliu_support
} 