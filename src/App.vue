<template lang="pug">
  #app    
    router-view
    #snackbar(v-if="showToast") {{ getMessage }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["showToast", "getMessage"])
  }
};
</script>

<style lang="sass">
@import "./sass/app"
</style>
