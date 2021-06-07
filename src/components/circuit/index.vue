<template>
  <canvas id="mycanvas" ref="mycanvas" ></canvas>
</template>

<script lang='ts'>
import {
  defineComponent,
  nextTick,
  onMounted,
  onRenderTriggered,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import { canvasMap } from "../../config/shape&layout";
import { drawCircuitOne } from "./draw";
import { getStructure } from "@/netWork/structureNet";
import { IdrawData } from "@/typings/data_interface";

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
      state.testData = (await getStructure()).data;

      // console.log(state.testData)

      let ctx = mycanvas.value.getContext("2d");
      mycanvas.value.width = canvasMap.MAP_WIDTH;
      mycanvas.value.height = canvasMap.MAP_HEIGHT;
      drawCircuitOne(state.testData, ctx);
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