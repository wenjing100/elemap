//id:18 三绕组YYD_变压器
import { drawSparkThree, drawTriangle } from '../../baseMethods/baseShapes';
import { drawLineTypeOne } from '../../baseMethods/drawLine';
import { shap_scale,line_length,line_width } from '@/config/shape&layout';
import { IbianYaDouble } from '@/typings/shape_main_Interface';
import { bd } from '@/utils/utils_drawShap';

const a = line_width();

//从上定点开始绘制  不接地
//两个出口 nextPointA nextPointB 
function BianYaEight(pload:IbianYaDouble):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;
 
  this.r = shap_scale.big;
  this.shortline = line_length.line_extra_short;
  this.lineW = a.light;

  this.x1 = this.x - this.r*5/6;
  this.x2 = this.x + this.r*5/6;
  this.y1 = this.y + this.shortline + this.r;
  this.y2 = this.y + this.shortline + this.r + this.r*5/6*Math.sqrt(3);

  this.nextPointA = {x:this.x1,y:this.y2 + this.r + this.shortline};
  this.nextPointB = {x:this.x2,y:this.y2 + this.r + this.shortline};

}

BianYaEight.prototype.draw = function () {
 
  drawLineTypeOne({
    x:this.x,
    y:this.y,
    color:this.color,
    ctx:this.ctx,
    len:this.shortline,
    lineD:'b',
    lineWidth:this.lineW
  });

  //第一个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,this.y1,this.r,0,Math.PI*2);
  this.ctx.stroke();
  //第二个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x1,this.y2,this.r,0,Math.PI*2);
  this.ctx.stroke();
  //第三个圆
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x2,this.y2,this.r,0,Math.PI*2);
  this.ctx.stroke();
  
  drawSparkThree({
    x:this.x,
    y:this.y1,
    color:this.color,
    ctx:this.ctx,
    len:this.r/2
  });

  drawSparkThree({
    x:this.x1,
    y:this.y2,
    color:this.color,
    ctx:this.ctx,
    len:this.r/2
  });

  drawTriangle({
    x:this.x2,
    y:this.y2 + Math.sqrt(3)/5*this.r,
    color:this.color,
    ctx:this.ctx,
    len:this.r
  });

  drawLineTypeOne({
    x:this.x1,
    y:this.y2 + this.r,
    color:this.color,
    ctx:this.ctx,
    len:this.shortline,
    lineD:'b',
    lineWidth:this.lineW
  });
  drawLineTypeOne({
    x:this.x2,
    y:this.y2 + this.r,
    color:this.color,
    ctx:this.ctx,
    len:this.shortline,
    lineD:'b',
    lineWidth:this.lineW
  });

}

export {
  BianYaEight
}
