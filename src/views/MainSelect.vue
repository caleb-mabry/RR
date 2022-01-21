<template>
  <div>
    <router-link to="/">Back</router-link>

    <div class="container">
      <div v-for="game in games" :key="game.id" class="div-container">
        <router-link
          :to="{ name: 'Episode', params: { characterEpisode: game.name } }"
          class="link-title"
        >

        <!-- <h1>{{getCharactersFromGame(item)}}</h1> -->
          <img :src="game.iconUrl" class="tile-image" :alt="game" />
        </router-link>
        <!-- <router-link v-else :to="{}" class="link-title mobile-unavailable">
          
          <img
            :src="imageName(item)"
            :class="{ is_unavailable: isUnavailable(item) }"
            class="tile-image"
            :alt="item"
          />
          <div>{{ item }} is currently unavailable</div>
        </router-link> -->
      </div>
    </div>

    <h1 id="selected-episode">{{ selectedEpisode }}</h1>
    <transition name="fade" mode="out-in">
      <div v-if="doesCharacterEpisodeExist" class="container">
        <transition-group name="list-complete" class="list-transition">
         
          <template v-for="character in charactersInEpisode()">
            {{character}}
            <router-link
              :to="character.name"
              :key="character.name"
              class="link"
              append
            >
              <img
                :src="character.iconURL"
                class="character-image"
                :alt="character.name"
              />
            </router-link>
          </template>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      fileUrl: "https://ripping-resource.s3.amazonaws.com",
      selectedCharacterPath: "",
      characters: [],
      games: {}
    };
  },
  methods: {
    getCharacters() {
      axios.get('https://strapi.mabry.dev/ripping-resources?_sort=gameOrder').then((res) => {
        this.games = res.data.map(game => { return{
          "name": game.name,
          "iconUrl": game.gameIconURL
          }
        })
        this.characters = res.data
        })
    },
        charactersInEpisode() {
      if (this.characters.length != 0 && this.$route.params.characterEpisode) {
        const game = this.$route.params.characterEpisode
        const characters = this.getCharactersFromGame(game)
        if (Object.keys(characters).includes('characters')) {
          return characters['characters']
        }
        // let allKeys = Object.keys(
        //   Characters[this.$route.params.characterEpisode]
        // );
        // let removeName = allKeys.splice(0, 2);
        // return allKeys;
      } else {
        return [];
      }
    },
    getCharactersFromGame(game) {
      if (!this.characters) {
        return {}
      }
      return this.characters.filter(games => game.toUpperCase() == games.name.toUpperCase())[0]
    },
  },
  mounted() {
    this.getCharacters()
  },
  computed: {
    selectedEpisode() {
      if (this.$route.params.characterEpisode) {

        // if (this.characters == undefined) {
        //   return ''
        // }
        // const characters = this.getCharactersFromGame(this.$route.params.characterEpisode)
        // if (characters && Object.keys(characters).includes('characters')){
        //   const char =  characters['characters']
        // }  
        console.log(this.$route.params.characterEpisode)

        return this.$route.params.characterEpisode
        // const game =  this.characters[this.$route.params.characterEpisode];
        // console.log(Object.keys(game))
        // if ('name' in Object.keys(game)) {
          
        //   return game.name
        // } else {
        //   return ""
        // }
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