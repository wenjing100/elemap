<template>
  <canvas id="mycanvas" ref="mycanvas" ></canvas>
</template>

<script lang='ts'>
import {
  defineComponent,
  nextTick,
  reactive,
  ref,
  toRefs,
} from "vue";
import { canvasMap } from "../../config/shape&layout";
// import { drawCircuitOne } from "./draw";
// import { getStructure } from "@/netWork/structureNet";
import { IdrawData } from "@/typings/data_interface";
import { fall_melt_switch } from '@/components/circuit/drawShapes';
import { drawFletMelt } from '@/components/circuit/baseMethods/baseShapes';


export default defineComponent({
  name: "circuit",
  setup() {
    let mycanvas = ref(null);
    let state = reactive({
      testData: null as IdrawData,
    });

    let X = 300;
    let Y = 300;
    let COLOR = "red";

    //在nextTick中初始化+请求数据，此时画布canvas已经渲染
    nextTick(async () => {
      //请求结构数据
      // state.testData = (await getStructure()).data;

      // console.log(state.testData)

      let ctx = mycanvas.value.getContext("2d");
      mycanvas.value.width = canvasMap.MAP_WIDTH;
      mycanvas.value.height = canvasMap.MAP_HEIGHT;
      let ball = new fall_melt_switch({
        x:X,
        y:Y,
        color:COLOR,
        ctx,
        direction:'d',
        status:1
      });
      ball.draw();

      // drawCircuitOne(state.testData,ctx);

    });

    return {
      ...toRefs(state),
      mycanvas,
    };
  },
});
</script>

<style lang='scss' scoped>
#mycanvas {
  box-shadow: 0 0 10px gray;
  /* color:#1dc8fc; */
}
</style>