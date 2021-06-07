

import { shap_scale,line_width,line_length } from '@/config/shape&layout';
import { ImainBase } from '@/typings/shape_main_Interface';
import { drawDoubleSide } from '@/components/circuit/baseMethods/baseShapes';
import { drawLineTypeOne } from '@/components/circuit/baseMethods/drawLine';
import { bd } from '@/utils/utils_drawShap';

const scale = shap_scale.small;
const a = line_width();

function singleDianliuHuGan(pload: ImainBase):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;
  this.direction = pload.direction || 'd';//默认向下
  this.r = scale;
  this.len = line_length.line_extra_exShort;
  this.lineW = a.light;
  
  this.nextPoint = {
    x:this.x,
    y:this.direction == 'd'?this.y+2*this.r + 2*this.len:this.y-2*this.r-2*this.len,
  }
  //圆心处
  this.y1 = this.direction =='d'?this.y + this.r + this.len:this.y-this.r -this.len;


}

singleDianliuHuGan.prototype.draw = function (){

  drawLineTypeOne({
    x:this.x,
    y:this.y,
    len:2*this.len + 2*this.r,
    lineD:this.direction,
    ctx:this.ctx,
    color:this.color,
    lineWidth:this.lineW
  })
  //画圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,this.y1,this.r,0,Math.PI*2);
  this.ctx.stroke();
  //画侧边电感
  drawDoubleSide({
    x:this.x+this.r,
    y:this.y1,
    len:this.r*2,
    color:this.color,
    ctx:this.ctx
  })

}

export {
  singleDianliuHuGan
} 