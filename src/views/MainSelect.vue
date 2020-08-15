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
        <img :src="imageName(item)" class="tile-image" :alt="item" />
      </router-link>
    </div>

    <h1 id="selected-episode">{{selectedEpisode}}</h1>
    <transition name="fade" mode="out-in">
      <div v-if="doesCharacterEpisodeExist" class="container">
        <transition-group name="list-complete" class="list-transition">
          <template v-for="item in charactersInEpisode">
            <router-link :to="item" :key="item" class="link" append v-if="advanceExist(item)">
              <img :src="imageName(item)" class="character-image" :alt="item" />
            </router-link>
            <a :href="s3BucketPath(item)" :key="item" class="link" v-else>
              <img :src="imageName(item)" class="character-image" :alt="item" />
            </a>
          </template>
        </transition-group>
      </div>
    </transition>
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
    advanceExist(item) {
      console.log(item);
      if (
        Object.keys(
          Characters[this.$route.params.characterEpisode][item]
        ).includes("ripped")
      ) {
        return true;
      } else {
        return false;
      }
    },
    s3BucketPath: function (item) {
      let folder = Characters[this.$route.params.characterEpisode].folder;
      let filename =
        Characters[this.$route.params.characterEpisode][item].filename;
      return `${this.fileUrl}/${folder}/${filename}`;
    },

    imageName(name) {
      try {
        return require("../assets/" + name + ".webp");
      } catch {
        return require("../assets/" + name + ".png");
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
        console.log(allKeys);
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
  padding: 1%;
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
  max-width: 11%;
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
.list-complete-item {
  transition: all 0.5s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all 0.5s;
}
.list-complete-leave-active {
  transition: all 0.5s;
  width: 10px;
  height: 10px;
  position: absolute;
}
.list-transition {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  transition: all 0.2s;
}
@media only screen and (max-width: 1339px) {
  .link-title {
    max-width: 25%;
    margin: 5px;
  }
  .link {
    width: 25%;
    margin: 5px;
  }
}
</style>