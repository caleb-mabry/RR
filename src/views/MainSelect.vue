<template>
  <div>
    <router-link to="/">Back</router-link>

    <div class="container">
      <router-link
        v-for="item in allCharacters"
        :key="item.id"
        :to="{ name:'Episode', params: {characterEpisode: item}}"
        class="link"
      >
        <img :src="require('../assets/'+item+'.png')" class="tile-image" />
      </router-link>
    </div>
    
    <h1 id="selected-episode">{{selectedEpisode}}</h1>

    <div v-if="doesCharacterEpisodeExist" class="container">
        <a href="#">
      <img
        v-for="item in charactersInEpisode"
        :key="item.id"
        :src="imageName(item)"
        class="character-image"
      />
        </a>
    </div>
  </div>
</template>

<script>
import Characters from "../assets/Characters.json";

export default {
  data() {
    return {
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
    selectedEpisode() {
        if (this.$route.params.characterEpisode) {
        return Characters[this.$route.params.characterEpisode].name

        } else {
            return ''
        }
    },
    allCharacters() {
        let allKeys = Object.keys(Characters)
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
      if (this.$route.params.characterEpisode ) {
        let allKeys = Object.keys(Characters[this.$route.params.characterEpisode])
        let removeName = allKeys.splice(0,1) 
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
  width: 75%;
  padding: 5%;
  background-color: pink;
  justify-content: space-evenly;
  margin: auto;
}
a {
  border: 0px;
  margin: auto;
  padding: 0px;
  width: 50%;
}

.link {
  padding: 2px;
  background-color: none;

}
.tile-image {
  max-width: 100%;
  height: auto;
}
#selected-episode {
    text-align: center;
}
.character-image {
    width: 50px;
    height: 50px;
}
</style>