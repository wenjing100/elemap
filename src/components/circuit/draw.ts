
import { TestShap } from './myTest';//测试用的模拟图形
import { EleEnter } from '../circuit/drawShapes/1电源接入点';
import { drawLineTypeOne } from './baseMethods/drawLine';
import { beginningPoint } from '@/config/shape&layout';
import { IdrawData, Imaterial, INormal } from '@/typings/data_interface';
import { line_length} from '@/config/shape&layout';


interface Ip{
  x:number,
  y:number
}
function drawCircuitOne(data:IdrawData,ctx:CanvasRenderingContext2D){

  // let nexts = [];//next维护数组
  const normal = data.Normal.material;
  const DD = 'd';//起始柜子原件向下排列
  const nextDirection = data.Normal.direction == 'left'?'right':'left';
  let point = {x:beginningPoint.X,y:beginningPoint.Y};//Eenter.nextPoint;
  let Npoint :Ip;


  //先遍历 柜子内部----得到下一个柜子入口坐标
  normal.forEach(item=>{
    const Eenter = new EleEnter({
      x:point.x,
      y:point.y,
      ctx,
      color:easyColor()
    });
    point = Eenter.nextPoint;
    Eenter.draw();
    const p = getInList(item.material,point,ctx,DD);
    Npoint = p;
  });
  //遍历 next
  if(data.Normal.next){
    console.log(data.Normal.next)
    goToNext(data.Normal.next,Npoint,nextDirection,ctx);
  }

}
//next
function goToNext (nextList:Array<INormal>,point:Ip,goDirection:string,ctx:CanvasRenderingContext2D) {
  const myPoint = point;
  let p;
  //画一条连接两个柜子的线
  p = drawLineTypeOne({
    x:myPoint.x,
    y:myPoint.y,
    len:line_length.line_between_cabinet,
    lineD:goDirection == 'left'? 'l':'r',
    color: easyColor(),
    lineCap:'round',
    ctx,
  });
  //调用单个柜子
  nextList.forEach(normal=>{

    const DD = normal.direction;
    normal.material.forEach(item=>{
      const nnpp = getInList(item.material,p,ctx,DD);
      p = nnpp;
    })

    // if(normal.next){
    //   for(let i = 0; i< normal.next.length; i++){
    //     const p2 = goToNext(normal.next,p,normal.next[i].direction,ctx);
    //     p = p2;
    //   }
    // }
  })
  return p
}
//单个柜子
function getInList(list:Array<Imaterial>,point:Ip,ctx:CanvasRenderingContext2D,showDirection:string){
  let INpoint;
  for(let i = 0; i < list.length; i++ ){
    //画线时候的方向和 线长
    let lineDirection = showDirection;
    let lineL = line_length.line_extra_short;
    INpoint = point;

    if(list[i].position == 2){//左边
      lineDirection = 'l';
      lineL = line_length.line_between_cells;
    }else if(list[i].position == 3){//右边
      lineDirection = 'r';
      lineL = line_length.line_between_cells;
    }
    if(parseInt(list[i].id) < 12){
      const pp = drawLineTypeOne({
        x:INpoint.x,
        y:INpoint.y,
        len:lineL,
        lineD:lineDirection,
        color: easyColor(),
        lineCap:'round',
        ctx,
      });
      INpoint = pp;
    }else{
      //判断下什么形状的 画的有问题------完成后删除
      let coo = 'red';
      if(parseInt(list[i].id) == 50){
        coo = 'green';
      }
      if(parseInt(list[i].id) == 56){
        coo = 'black';
      }
      if(parseInt(list[i].id) == 42){
        coo = 'blue';
      }
      const shap = new TestShap({
        x:INpoint.x,
        y:INpoint.y,
        ctx,
        color:coo,
        D:showDirection
      });
      shap.draw();
      INpoint = shap.nextPoint;
    }
    if(list[i].material){
      INpoint = getInList(list[i].material,INpoint,ctx,showDirection);
    }
  }
  return INpoint
}

//随机 简单颜色
function easyColor () {
  const arr = ['pink','red','blue','black','green','tomato','purple','yellow'];
  arr.sort(()=>Math.random() - 0.5);
  return arr[0];
}


export {
  drawCircuitOne
}
