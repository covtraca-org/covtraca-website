<template lang="pug">
    .row
        .col-lg-6
            .content-hour-people
                .hour {{ hour }}
                    .day {{ day }}
        .col-lg-6                            
            .content-title-description
                .title-cov Help stop the spread of COVID-19
                .title-cov Take 1 minute each day
            .content-download.full
                button.btn.btn-dark-xd.btn-lg.download-button(type='button', @click="handleReport")
                    i.fas.fa-paper-plane
                    |  Report now            
                button.btn.btn-dark-xd.btn-lg.download-button(type='button', @click="handleMap")
                    i.fas.fa-map-marked-alt
                    |  View map
            .content-download
                a.btn.black-b.btn-dark.btn-lg.download-button(type='button')
                    i.fab.fa-apple
                    |  Download
                a.btn.btn-outline-dark.btn-lg.download-button(type='button')
                    i.fab.fa-google-play
                    |  Download
</template>

<script>
import moment from "moment";
export default {
  computed: {
    hour() {
      return `${moment().hour()}:${moment().minutes()}`;
    },
    day() {
      return moment().format("MMM Do dddd");
    }
  },
  methods: {
    handleReport() {
      this.$router.push("report");
    },
    handleMap() {
      this.$router.push("map");
    }
  }
};
</script>
