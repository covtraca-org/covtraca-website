<template lang="pug">                
      section.section-home
          .container-fluid
              phone-cov
</template>

<script>
import "@/sass/views/introduction.sass";

import PhoneCov from "@/components/PhoneDownload.vue";

export default {
  components: {
    PhoneCov
  }
};
</script>
