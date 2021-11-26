<template>
  <div class="container">
    <Count />
  </div>
</template>

<script>
import Count from './components/Count'
export default {
  name: "App",
  components: {Count},
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped>
</style>