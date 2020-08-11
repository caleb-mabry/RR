<template>
<nav>
  <ul>
    <li><router-link to="/Characters">Characters</router-link></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfnuKxEGUK6SheuUp6jfDWi09swRiSBnRdSFN4KIw42jtg1DQ/viewform?usp=sf_link">Requests</a></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdaCs3t7ayFrfDKa-E0Af0TFH5YoHwNU90i2iJ9gm_00IjwmA/viewform?usp=sf_link">Report Issue</a></li>
        <li><a href="https://discord.com/invite/S8zyJ84">Discord</a></li>
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