<template>
  <div class="container">
    <main class="card">
      <div class="left">
        <img :src="require('../assets/main.webp')" id="image" alt="" srcset="">
      </div>
      <div class="right">
        <div class="right-top">
          <NavBar />
        </div>
        <div class="right-middle">
          <h1 id="title">The Ripping Resource</h1>
        </div>
        <div class="right-bottom">
          <p>The Ripping Resource is a website where you can access high definition (HD) rips of Ace Attorney models and sprites to upgrade characters for Attorney Online, although these rips are just as good for making fan videos, and anything you could use them for! Depending on what server you're from, some of the assets will have to be renamed, since not all names work from server to server. The purpose of this website is that, if you were to just download every single character in HD, your filesize would explode, which is why you are intended to pick which characters you wish to upgrade. And if you want to upgrade all of them, provided you have the space, go for it!</p>
          <p>We recommend that you get a fullscreen (or at least larger) theme for Attorney Online. You can also submit your own HD rips to help us grow. We're not just an HD rips site, however. Our Discord server is a ripping community, where you can learn, share, and ask questions, and generally just hang out!</p>
          <p>
            We are affiliated with
            <a
              href="https://www.youtube.com/teamturnabout"
              id="turnabout-link"
            >Team Turnabout,</a>
            go check them out!
          </p>
        </div>
      </div>
    </main>
  </div>
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
main {
  display: flex;
  width: 80%;
  height: fit-content;
  border-radius: 5px;
  background: rgb(110, 122, 195);
  background: linear-gradient(
    90deg,
    rgba(110, 122, 195, 1) 0%,
    rgba(77, 85, 138, 1) 48%,
    rgba(54, 60, 96, 1) 100%
  );
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 20px 15px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;

}
.left {
  width: 50%;
}
.right {
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
}
.text {
  padding: 2%;
}
.right-top {
  height: fit-content;
}
#image {
  height: auto;
  width: 100%;
}
p {
  font-size: 16px;
}
.right-middle {
  margin: 0px;
  padding: 3%;
  position: relative;
    background: rgb(110, 122, 195);
  background: linear-gradient(
    90deg,
    rgba(110, 122, 195, 1) 0%,
    rgba(77, 85, 138, 1) 48%,
    rgba(54, 60, 96, 1) 100%
  );
  width: auto;
  flex-wrap: wrap;
}
#title {
  color: whitesmoke;
  margin: 0px;
  padding: 0px;
  position: relative;
  text-decoration: underline;
  bottom: 0px;
  font-size: 2.6vw;
  flex-wrap: wrap;
}
.right-bottom,
.right-middle {
  align-items: center;
  padding: 3%;
}
.right-bottom {
  height: auto;
  color: white;
  height: 100%;
  position: relative;
  background: rgb(18, 24, 31);
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
}
#turnabout-link {
  text-decoration: underline;
  padding: 0px;
  border-radius: 0px;
  font-size: inherit;
  background-color: inherit;
}
#turnabout-link:hover {
  opacity: 0.8;
}
@media only screen and (max-width: 1339px) {
  main {
    width: 100%;
    height: fit-content;
  }
  .right-middle {
    text-align: center;
    height: fit-content;
    opacity: 0.8;
  }
  .right-bottom {
    height: fit-content;
  }
  #title {
    font-size: 40px;
  }
  #image {
    display: none;
  }
  .left {
    display: none;
  }
  .right {
    background-color: #1c252f;
    color: white;
    width: 100%;
  }
  p {
    font-size: 18px;
  }
}
</style>
