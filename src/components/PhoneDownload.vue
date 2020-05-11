<template lang="pug">
	.row
		.col-lg-6.flex-end
			.content-hour-people
				.hour
					span {{ hour }}
					.day {{ day }}
		.col-lg-6                            
			.content-title-description
				.title-cov {{ $t('subtitleOne') }}
				.title-cov {{ $t('subtitleTwo') }}
			.description-app(v-html="$t('descriptionAppHome')")
			.content-download.full
				button.btn.btn-dark-xd.btn-lg.download-button(type='button', @click="handleReport")
					i.fas.fa-paper-plane
					span.report-text {{ $t('reportButton') }}
				button.btn.btn-dark-xd.btn-lg.download-button(type='button', @click="handleMap")
					i.fas.fa-map-marked-alt
					| {{ $t('viewMapButton') }}
			.download-text-app
				span {{ $t('downloadApp') }}
				.content-download
					a.btn.black-b.btn-dark.btn-lg.download-button(type='button')
						i.fab.fa-apple
						| {{ $t('getIOSApp') }}
					a.btn.btn-outline-dark.btn-lg.download-button(type='button')
						i.fab.fa-google-play
						| {{ $t('getAndroidApp') }}
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getLang"]),
    hour() {
      if (this.getLang == "hi") {
        moment.locale("en");
      } else {
        moment.locale(this.getLang);
      }
      return moment().format("HH:mm");
    },
    day() {
      if (this.getLang == "hi") {
        moment.locale("en");
      } else {
        moment.locale(this.getLang);
      }
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
