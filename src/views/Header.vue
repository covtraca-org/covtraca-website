<template lang="pug">
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
        a.navbar-brand(:href='false', @click="handleReport", :class="{ 'reporting' : isReporting, 'showing-map' : showMap }")
            img.icon-nav-cov(src='images/logo-blue.svg', alt='CovTraca icon')            
            .title-app
                strong COVTRACA
                span  Symptom Tracker            
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isReporting", "showMap"])
  },
  methods: {
    handleReport() {
      if (this.isReporting || this.showMap) {
        this.$store.dispatch("handleReport");
      }
      return;
    }
  }
};
</script>

<style lang="sass" scoped>
@import 'bulma/sass/utilities/_all'
+desktop
    .navbar-brand
        &.reporting, &.showing-map
            cursor: pointer
        &.reporting
            .icon-nav-cov
                filter: none
            .title-app
                color: #009cde
.navbar-brand
    display: flex
.title-app
    display: flex
    flex-direction: column
    line-height: 15px
    color: #fff
    transition: color .3s ease
    transition-delay: 1s
.icon-nav-cov
    height: 30px
    width: 30px
    margin-right: 10px
    transition: filter .3s ease
    transition-delay: 1s
    filter: brightness(0) invert(1)
nav
    background-color: transparent !important
    z-index: 1
</style>
