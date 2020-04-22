<template lang="pug">
    #intro-cov
        .curve
        .bg-cov-intro
        header-cov
        section.section-home
            .container-fluid
                transition(name="component-fade", mode="out-in")
                    component(:is="view", :curve="isReporting ? curveMax : ''")
</template>

<script>
import "@/sass/views/introduction.sass";
import HeaderCov from "@/views/Header.vue";
import ReportCov from "@/components/Report.vue";
import PhoneCov from "@/components/PhoneDownload.vue";
import { mapGetters } from "vuex";
import { gsap } from "gsap";
import { TimelineMax, Linear, CSSPlugin } from "gsap";
gsap.registerPlugin(CSSPlugin);

export default {
  components: {
    HeaderCov,
    ReportCov,
    PhoneCov
  },
  data() {
    return {
      curveMax: null,
      newCurve: null
    };
  },
  computed: {
    ...mapGetters(["isReporting"]),
    view() {
      if (!this.isReporting) {
        return "phone-cov";
      } else {
        return "report-cov";
      }
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
