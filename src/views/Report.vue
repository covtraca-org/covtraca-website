<template lang="pug">    
      section.report-content
          .container-fluid
              start-report
</template>

<script>
import "@/sass/views/introduction.sass";
import StartReport from "@/components/StartReport.vue";

export default {
  components: {
    StartReport
  },
  mounted() {
    this.$store.dispatch("handleReport");
  }
};
</script>
