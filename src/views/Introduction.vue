<template lang="pug">
    #intro-cov
        .curve
        .bg-cov-intro
        header-cov
        section.section-home
            .container-fluid
                transition(name="component-fade", mode="out-in")
                    component(:is="view", :curve="isReporting || showMap ? curveMax : ''")
</template>

<script>
import "@/sass/views/introduction.sass";
import HeaderCov from "@/views/Header.vue";
import ReportCov from "@/components/Report.vue";
import MapCov from "@/components/MapCov.vue";
import PhoneCov from "@/components/PhoneDownload.vue";
import { mapGetters } from "vuex";
import { gsap } from "gsap";
import { TimelineMax, Linear, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default {
  components: {
    HeaderCov,
    ReportCov,
    PhoneCov,
    MapCov
  },
  data() {
    return {
      curveMax: null,
      newCurve: null,
      step: 1
    };
  },
  computed: {
    ...mapGetters(["isReporting", "showMap"]),
    view() {
      if (this.showMap) {
        return "map-cov";
      }

      if (this.isReporting) {
        return "report-cov";
      }

      return "phone-cov";
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      this.curveMax = new TimelineMax();
      this.curveMax.to(".curve", 10, {
        scale: 1.1,
        ease: Linear.easeNone,
        yoyo: true,
        repeat: -1
      });
    }
  }
};
</script>
