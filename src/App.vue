<template>
  <div id="app">
          <transition
        name="fade"
        mode="out-in"
      >
    <router-view />
          </transition>
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
font-family: MyWebFont, "Helvetica", "Arial";
}
#app {
  height: 100%;
}
@font-face {
  font-display: swap;
  font-family: 'MyWebFont';
  src: url('./assets/Suburga2.ttf'); /* IE9 Compat Modes */
}
.navbar {
  background-color: #4c2b2b;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
