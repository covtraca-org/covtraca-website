<template lang="pug">
    .all-questions
        #report-container(v-if="!sended")
            .question(v-for="(question, i) in questions", :key="i")            
                .title-question {{ $t(question.i18n) }}                
                .type-question(v-if="question.type === 'select'")
                    .options(:class="question.type")
                        .option(v-for="(option, j) in question.options", :class="{ 'is-large-text' : option.label.length > 4, 'active' : option.value === question.value }", @click="setValue(question, option.value)") {{ $t(option.i18n) }}
                .type-question(v-if="question.type === 'checkbox'")
                    .options(:class="question.type")                        
                        .field(v-for="(option, j) in question.options")
                            input.is-checkradio(:id="'check-' + question.id + j",
                                type='checkbox',
                                :value="option.id",
                                v-model="question.value")
                            label(:for="'check-' + question.id + j") {{ $t(option.i18n) }}
                .type-question(v-if="checkTypeString(question.type)")                    
                    input(:type="question.type", placeholder="Type here...", @keyup.enter="next", v-model="question.value")
                .type-question(v-if="question.type === 'textarea'", v-model="question.value")
                    textarea(placeholder="Type here...")
        .send(v-else)
            .title-question {{ $t('thanksMessage') }}
            .content-button-nav.full
                button(@click="handleReport") {{ $t('backButton') }}
        .content-button-nav(v-if="!sended")
            button(@click="prev", :disabled="step <= 1") {{ $t('prevButton') }}
            button(@click="next") {{ $t('nextButton') }}
</template>

<script>
import "@/sass/views/report.sass";
import "bulma-checkradio";
import axios from "axios";
import _ from "lodash";
import { TimelineMax, Linear } from "gsap";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      newCurve: null,
      questions: [],
      step: 1,
      sended: false,
      user_report: {
        answer: [],
        lat: "",
        long: ""
      }
    };
  },
  computed: {
    stepsLeft() {
      return this.questions.length;
    },
    ...mapGetters(["getCurve"])
  },
  methods: {
    checkTypeString(t) {
      switch (t) {
        case "text":
        case "number":
        case "email":
        case "tel":
          return true;
        default:
          return false;
      }
    },
    setValue(q, v) {
      q.value = v;
      this.next();
    },
    getQuestions() {
      let vm = this;
      axios.get("https://api.covtraca.org/v1/questions").then(res => {
        vm.questions = res.data.data;
        _.forEach(vm.questions, q => {
          if (q.type == "checkbox") {
            q["value"] = [];
          } else {
            q["value"] = "";
          }
          let opts = JSON.parse(q.options);
          q.options = opts;
        });
      });
    },
    sendReport() {
      let vm = this;

      _.forEach(vm.questions, q => {
        vm.user_report.answer.push({
          id: q.id,
          value: q.value
        });
      });

      let ans = JSON.stringify(vm.user_report.answer);

      vm.user_report.answer = ans;

      axios
        .post("https://api.covtraca.org/v1/reports", vm.user_report)
        .then(() => {
          vm.sended = true;
        });
    },
    handleReport() {
      this.$store.dispatch("handleReport");
    },
    prev() {
      let vm = this;
      if (vm.step > 1) {
        vm.step--;
        document.getElementById(
          "report-container"
        ).style.transform = `translateX(calc(-100% * ${vm.step - 1})`;
      }
    },
    next() {
      let vm = this;
      if (vm.step < vm.stepsLeft) {
        vm.step++;
        document.getElementById(
          "report-container"
        ).style.transform = `translateX(calc(-100% * ${vm.step - 1})`;
      } else {
        vm.sendReport();
        document.getElementById(
          "report-container"
        ).style.transform = `translateX(calc(0%)`;
      }
    },
    getLocation() {
      let vm = this;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(vm.showPosition, vm.showError);
      } else {
        vm.$store.dispatch("handleToast");
        this.$store.dispatch(
          "setMessage",
          "Geolocation is not supported by this browser."
        );
        setTimeout(() => {
          vm.$store.dispatch("handleToast");
        }, 5000);
      }
    },
    showError(error) {
      let vm = this;
      let message = "";
      vm.$store.dispatch("handleToast");
      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = "permissionDenied";
          break;
        case error.POSITION_UNAVAILABLE:
          message = "positionUnavailable";
          break;
        case error.TIMEOUT:
          message = "timeout";
          break;
        case error.UNKNOWN_ERROR:
          message = "unknownError";
          break;
      }
      this.$store.dispatch("changeMessage", {
        message
      });
      setTimeout(() => {
        vm.$store.dispatch("handleToast");
      }, 5000);
    },
    showPosition(position) {
      let vm = this;
      vm.user_report.lat = position.coords.latitude;
      vm.user_report.long = position.coords.longitude;
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      this.getCurve.pause();
      this.newCurve = new TimelineMax();
      this.newCurve.to(".curve", 1, {
        left: "-70%",
        top: "-50%",
        scale: 3,
        ease: Linear.ease
      });
    }
    this.getQuestions();
    this.getLocation();
  },
  destroyed() {
    let vm = this;
    if (window.innerWidth > 1023) {
      setTimeout(() => {
        vm.getCurve.resume();
      }, 1100);
      vm.newCurve.to(".curve", 1, {
        left: "0%",
        top: "-5%",
        scale: 1,
        ease: Linear.ease
      });
    }
  }
};
</script>
