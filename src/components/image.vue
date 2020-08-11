<template>
  <h1>{{displayName}}</h1>
</template>

<script>
export default {
    props: {
        displayName: {
            type: String,
            default: ""
        },
    },
}
</script>

<style>

</style>