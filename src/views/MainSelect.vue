<template>
  <div>
    <router-link to="/">Back</router-link>

    <div class="container">
      <router-link
        v-for="item in allCharacters"
        :key="item.id"
        :to="{ name:'Episode', params: {characterEpisode: item}}"
        class="link-title"
      >
        <img :src="require('../assets/'+item+'.png')" class="tile-image" />
      </router-link>
    </div>

    <h1 id="selected-episode">{{selectedEpisode}}</h1>

    <div v-if="doesCharacterEpisodeExist" class="container">
      <a v-for="item in charactersInEpisode" :key="item.id" :href="s3BucketPath(item)" class="link">
        <img :src="imageName(item)" class="character-image" />
      </a>
    </div>
  </div>
</template>

<script>
import Characters from "../assets/Characters.json";

export default {
  data() {
    return {
      fileUrl: "https://ripping-resource.s3.amazonaws.com",
      selectedCharacterPath: "",
    };
  },
  methods: {
      s3BucketPath: function(item) {
          let folder = Characters[this.$route.params.characterEpisode].folder
          let filename = Characters[this.$route.params.characterEpisode][item].filename
          return `${this.fileUrl}/${folder}/${filename}`
      },
    imageName(name) {
      try {
        return require("../assets/" + name + ".png");
      } catch {
        return require("../assets/" + name + ".jpg");
      }
    },
  },
  computed: {
    selectedEpisode() {
      if (this.$route.params.characterEpisode) {
        return Characters[this.$route.params.characterEpisode].name;
      } else {
        return "";
      }
    },
    allCharacters() {
      let allKeys = Object.keys(Characters);
      return allKeys;
    },
    doesCharacterEpisodeExist() {
      if (this.$route.params.characterEpisode == undefined) {
        return false;
      } else {
        return true;
      }
    },
    charactersInEpisode() {
      if (this.$route.params.characterEpisode) {
        let allKeys = Object.keys(
          Characters[this.$route.params.characterEpisode]
        );
        let removeName = allKeys.splice(0, 2);
        return allKeys;
      } else {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  padding: 5%;
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
  justify-content: space-around;
  margin: auto;
}
a {
  border: 0px;
  margin: auto;
  padding: 0px;
  background-color: transparent;
}

.link-title {
  width: 10%;
  margin: 5px;
}
.link-title:hover {
  opacity: 0.6;
}
.link {
  padding: 1px;
  transition: all 0.2s;
  margin: 5px;
  width: 15%;
  height: fit-content;
  align-self: center;
}
.link:hover {
  opacity: 0.6;
}
.tile-image {
  max-width: 100%;
  height: auto;
}

#selected-episode {
  text-align: center;
}
.character-image {
  width: 100%;
  height: auto;
}
</style>