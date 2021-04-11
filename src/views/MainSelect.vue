<template>
  <div>
    <router-link to="/">Back</router-link>

    <div class="container">
      <div v-for="item in allCharacters" :key="item.id" class="div-container">
        <router-link
          v-if="isUnavailable(item) === false"
          :to="{ name: 'Episode', params: { characterEpisode: item } }"
          class="link-title"
        >
          <img :src="imageName(item)" class="tile-image" :alt="item" />
        </router-link>
        <router-link v-else :to="{}" class="link-title mobile-unavailable">
          <img
            :src="imageName(item)"
            :class="{ is_unavailable: isUnavailable(item) }"
            class="tile-image"
            :alt="item"
          />
          <div>{{ item }} is currently unavailable</div>
        </router-link>
      </div>
    </div>

    <h1 id="selected-episode">{{ selectedEpisode }}</h1>
    <transition name="fade" mode="out-in">
      <div v-if="doesCharacterEpisodeExist" class="container">
        <transition-group name="list-complete" class="list-transition">
          <template v-for="item in charactersInEpisode">
            <router-link
              :to="item"
              :key="item"
              class="link"
              append
              v-if="advanceExist(item)"
            >
              <img
                :src="imageName(item)"
                class="character-image"
                :alt="item"
                @error="imageLoadError"
              />
            </router-link>
            <a :href="s3BucketPath(item)" :key="item" class="link" v-else>
              <img
                :src="imageName(item)"
                class="character-image"
                :alt="item"
                @error="imageLoadError"
              />
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
    imageLoadError() {
      console.log("Error loading image");
    },
    isUnavailable(game) {
      console.log(game);
      if (
        [
          "plvaa",
          "dgs1+2",
          "investigations2",
          "apollojustice",
        ].includes(game)
      ) {
        return true;
      }
      return false;
    },
    s3BucketPath: function (item) {
      let folder = Characters[this.$route.params.characterEpisode].folder;
      let filename =
        Characters[this.$route.params.characterEpisode][item].filename;
      return `${this.fileUrl}/${folder}/${filename}`;
    },
    imageExist(name) {},
    imageName(name) {
      try {
        return require("../assets/" + name + ".webp");
      } catch {
        return "";
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
.div-container {
  width: 10rem;
  padding: 1px;
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
.is_unavailable {
  opacity: 0.4;
  filter: alpha(opacity=40); /* msie */
}
@media only screen and (max-width: 1339px) {
  .link-title {
    max-width: 10rem;
    margin: 5px;
  }
  .link {
    width: 10rem;
    margin: 5px;
  }
  .mobile-unavailable {
    display: none;
  }
}
</style>