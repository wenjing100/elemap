<template>
  <canvas id="mycanvas" ref="mycanvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, nextTick, ref} from "vue";
import { canvasMap } from '../../config/shape&layout';
import { drawFork } from './baseMethods/baseShapes';

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
      drawFork({x:X,y:Y,w:100,color:COLOR,ctx});

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