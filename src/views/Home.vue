<template lang="pug">
  .home
    introduction-cov
    about-cov
    footer-cov
</template>

<script>
import IntroductionCov from "@/views/Introduction.vue";
import AboutCov from "@/views/home/About.vue";
import FooterCov from "@/views/Footer.vue";

export default {
  components: {
    IntroductionCov,
    FooterCov,
    AboutCov
  }
};
</script>
