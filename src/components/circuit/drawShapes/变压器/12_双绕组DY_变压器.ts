//id:12 双绕组DD_变压器 分左右
import { drawSparkThree, drawTriangle, drawLineGround } from '../../baseMethods/baseShapes';
import { drawLineTypeOne } from '../../baseMethods/drawLine';
import { shap_scale,line_length,line_width } from '@/config/shape&layout';
import { IbianYaDouble } from '../../main_Interface';
import { bd } from '@/utils/utils_drawShap';

const a = line_width();

//从上定点开始绘制
//两个出口 nextPointMain nextPointSide
function BianYaFour(pload:IbianYaDouble):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;
  this.direction = pload.direction || 'l';//默认  l

  this.r = shap_scale.large;
  this.shortline = line_length.line_extra_short;
  this.lineW = a.light;

  this.sideX = this.x - this.r/2;
  const yy = this.y + 2*this.shortline + this.r*7/4;
  this.nextPointMain = {x:this.x,y:yy}//主出口
  this.nextPointSide = {x:this.sideX,y:yy}//零线出口

  if(this.direction == 'r'){
    this.nextPointSide.x = this.x + this.r/2;
    this.sideX = this.x + this.r/2;
  }
  
}

BianYaFour.prototype.draw = function () {

  const y1 = this.y + this.shortline + this.r;//第一个圆心
  const y2 = y1 + this.r*3/2;//第二个圆心
  const y4 = y2 + this.r;//最底部

  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,this.y);
  this.ctx.lineTo(this.x,this.y + this.shortline);
  this.ctx.stroke();
  //第一个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y1,this.r,0,Math.PI*2);
  this.ctx.stroke();

  drawTriangle({
    x:this.x,
    y:y1,
    len:this.r,
    color:this.color,
    ctx:this.ctx
  });

  //第二个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y2,this.r,0,Math.PI*2);
  this.ctx.stroke();

  drawSparkThree({
    ctx:this.ctx,
    x:this.x,
    y:y2,
    len:this.r/2,
    color:this.color
  });

  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,y4);
  this.ctx.lineTo(this.x,y4 + this.shortline);
  this.ctx.stroke();

  //画接地线
  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,y2);
  this.ctx.lineTo(this.x - this.r*2,y2);
  this.ctx.lineTo(this.x - this.r*2,y2 + this.r);
  this.ctx.stroke();
  drawLineGround({
    x:this.x - this.r*2,
    y:y2 + this.r,
    len:this.r/2,
    ctx:this.ctx,
    color:this.color
  });
  //零线出口
  bd(this.ctx,this.color,this.lineW);
  drawLineTypeOne({
    x:this.sideX,
    y:y2,
    len:this.r + this.shortline,
    ctx:this.ctx,
    color:this.color,
    lineD:'b'
  })

}


export {
  BianYaFour
}
