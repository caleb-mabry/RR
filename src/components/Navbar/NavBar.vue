<template>
  <nav>
    <ul>
      <li>
        <router-link to="/Characters">Characters</router-link>
      </li>

      <li>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdaCs3t7ayFrfDKa-E0Af0TFH5YoHwNU90i2iJ9gm_00IjwmA/viewform?usp=sf_link"
          >Report Issue</a
        >
      </li>
      <li>
        <a href="https://discord.gg/efp3f9q8RE">Discord</a>
      </li>
      <li>
        <a href="https://forms.gle/78DSWT9M4oCzHwFQA">Staff Application</a>
      </li>
      <li>
        <router-link to="/Submit">Submit Your Rip</router-link>
      </li>
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
  transition: all 0.2s;
  font-size: 1.2vw;
}
a:hover {
  padding: 8px 16px;
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
@media only screen and (max-width: 918px) {
  a {
    font-size: 16px;
  }
  a:hover {
    font-size: 18px;
    background-color: #567aab;
  }
}
</style>