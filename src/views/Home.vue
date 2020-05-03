<template lang="pug">
  .home
    introduction-cov
    about-cov
    contact-cov
    footer-cov
</template>

<script>
import IntroductionCov from "@/views/Introduction.vue";
import AboutCov from "@/views/home/About.vue";
import FooterCov from "@/views/Footer.vue";
import ContactCov from "@/components/Contact.vue";

export default {
  components: {
    IntroductionCov,
    FooterCov,
    AboutCov,
    ContactCov
  }
};
</script>
