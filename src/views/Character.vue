<template>
  <div>
    <router-link :to="'/Characters/' + $route.params.characterEpisode"
      >Back</router-link
    >

    <div class="outer-container">
      <div class="container">
        <div class="left">
          <h1 id="character-name">{{ character }}</h1>
          <img :src="fullbody" alt id="character-image" />
          <h1 id="ripper-name">Ripped By: {{ ripped }}</h1>
        </div>
        <div class="right">
          <p id="description">{{ description }}</p>
          <div class="download-options">
            <a
              :href="s3BucketPath(character, type)"
              class="button"
              v-for="type in filetypes"
              :key="type"
              >{{ type }}</a
            >
          </div>
          <div class="tooltip">
            What's the difference?
            <span class="tooltiptext"
              >TNC and VLS use a format called WEBP. It allows for higher
              quality, and can be smaller than the GIF format. Our WEBPs are in
              5:3, the aspect ratio of the 3DS, at 1200x720. GIF is what the
              rest of the AO community uses, is lower quality, as it can only
              allow for 256 colors, and are usually three times larger. Our GIFs
              are higher resolution than our WEBPs (1024x768). AO2 supports
              WEBP, however most characters are not in WEBP as of now. Unless
              you're getting these for an AO2 server, WEBP is recommended.</span
            >
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
      fileUrl: "https://ripping-resource.s3.amazonaws.com",
      characterEpisode: this.$route.params.characterEpisode,
      character: this.$route.params.character,
    };
  },
  methods: {
    s3BucketPath: function (item, type) {
      let folder = Characters[this.$route.params.characterEpisode].folder;
      let filename =
        Characters[this.$route.params.characterEpisode][item].filename;
      return `${this.fileUrl}/${folder}/${type}_${filename}`;
    },
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
      try {
        return require("../assets/" + this.character + "-fullbody.webp");
      } catch {
        return "";
      }
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
  border-radius: 5px;
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
  font-size: 16px;
  color: whitesmoke;
}
#character-image {
  max-width: 80%;
  height: auto;
}
h1 {
  font-size: 40px;
}
.button {
  padding: 2%;
  width: 30%;
  font-size: 16px;
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
  font-size: 17px;
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
  top: 0;
  transition: all 0.2s;
  z-index: 1;
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
    width: 60%;
    font-size: 16px;
  }
}
</style>