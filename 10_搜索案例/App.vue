<template>
  <div>
    <Search />
    <List />
  </div>
</template>

<script>
import Search from "./components/Serach";
import List from './components/List'
export default {
  name: "App",
  components: {
    Search,
    List,
  },
};
</script>

<style scoped>
</style>