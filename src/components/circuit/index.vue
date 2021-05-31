<template>
  <canvas id="mycanvas" ref="mycanvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, nextTick, ref} from "vue";
import { canvasMap } from '../../config/shape&layout';
import { EleEnter } from './drawShapes/1电源接入点';
export default defineComponent({
  name: "circuit",
  setup() {
    let mycanvas = ref(null);
    //在nextTick中初始化，此时画布canvas已经渲染
    nextTick(()=>{
      let ctx = mycanvas.value.getContext('2d');
      mycanvas.value.width = canvasMap.MAP_WIDTH;
      mycanvas.value.height = canvasMap.MAP_HEIGHT;

      let ball = new EleEnter({
        x:100,
        y:100,
        color:'black',
        ctx:ctx,
        direction:'tb'
      });
      ball.draw();
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
}
</style>