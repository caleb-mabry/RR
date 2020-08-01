<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Navbar/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
#app {
  height: 100%;
  background: linear-gradient(180deg, rgba(2, 55, 241, 0) 0%, #2d2c2c 93.23%),
    #8c9cef;
  width: 100%;
  position: relative;
}
html,
body {
  position: relative;
  height: 100%;
}
.navbar {
  background-color: #4c2b2b;
}
</style>
