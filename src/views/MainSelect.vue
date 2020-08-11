<template>
  <div>
    <div v-if="doesCharacterEpisodeExist" class="container">
      <router-link to="/Characters">Back</router-link>
      <img v-for="item in charactersInEpisode" :key="item.id" :src="imageName(item)" class="tile-image" />
    </div>
    <div v-else class="container">
      <router-link
        v-for="item in allCharacters"
        :key="item.id"
        :to="{ name:'Episode', params: {characterEpisode: item}}"
        class="link"
      >
        <img :src="require('../assets/'+item+'.png')" class="tile-image" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Characters from "../assets/Characters.json";

export default {
  data() {
    return {
      selectedEpisode: this.$route.params.characterEpisode,
      selectedCharacterPath: "",
    };
  },
  methods: {
    imageName(name) {
      try {
        return require("../assets/" + name + ".png");
      } catch {
        return require("../assets/" + name + ".jpg");
      }
    },
  },
  computed: {
    allCharacters() {
      return Object.keys(Characters);
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
        console.log(
          Object.keys(Characters[this.$route.params.characterEpisode])
        );
        return Object.keys(Characters[this.$route.params.characterEpisode]);
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
  width: 50%;
}
.link {
  padding: 0px;
}
.tile-image {
  width: 100%;
}
</style>