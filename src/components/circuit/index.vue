<template>
  <canvas id="mycanvas" ref="mycanvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, nextTick, onBeforeMount, reactive, ref, toRefs} from "vue";
import { canvasMap } from '../../config/shape&layout';
import { drawCircuitOne } from './draw';
import { getStructure } from '@/netWork/structureNet';

export default defineComponent({
  name: "circuit",
  setup() {
    let mycanvas = ref(null);
    let state = reactive({
      testData:null
    })
    
    let X = 300;
    let Y = 300;
    let COLOR = 'red';
    //挂载前请求数据
    onBeforeMount(async ()=>{
      state.testData = await getStructure();
      console.log(state.testData);
    })
    //在nextTick中初始化，此时画布canvas已经渲染
    nextTick(()=>{
      let ctx = mycanvas.value.getContext('2d');
      mycanvas.value.width = canvasMap.MAP_WIDTH;
      mycanvas.value.height = canvasMap.MAP_HEIGHT;


    });

      
    return {
      ...toRefs(state),
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