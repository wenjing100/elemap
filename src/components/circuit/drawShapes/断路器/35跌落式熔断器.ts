

import { shap_scale, line_width, line_length } from '@/config/shape&layout';
import { IfallMeltSwitch } from '@/typings/shape_main_Interface';
import { drawFletMelt, drawJustRect } from '@/components/circuit/baseMethods/baseShapes';
import { drawLineTypeOne } from '@/components/circuit/baseMethods/drawLine';

const scale = shap_scale.big;
const a = line_width();

function fall_melt_switch(pload: IfallMeltSwitch): void {
  this.x = pload.x;
  this.y = pload.y;
  this.color = pload.color;
  this.ctx = pload.ctx;
  this.direction = pload.direction || 'd';
  this.status = pload.status;
  this.lineW = a.light;
  this.shortLen = line_length.line_extra_short;
  this.middlePart = 4 / 3 * scale;
  this.h = scale;
  this.w = this.h / 3;
  const ll = this.middlePart + 2 * this.shortLen;

  this.y0 = this.direction == 'd' ? this.y : this.y - ll;

  this.nextPoint = {
    x: this.x,
    y: this.direction == 'd' ? this.y + ll : this.y - ll,
  }
}

fall_melt_switch.prototype.draw = function () {
  const y1 = this.y0 + this.shortLen;
  const y2 = this.y0 + this.shortLen + 4 / 3 * scale;
  drawLineTypeOne({
    x: this.x,
    y: this.y0,
    len: this.shortLen,
    ctx: this.ctx,
    lineD: this.direction,
    color: this.color
  });
  drawLineTypeOne({
    x: this.x - this.w / 2,
    y: y1,
    len: this.w,
    ctx: this.ctx,
    lineD: 'r',
    color: this.color
  });
  //中间部分----
  if (this.status == 1) {
    drawJustRect({
      x: this.x,
      y: y2,
      color: this.color,
      ctx: this.ctx,
      h: this.middlePart
    })
  } else {
    drawFletMelt({
      x: this.x,
      y: y2,
      color: this.color,
      ctx: this.ctx,
      h: this.h
    });
  }
  //下出口
  this.ctx.beginPath();
  this.ctx.arc(this.x, y2, this.lineW * 0.7, 0, Math.PI * 2);
  this.ctx.stroke();
  drawLineTypeOne({
    x: this.x,
    y: y2,
    len: this.shortLen,
    ctx: this.ctx,
    lineD: this.direction,
    color: this.color
  });
}

export {
  fall_melt_switch
}