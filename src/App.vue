<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);

// export default defineComponent({
//   setup() {
//     const counter = ref(0);
//     const increase = () => {
//       counter.value++;
//     };
//     return {
//       counter,
//       increase,
//     };
//   },
// });
</script>

<template>
  <div class="wrapper">
    <h1>Counter: {{ counter }}</h1>
    <button @click="counter++">+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
