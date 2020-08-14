<template>
  <div>
    <router-link :to="'/Characters/'+$route.params.characterEpisode">Back</router-link>

    <div class="outer-container">
      <div class="container">
        <div class="left">
          <h1 id="character-name">{{character}}</h1>
          <img :src="fullbody" alt id="character-image" />
          <h1 id="ripper-name">Ripped By: {{ripped}}</h1>
        </div>
        <div class="right">
          <p id="description">{{description}}</p>
          <div class="download-options">
            <a href class="button" v-for="type in filetypes" :key="type">{{type}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Characters from "../assets/Characters.json";

export default {
  data() {
    return {
      characterEpisode: this.$route.params.characterEpisode,
      character: this.$route.params.character,
    };
  },
  computed: {
    description() {
      return Characters[this.characterEpisode][this.character].description;
    },
    ripped() {
      return Characters[this.characterEpisode][this.character].ripped;
    },
    appear() {
      return Characters[this.characterEpisode][this.character].appear;
    },
    fullbody() {
      return require("../assets/" + this.character + "-fullbody.png");
    },
    filetypes() {
      return Characters[this.characterEpisode][this.character].filetypes;
    },
  },
};
</script>

<style scoped>
.outer-container {
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  padding: 2%;
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
  justify-content: space-around;
  margin: auto;
}
.left {
  text-transform: capitalize;
  text-align: center;
  color: whitesmoke;
  width: 50%;
}
.right {
  width: 50%;
}
.download-options {
  display: flex;
  padding-top: 50%;
  justify-content: space-evenly;
}
#description {
  padding: 5%;
  font-size: 1.2vw;
  color: whitesmoke;
}
#character-image {
  max-width: 80%;
  height: auto;
}
h1 {
  font-size: 2vw;
}
.button {
  padding: 2%;
  width: 30%;
  font-size: 2vh;
}
</style>