
//元件
interface Imaterial{
  id:string;  //元器件的编号
  name:string;//元器件的名称
  uuid:string;//元器件的唯一标志
  position:number;//元器件的位置信息  1是中间 2是左边 3是右边
  specification:string;//前端显示的备注
  linkType:string;//主线 master  支线 branch
  type:string;//类型
  attribute:string;//描述
  desc:string;//备注
  withstandcurrent:string;//忽略
  ratedcurentvalue:number//额定电流
  accuracy:string;// 精确度
  length:string; //长度
  material?:Array<Imaterial>
  attach?:Array<Imaterial>
}
//普通柜子 
interface INormal{
  alias: string; //编号+柜子全名  前端界面显示 
  bid: string;//柜子机器编号
  cabinetnumber: string; //柜的编号
  creat_time: string;
  direction: string//柜子进线方向
  material:Array<Imaterial>;
  model: string; //柜子编号
  name: string; //柜子名
  number: string
  next?: Array<INormal>;
}
//特殊柜子
interface Iabn{
  Contex_box: Array<INormal>//联络柜的内容
  NextBid: string;
  NextFbn: string; //下一个柜子编号
  NextModel: string;//下一个柜子类型
  NextUuid: string;//下一个连接柜子的元器件的uuid
  PreBid: string;
  PreFbn: string;//柜子编号
  PreModel: string;//柜子类型
  PreUuid: string; //前一个连接柜子元器件的uuid
}

export {
  Imaterial,
  INormal,
  Iabn
}
