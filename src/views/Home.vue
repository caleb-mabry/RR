<template>
  <b-container fluid style="height: 100%">
    <b-row>
      <b-col class="d-none d-lg-block" style="padding-right: 0px; padding-left: 0px">
        <b-img class="testing" :src="require('../assets/RippingResource.jpg')" />
      </b-col>
      <b-col style="padding-left: 0px">
        <b-row class="removeMarginLeft" style="height: 5%;">
          <NavBar />
        </b-row>
        <b-row class="removeMarginLeft" style="height: 30%;">
          <h1 class="text-bottom">The Ripping Resource</h1>
        </b-row>
        <b-row class="information removeMarginLeft" style="height: 65%;">
          <p class="information_text">
            The Ripping Resource is a website where you can access High Definiton rips of Ace Attorney models and sprites to upgrade characters for Attorney Online. Depending on what Server you're from, some of the GIFs will have to be renamed. The point of this website is that, if you were to just download every single character in HD, your filesize would explode, which is why you are intended to pick which characters you wish to upgrade.
            <br />
            <br />It is recommended that you get a fullscreen theme for Attorney Online. You can also submit your own HD rips to help us grow. We're not just a HD rips website, however. Our Discord is a ripping community, where you can learn, share, and ask questions, and generally just hang out!
            <br />
            <br />We are affiliated with Team Turnabout, go check them out!
          </p>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/Navbar/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.testing {
  position: relative;
  width: 100%;
  height: 100%;
}
h1 {
  padding-left: 2%;
  font-size: 3vw;
}
.text-bottom {
  margin-top: auto;
  font-weight: bolder;
  text-decoration: underline;
  color: whitesmoke;
  position: relative;
  bottom: -15px;
}
p {
  padding: 2%;
  font-weight: bold;
}
.removeMarginLeft {
  margin-left: 0;
}
.information {
  background: linear-gradient(180deg, #050506 0%, rgba(27, 46, 255, 0) 100%),
    #11121d;
}
.information_text {
  font-size: 1.5vw;
  color: white;
}
.fill {
  min-height: 100%;
  height: 100%;
}
.mainImage {
  width: 100%;
  max-height: 100%;
}
</style>
