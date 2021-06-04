
import { line_length, shap_scale, line_width} from '@/config/shape&layout';
import { bd } from '@/utils/utils_drawShap';
import { drawLineTypeOne } from './baseMethods/drawLine';

interface ITS{
  x:number;
  y:number;
  ctx:CanvasRenderingContext2D;
}

function TestShap(pload:ITS){
  this.x = pload.x;
  this.y = pload.y;
  this.ctx = pload.ctx;
  this.r = shap_scale.middle;

  this.color = 'red';
  this.lineW = line_width().light;
  this.shortLine = line_length.line_extra_short;
}

TestShap.prototype.draw = function () {
  bd(this.ctx,this.color,this.lineW);
  drawLineTypeOne({
    x:this.x,
    y:this.y,
    lineD:'b',
    len:this.shortLine,
    ctx:this.ctx
  });

  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,this.y+this.r+this.shortLine,this.r,0,Math.PI*2);
  this.ctx.stroke();

  bd(this.ctx,this.color,this.lineW);
  drawLineTypeOne({
    x:this.x,
    y:this.y + this.r*2 + this.shortLine,
    lineD:'b',
    len:this.shortLine,
    ctx:this.ctx
  });
}

export {
  TestShap
}
