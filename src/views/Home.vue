<template>
  <circuit />
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import circuit from '../components/circuit/index.vue';
export default defineComponent({
  name: "home",
  components:{
    circuit
  }
});
</script>

<style lang='scss' scoped>

</style>