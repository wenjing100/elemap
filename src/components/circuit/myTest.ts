
import { line_length, shap_scale, line_width} from '@/config/shape&layout';
import { bd } from '@/utils/utils_drawShap';
import { drawLineTypeOne } from './baseMethods/drawLine';

interface ITS{
  x:number;
  y:number;
  ctx:CanvasRenderingContext2D;
  color?:string;
  D:string;//方向  u 上 d  下
}

function TestShap(pload:ITS){
  this.x = pload.x;
  this.y = pload.y;
  this.ctx = pload.ctx;
  this.D = pload.D;
  this.color = pload.color?pload.color:'red';
  
  this.r = shap_scale.middle;
  this.lineW = line_width().light;
  this.shortLine = line_length.line_extra_short;
  this.x0 = this.x;
  this.y0 = this.D == 'u'?this.y-this.r-this.shortLine:this.y+this.r+this.shortLine;
  this.y1 = this.D == 'u'?this.y-2*this.r-this.shortLine:this.y+2*this.r+this.shortLine;
  this.y2 = this.D == 'u'?this.y-2*this.r-2*this.shortLine:this.y+2*this.r+2*this.shortLine;
  this.nextPoint = {
    x:this.x,
    y:this.y2
  }
}

TestShap.prototype.draw = function () {
  bd(this.ctx,this.color,this.lineW);
  drawLineTypeOne({
    x:this.x,
    y:this.y,
    lineD:this.D,
    len:this.shortLine,
    ctx:this.ctx
  });

  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x0,this.y0,this.r,0,Math.PI*2);
  this.ctx.stroke();

  bd(this.ctx,this.color,this.lineW);
  drawLineTypeOne({
    x:this.x,
    y:this.y1,
    lineD:this.D,
    len:this.shortLine,
    ctx:this.ctx
  });
}

export {
  TestShap
}
