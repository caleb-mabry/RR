<template>
  <div>
    <router-link :to="'/Characters/' + $route.params.characterEpisode"
      >Back</router-link
    >

    <div class="outer-container">
      <div class="container">
      
        <h1 id="character-name">{{characterName}}</h1>
        <!-- <div v-if="hasLink()">
          <div class="link-ripper">
            Ripped by: {{ ripped }} |
            <span v-for="l in link" :key="l">
              <a :href="l[getKey(l)]" class="link-ripper">{{ getKey(l)[0] }}</a>
            </span>
          </div>
        </div> -->
        <h1 id="ripper-name">Ripped By: {{ ripped }}</h1>

        <!-- Overrides -->
        <div v-if="hasOverride()" class="download-options">
          <span
            v-for="override in overrides"
            style="margin: 10px"
            :key="override"
          >
            <a :href="s3BucketPathOverride(override)">{{ override }}</a>
          </span>
        </div>

        <!-- Regular Assets -->
        <div v-else class="download-options">
          <a
            class="button"
            v-for="type in Object.keys(characterData.downloads)"
            :href="characterData.downloads[type]"
            :key="type"
            >
            {{ type }}
          </a>
          <div class="tooltip">
            What's the difference?
            <span class="tooltiptext"
              >Some AO servers use a format called WEBP. It allows for higher
              quality, and can be smaller than the GIF format. Our WEBPs are in
              5:3, the aspect ratio of the 3DS, at 1200x720. GIF is what the
              rest of the AO community uses, is lower quality, as it can only
              allow for 256 colors, and are usually three times larger. Our GIFs
              are higher resolution than our WEBPs (1024x768). AO2 supports
              WEBP, however most characters are not in WEBP as of now. Consult
              your files/server admins if you are unsure which format to download.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Characters from "../assets/Characters.json";
import axios from "axios"
export default {
  data() {
    return {
      fileUrl: "https://dxf1sbhzncqmd.cloudfront.net",
      game: this.$route.params.characterEpisode,
      characterNameURL: this.$route.params.character,
      characterData: {},
      
        };
  },
  methods: {
    getCharacter() {
      axios.get('https://strapi.mabry.dev/ripping-resources').then((res) => {
        var gameData = res.data
        const selectedGame = gameData.filter(games => this.game.toUpperCase() == games.name.toUpperCase())[0]
        this.characterData = selectedGame.characters.filter(character => character.name === this.characterNameURL)[0]
        console.log(selectedGame.characters.filter(character => character.name === this.characterNameURL))
        })
    },
    getCharacterName: function() {
      // return Characters[this.$route.params.characterEpisode][this.$route.params.character].alternateTitle ? Characters[this.$route.params.characterEpisode][this.$route.params.character].alternateTitle : this.$route.params.character
    },
    hasOverride: function () {
      // return Characters[this.characterEpisode][this.character].override;
    },
    getKey: function (item) {
    },
    s3BucketPathOverride: function (item) {    },
    s3BucketPath: function (item, type) {
    },
  },
  mounted() {
    this.getCharacter();
  },
  computed: {
    description() {
      // return Characters[this.characterEpisode][this.character].description;
    },
    link() {
      // return Characters[this.characterEpisode][this.character].link;
    },
    ripped() {
      return this.characterData.rippedBy ? this.characterData.rippedBy : 'Nobody Special'
      // return Characters[this.characterEpisode][this.character].ripped;
    },
    appear() {
      // return Characters[this.characterEpisode][this.character].appear;
    },
    overrides() {
      // return Characters[this.characterEpisode][this.character].override;
    },
    filetypes() {
      // return Characters[this.characterEpisode][this.character].filetypes;
    },
    characterName() {
      return this.characterData.name
    }
  },
};
</script>

<style scoped>
.link-ripper {
  font-size: 2rem;
  margin: 10px;
}
.container {
  color: whitesmoke;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 60%;
  padding: 2%;
  border-radius: 5px;
  background: linear-gradient(
    90deg,
    rgba(18, 24, 31, 1) 0%,
    rgba(50, 67, 85, 1) 100%
  );
  justify-content: space-around;
  text-align: center;
  height: fit-content;
  margin: auto;
}
.left {
  text-transform: capitalize;
  text-align: center;
  color: whitesmoke;
  width: 100%;
}
.right {
  width: 100%;
}
.download-options {
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  margin: 2px;
  width: 100%;
  justify-content: space-evenly;
}

#character-image {
  max-width: 80%;
  height: auto;
}
h1 {
  font-size: 2.5rem;
}
.button {
  padding: 2%;
  width: 30%;
  font-size: 1.2rem;
}
.fileinfo {
  text-align: center;
}
/* Tooltip container */
.tooltip {
  margin: 2%;
  position: relative;
  text-align: center;
  width: 100%;
  color: whitesmoke;
  display: inline-block;
  font-size: 1rem;
  border-bottom: 1px dotted whitesmoke; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  opacity: 0;
  width: 100%;
  background-color: #24303d;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  transform: translateY(10%);
  left: 0px;
  top: 10px;
  transition: all 0.2s;
  z-index: 1;
}
#ripper-name {
  text-align: center;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  opacity: 1;
  transition: all 0.2s;
}
@media only screen and (max-width: 1339px) {
  .outer-container {
    margin: 5%;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(18, 24, 31, 1) 0%,
      rgba(50, 67, 85, 1) 100%
    );
    justify-content: space-around;
    margin: auto;
  }
  .left {
    width: 80%;
  }
  .right {
    text-align: center;
  }
  #character-image {
    display: none;
  }
  .tooltip {
    display: none;
  }
  .tooltip .tooltiptext {
    display: none;
  }
  .download-options {
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
  }
  .button {
    padding: 2%;
    margin: 2%;
    font-size: 1rem;
  }
}
</style>