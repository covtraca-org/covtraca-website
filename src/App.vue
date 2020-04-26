<template lang="pug">
  #app
    .base-curve
      .curve-container
        .curve
        .bg-cov-intro
    header-cov
    transition(name="component-fade", mode="out-in")
      router-view
    #snackbar(:class="{ 'show': showToast }") {{ $t(getMessage) }}
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
import HeaderCov from "@/views/Header.vue";
import { TimelineMax, Linear, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default {
  name: "App",
  components: {
    HeaderCov
  },
  computed: {
    ...mapGetters(["showToast", "getMessage"])
  },
  created() {
    if (window.innerWidth > 1023) {
      let curveMax = null;
      curveMax = new TimelineMax();
      curveMax.to(".curve", 10, {
        scale: 1.1,
        ease: Linear.easeNone,
        yoyo: true,
        repeat: -1
      });
      this.$store.dispatch("changeCurve", {
        curve: curveMax
      });
    }
  }
};
</script>

<style lang="sass">
@import "./sass/app"
</style>
