<template>
  <canvas id="mycanvas"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  name: "home",
  setup() {
    let HEIGHT = 500;
    let WIDTH = 500;
    //在onMounted中初始化
    onMounted(()=>{
      //@ts-ignore
      let mycanvas:HTMLCanvasElement = document.getElementById('mycanvas');
      let ctx = mycanvas.getContext('2d');
      mycanvas.width = HEIGHT;
      mycanvas.height = WIDTH;
    });
  },
});
</script>

<style lang='scss' scoped>
#mycanvas{
  box-shadow: 0 0 10px gray;
}
</style>