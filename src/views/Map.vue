<template lang="pug">    
      section.section-home
          .container-fluid
              map-cov(:covtraca-report-text="$t('covtracaUserReport')",
                :active-case-text="$t('activeCases')",
                :recovered-case-text="$t('recoveredCases')",
                :deadly-case-text="$t('deadlyCases')")
</template>
<script>
import "@/sass/views/introduction.sass";
import MapCov from "@/components/MapCov.vue";

export default {
  components: {
    MapCov
  },
  mounted() {
    this.$store.dispatch("handleMap");
  }
};
</script>
