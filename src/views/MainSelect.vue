<template>
<div>
    <div v-if="doesCharacterEpisodeExist" class="container">
        <router-link to="/Characters">Back</router-link>
            <img v-for="item in charactersInEpisode" :key="item.id" :src="require('../assets/'+item+'.jpg')" class="tile-image" />
    </div>
  <div v-else  class="container">
     <router-link v-for="item in allCharacters" :key="item.id" :to="{ name:'Episode', params: {characterEpisode: item}}" class="link"> <img :src="require('../assets/'+item+'.png')" class="tile-image" /></router-link >
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