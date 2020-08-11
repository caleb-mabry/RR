<template>
<nav>
  <ul>
    <li><router-link to="/">Characters</router-link></li>
        <li><router-link to="/">Requests</router-link></li>
        <li><router-link to="/">Report Issue</router-link></li>
        <li><router-link to="/">Discord</router-link></li>
        <li><router-link to="/">Submit Your Rip</router-link></li>
  </ul>
</nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  width: 100%;  
  padding-top: 2%;
  padding-bottom: 2%;
   background: #eee9eb;
}
a {
    text-decoration: none;
    text-align: center;
    padding: 5px 16px;
    background-color: #3c4667;
    border-radius: 3px;
    color: #edf0f3;
    transition: all .2s;
    font-size: 1.2vw;
}
a:hover {
  font-size:1.3vw;
  background-color: #567aab;
}
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: center;
}
li {
  margin: 2%;
}
</style>