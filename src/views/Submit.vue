<template>
  <div>
    <router-link to="/">Back</router-link>
    <div class="container">
      <p>This rule is a MUST for submitting rips here:</p>
      <p>
        PC Trilogy, AAI1HD, AAI2HD, AJHD and 3D Rips have to be 1024x768 as GIF,
        1200x720 as WEBP.
      </p>
      <p>
        Alternatively You can submit your MAX files/PSDs so that they can be
        rendered at these resolutions and formats if you cannot do so yourself.
      </p>

      <p>
        The following rules are a "guideline" to making rips for this site and,
        while they're optional, they're how we do things here, and following
        them can avoid a lot of problems down the line:
      </p>
      <ol>
        <li>When ripping, make a .PSD or .MAX file for each animation.</li>
        <li>
          Run all spritesheets of 2D characters through Waifu2x - keep them in
          the same resolution, but apply Medium noise reduction. This is extra
          optional, as sometimes this can produce an adverse effect.
        </li>
        <li>
          When ripping Trilogy PC, AAI1HD, AAI2HD or AJHD, rip in base
          resolution (seen below), and then resize to 1024x768 before exporting.
          Keep the .PSD in the base resolution (1365x768 for AAI1HD, AAI2HD,
          AJHD, and 2293x1290 for PC Trilogy).
        </li>
        <li>
          When ripping in 3D, render individual frames out in 1920x1080 or
          1365x768. GIFs should be downscaled to 1024x768 (4:3) and WEBPs should
          be downscaled to 1200x720 (5:3). Alternatively, you just submit the
          frames and let us handle it.
        </li>
        <li>
          For 3D rips, upscale all textures 2x using Waifu2x. If you do not do
          this, we may not accept your rip. If you decide not to, please provide
          the .MAX files so that we can add them ourselves.
        </li>
        <li>
          If possible, include .MAX and .PSD files for 2D rips in your
          submission. 8. When making 1024x768 GIFs for us, please use the
          ImageMagick script (made by CaptainSwag101) as it produces much
          cleaner results than Photoshop. For WEBP, use the ffmpeg script.
        </li>
      </ol>
      <p>
        The reason we request for you to keep the .MAX and .PSDs for your rips
        is because TNC and VLS use a different aspect ratio and image format,
        and if you don't have certain software and plugins, you cannot make the
        needed files. That, and if any errors are caught, we can fix them
        quickly if you're unavailable.
      </p>
      <router-link to="Submit/Form">Submit</router-link>
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
  display: block;
}
</style>