
//画布宽高  A3纸对应像素----->4200*2970
export const canvasMap ={
  MAP_WIDTH:4200,
  MAP_HEIGHT:2970,
}

//图形大小基准值
/* 半径
s-圆：1 BASE_SIZE
m1-圆 1.5 BASE_SIZE
m2-圆 2 BASE_SIZE
l-圆  2.5 BASE_SIZE
 */
export const BASE_SIZE = 8;


//图形缩放比例
export const SHAPE_SCALE = 1;


//各种状态显示的颜色
export const statusColor = {
  normal:'#077e3c',//正常通电
  abnormal:'#df2911',//异常-超载
  warning:'#dfc011',//警告
}