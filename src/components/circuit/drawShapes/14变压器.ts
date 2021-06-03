
import { drawSparkThree,drawTriangle } from '../baseMethods/baseShapes';
import { shap_scale,line_length,line_width } from '@/config/shape&layout';
import { ImainBase } from '../main_Interface';

const a = line_width();

//变压器类型1  从上定点开始绘制，返回值坐标 下出口
function BianYaOne(pload:ImainBase):void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;

  this.r = shap_scale.large;
  this.shortline = line_length.line_extra_short;
  this.lineW = a.light;
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
  //辅助
  function bd(ctx:CanvasRenderingContext2D,c:string,w:number){
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = w;
  }
}


export {
  BianYaOne
}
