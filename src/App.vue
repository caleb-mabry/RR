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
html, body, #app {
  box-sizing: border-box;
  height: 100%;
    transition: 0.3s;
   background: rgb(87,123,173);
background: radial-gradient(circle, rgba(87,123,173,1) 65%, rgba(53,57,86,1) 100%); 
}
.navbar {
  background-color: #4c2b2b;
}
</style>
