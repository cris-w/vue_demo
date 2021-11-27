<template>
  <div>
    <button>
      <router-link active-class="active" to="/home/news"> News </router-link>
    </button>
    <button>
      <router-link active-class="active" to="/home/message">
        Message
      </router-link>
    </button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
.acteve {
  background-color: skyblue;
}
</style>