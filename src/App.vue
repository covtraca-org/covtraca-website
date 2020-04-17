<template lang="pug">
  #app
    header-cov
    router-view
    footer-cov
</template>

<script>
import HeaderCov from "@/views/Header.vue";
import FooterCov from "@/views/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderCov,
    FooterCov
  }
};
</script>

<style lang="sass">
@import "./sass/app"
</style>
