<template>
  <div>
      
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (users) => {
      console.log("List组件", users);
      this.users = users;
    });
  },
};
</script>

<style scoped>
</style>