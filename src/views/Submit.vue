<template>
<div>
<router-link to="/">Back</router-link>
  <div class="container">
    <p>So you wish to submit your rip for this website. First off, thank you for considering to support us! We're still somewhat struggling to get active rippers and we appreciate the help. Also, submitting rips will get you a "Ripper" role on our Discord that will get you access to exclusive ripper channels.template</p>
    <p>These rules are a MUST for submitting 2D rips here:</p>
    <ol>
      <li>AAI1HD, AAI2HD, AJHD Rips have to be 1024x768.</li>
      <li>Trilogy HD rips have to be 1720x1290.</li>
    </ol>

    <p>These rules are a MUST for submitting 3D rips here:</p>
    <ul>
      <li>MUST submit: 1365x768 (min. res) PNG frames -> (alternative, only if your PC cannot render at that res or you cannot upload all the frames because of filesize) MAX files</li>
      <li>CAN submit: 1024x768 (exact res) GIFs</li>
      <li>CAN submit: 1200x720 (exact res) WEBPs</li>
    </ul>
    <p>The following rules are a "guideline" to making rips for this site, while they're optional, that's how we do it, and that's how to avoid a lot of problems down the line:</p>
    <ol>
      <li>When ripping in 2D, make a .psd file for each animation.</li>
      <li>When ripping AAI1HD, AAI2HD or AJHD, rip in 1365x768, and then resize to 1024x768 before exporting. Keep the .PSD in 1365x768.</li>
      <li>When ripping Steam Trilogy HD, rip in 2293x1290, and then resize to 1720x1290 before exporting. Keep the .PSD in 2293x1290.</li>
    </ol>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdrB8r_qtHRB1PgqbKVzoRPpKU2o6GE85zN8pH0rV3r6vhroQ/viewform?usp=sf_link">Submit</a>
  </div>
</div>

</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 75%;
  padding: 5%;
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
  justify-content: space-around;
  margin: auto;
  color: white;
  
}
button {
    background-color: transparent;
}
a {
}
ul {
    list-style-type: disc;
    display: block
}
</style>