<template lang="pug">
  .home
    introduction-cov
    features-cov
    testimonial-cov
    research-cov
    introduction-cov(:invert="true")
</template>

<script>
import IntroductionCov from "@/views/Introduction.vue";
import FeaturesCov from "@/views/Features.vue";
import TestimonialCov from "@/components/Testimonial.vue";
import ResearchCov from "@/components/Research.vue";

export default {
  components: {
    IntroductionCov,
    FeaturesCov,
    TestimonialCov,
    ResearchCov
  }
};
</script>
