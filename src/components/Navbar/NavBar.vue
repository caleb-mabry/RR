<template>
  <b-navbar>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="justify-content-around" style="width: 100%;">
        <router-link to="/">Characters</router-link>
        <router-link to="/">Requests</router-link>
        <router-link to="/">Report Issue</router-link>
        <router-link to="/">Discord</router-link>
        <router-link to="/">Submit Your Rip</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
nav {
  width: 100%;
}
.navbar-nav a {
  text-decoration: none;
  color: white;
}
</style>