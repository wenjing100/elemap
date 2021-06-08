
import { TestShap } from './myTest';//测试用的模拟图形
import {//元器件方法
  EleEnter, 
  HighV_mainLine, 
  singleDianliuHuGan,
  doubleDianliuHuGan,
  singleDianliu_support,
  doubleDianliu_support,
} from '../circuit/drawShapes';
import { drawLineTypeOne } from './baseMethods/drawLine';
import { beginningPoint } from '@/config/shape&layout';
import { IdrawData, Imaterial, INormal } from '@/typings/data_interface';
import { line_length, statusColor } from '@/config/shape&layout';


interface Ip {
  x: number,
  y: number
}

const status = statusColor.normal;

function drawCircuitOne(data: IdrawData, ctx: CanvasRenderingContext2D) {
  console.log(data);
  const normal = data.Normal;
  // const abnormal = data.Abnormal;
  const beginDirection = 'd';//起始方向
  let point = { x: beginningPoint.X, y: beginningPoint.Y };//Eenter.nextPoint;
  const Eenter = new EleEnter({
    x: point.x,
    y: point.y,
    ctx,
    color: easyColor(),
    direction: beginDirection
  });
  point = Eenter.nextPoint;
  Eenter.draw();
  //绘制normal
  drawNormal(normal, ctx, point, beginDirection);

  //绘制abnormal

}
//draw----Normal
function drawNormal(normalData: INormal, ctx: CanvasRenderingContext2D, point: Ip, nextDirection: string) {
  let _point: Ip = null;
  const normal = normalData.material;
  const next = normalData.next;
  const cabinetPosition = normalData.direction == 'left' ? 'r' : 'l';
  normal.forEach(item => {
    _point = getInList(item.material, point, ctx, nextDirection)
  });
  //遍历 next
  if (next) {
    nextDirection = nextDirection == 'd' ? 'u' : 'd';
    //每个柜子间需要一条水平线
    _point = drawLineTypeOne({
      x: _point.x,
      y: _point.y,
      ctx,
      lineD: cabinetPosition,
      len: line_length.line_between_cabinet
    })
    next.forEach(n => {
      _point = drawNormal(n, ctx, _point, nextDirection);
    })

  }
  return _point;
}

//单个柜子
function getInList(list: Array<Imaterial>, point: Ip, ctx: CanvasRenderingContext2D, showDirection: string) {
  let INpoint: Ip = null;
  const len = list && list.length;
  for (let i = 0; i < len; i++) {
    //画线时候的方向和 线长
    let lineDirection = showDirection;
    let lineL = line_length.line_extra_short;
    INpoint = point;

    if (list[i].position == 2) {//左边
      lineDirection = 'l';
      lineL = line_length.line_between_cells;
    } else if (list[i].position == 3) {//右边
      lineDirection = 'r';
      lineL = line_length.line_between_cells;
    }

    if (parseInt(list[i].id) < 12) {
      if (list[i].attach) {
        const x1 = INpoint.x;
        const y1 = INpoint.y;
        for (let k = 0; k < list[i].attach.length; k++) {
          const linePoint = {
            x: x1,
            y: y1
          }
          let shap;
          const iid = parseInt(list[i].attach[k].id);

          switch (list[i].attach[k].position) {
            case 2:
              linePoint.x = linePoint.x - line_length.line_between_attach;
              break;
            case 3:
              linePoint.x = linePoint.x + line_length.line_between_attach;
              break;
            default:
              break;
          }
          //绘制attach
          const _config = {
              x:linePoint.x,
              y:linePoint.y,
              color:status,
              ctx,
              direction:showDirection
            }
          if(iid >=20 && iid <= 22){
            shap = new singleDianliuHuGan(_config);
          }else if( iid > 22 && iid <= 25){
            shap = new doubleDianliuHuGan(_config);
          }else if( iid > 25 && iid <= 28){
            shap = new singleDianliu_support(_config);
          }else if( iid > 28 && iid <= 31){
            shap = new doubleDianliu_support(_config);
          }
          shap.draw();
          if (list[i].attach[k].position == 1) {
            INpoint = shap.nextPoint;
          }
        }
      }
      const line = new HighV_mainLine({
        x: INpoint.x,
        y: INpoint.y,
        direction: lineDirection,
        color: status,
        ctx,
      });
      line.draw();
      INpoint = line.nextPoint;
    } else {
      const shap = new TestShap({
        x: INpoint.x,
        y: INpoint.y,
        ctx,
        D: showDirection
      });
      shap.draw();
      INpoint = shap.nextPoint;
    }
    if (list[i].material) {
      INpoint = getInList(list[i].material, INpoint, ctx, showDirection);
    }
  }
  return INpoint
}

//随机 简单颜色
function easyColor() {
  const arr = ['pink', 'red', 'blue', 'black', 'green', 'tomato', 'purple', 'yellow'];
  arr.sort(() => Math.random() - 0.5);
  return arr[0];
}


export {
  drawCircuitOne
}
