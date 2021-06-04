
import { ImainBase } from "@/typings/main_Interface"
import { line_length, shap_scale, line_width } from '@/config/shape&layout';
import { bd } from '@/utils/utils_drawShap';

const a = line_width();
//电压互感器14
function EleDianYaHuGan(pload: ImainBase) {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;

  this.r = shap_scale.middle;
  this.lineLen = line_length.line_extra_short;
  this.lineW = a.light;

}

EleDianYaHuGan.prototype.draw = function () {
  const y1 = this.y + this.lineLen + this.r;//第一个圆
  const y2 = y1 + this.r*3/2;//第二个圆

  bd(this.ctx,this.color,this.lineW);
  this.ctx.moveTo(this.x,this.y);
  this.ctx.lineTo(this.x,this.y + this.lineLen);
  this.ctx.stroke();

  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y1,this.r,0,Math.PI*2);
  this.ctx.stroke();
  bd(this.ctx,this.color,this.lineW);
  this.ctx.arc(this.x,y2,this.r,0,Math.PI*2);
  this.ctx.stroke();

}

export {
  EleDianYaHuGan
}
