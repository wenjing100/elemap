
//画布宽 高----画布可以更大，这样放大不容易失真
//最大值-----A3纸对应像素----->3508*4961---不够，需要翻倍
//最小值-----？* ？
//所有的上下左右规定：l:左   r:右   u:上   d:下
const w = 4961*2;
const h = 3508*2;
export const canvasMap = {
  MAP_WIDTH: w,
  MAP_HEIGHT: h,
  MAP_PADDING: w/16
}
//基准值----画布缩放时候修改
export const BASE_SIZE = Math.floor(canvasMap.MAP_WIDTH / 400);

// 绘图起始点
export const beginningPoint = {
  X: canvasMap.MAP_PADDING,
  Y: canvasMap.MAP_HEIGHT/5 - 2*BASE_SIZE
}


//图形大小基准值
export const shap_scale = {
  small: BASE_SIZE,
  middle: 1.5 * BASE_SIZE,
  big: 2 * BASE_SIZE,
  large: 3 * BASE_SIZE
}

interface IlinewFn{
  light: number;
  normal: number;
  bold: number;
}
//线粗细基准值 根据画布大小调整
export function line_width() :IlinewFn {
  let light = 1;
  if(canvasMap.MAP_WIDTH <= 1000){
    light = 1;
  }else if(canvasMap.MAP_WIDTH <= 2000){
    light = 2;
  }else if(canvasMap.MAP_WIDTH <= 3000){
    light = 3;
  }else{
    light = 4;
  }
  const normal = light*1.5;
  const bold = light*2;
  return { light, normal, bold }
}

//线的长度
export const line_length = {
  line_between_cabinet: 20*BASE_SIZE,//柜子间
  line_self: 3*BASE_SIZE,//线本身默认长
  line_between_cells: 4*BASE_SIZE,//不同元件间
  line_between_norm_abnorm: 8*BASE_SIZE,//normal和abnormal间距离
  line_extra_exShort:BASE_SIZE,//元件外接---超短
  line_extra_short: 1.5*BASE_SIZE,//元件外接线---短
  line_extra_long: BASE_SIZE*5, //元件外接线---长
  line_between_attach: 3*BASE_SIZE,//attach间距
}



//各种状态显示的颜色
export const statusColor = {
  base: '#fff',//基础色----白色
  normal: '#077e3c',//正常通电---绿色
  abnormal: '#df2911',//异常-超载---黄色
  warning: '#dfc011',//警告---红色
}