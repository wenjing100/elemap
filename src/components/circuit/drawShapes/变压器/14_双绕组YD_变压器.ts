//id:14 双绕组YD_变压器
import { drawSparkThree,drawTriangle } from '../../baseMethods/baseShapes';
import { shap_scale,line_length,line_width } from '@/config/shape&layout';
import { ImainBase } from '../../main_Interface';
import { bd } from '@/utils/utils_drawShap';

const a = line_width();

//从上定点开始绘制
//出口 nextPosition
function BianYaOne(pload:ImainBase):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;

  this.r = shap_scale.large;
  this.shortline = line_length.line_extra_short;
  this.lineW = a.light;
  this.nextPosition = {x:this.x,y:this.y + 2*this.shortline + this.r*7/4}
}

BianYaOne.prototype.draw = function () {

  const y1 = this.y + this.shortline + this.r;//第一个圆心
  const y2 = y1 + this.r*3/2;//第二个圆心
  const y3 = y2 + this.r/3;//三角形
  const y4 = y2 + this.r;//最底部

  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,this.y);
  this.ctx.lineTo(this.x,this.y + this.shortline);
  this.ctx.stroke();
  //第一个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y1,this.r,0,Math.PI*2);
  this.ctx.stroke();

  drawSparkThree({
    ctx:this.ctx,
    x:this.x,
    y:y1,
    len:this.r/2,
    color:this.color
  });
  //第二个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y2,this.r,0,Math.PI*2);
  this.ctx.stroke();

  drawTriangle({
    x:this.x,
    y:y3,
    len:this.r,
    color:this.color,
    ctx:this.ctx
  });
  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,y4);
  this.ctx.lineTo(this.x,y4 + this.shortline);
  this.ctx.stroke();
}


export {
  BianYaOne
}
