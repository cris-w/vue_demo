<template>
  <div class="container">
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count";
import Person from "./components/Person";
export default {
  name: "App",
  components: { Count, Person },
  mounted() {
    // console.log(this);
  },
};
</script>

<style scoped>
</style>