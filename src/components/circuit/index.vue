<template>
  <canvas id="mycanvas" ref="mycanvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, nextTick, ref} from "vue";
import { canvasMap } from '../../config/shape&layout';
import { HighV_mainLine } from './drawShapes/6高压母线';

export default defineComponent({
  name: "circuit",
  setup() {
    let mycanvas = ref(null);
    //在nextTick中初始化，此时画布canvas已经渲染
    let X = 300;
    let Y = 300;
    let COLOR = 'red';
    nextTick(()=>{
      let ctx = mycanvas.value.getContext('2d');
      mycanvas.value.width = canvasMap.MAP_WIDTH;
      mycanvas.value.height = canvasMap.MAP_HEIGHT;
      
      let ball = new HighV_mainLine({x:X,y:Y,color:COLOR,ctx,direction:'d'})
      let ball2 = new HighV_mainLine({x:ball.nextPoint.x,y:ball.nextPoint.y,color:'blue',ctx,direction:'l'});
      ball.draw();
      ball2.draw();
    })
      
    return {
      mycanvas
    }
  },
});
</script>

<style lang='scss' scoped>
#mycanvas{
  box-shadow: 0 0 10px gray;
  /* color:#fff; */
}
</style>