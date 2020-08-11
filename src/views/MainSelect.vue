<template>
<div>
    <div v-if="doesCharacterEpisodeExist">
        <router-link to="/Characters">Back</router-link>
        <div v-for="item in charactersInEpisode" :key="item.id">
            {{ item }}
        </div>
    </div>
  <div v-else v-for="item in allCharacters" :key="item.id">
      <router-link :to="{ name:'Episode', params: {characterEpisode: item}}">{{item}}</router-link >
  </div>
</div>
</template>

<script>
import Characters from '../assets/Characters.json'
export default {
    data() {
        return {
            selectedEpisode: this.$route.params.characterEpisode
        }
    },
computed: {
    allCharacters() {        
        return Object.keys(Characters)
    },
    doesCharacterEpisodeExist() {
        if (this.$route.params.characterEpisode == undefined) {
            return false;
        }
        else {
            return true;
        }
    },
    charactersInEpisode() {
        if (this.$route.params.characterEpisode) {
            return Object.keys(Characters[this.$route.params.characterEpisode]) 
        }
        else {
            return []
        }
    }
},
}
</script>

<style>

</style>