<template lang="pug">
    .all-questions
        #report-container(v-if="!sended")
            .question(v-for="(question, i) in questions", :key="i")            
                .title-question {{ question.title }}
                .type-question(v-if="question.type === 'select'")
                    .options(:class="question.type")
                        .option(v-for="(option, j) in question.options", :class="{ 'active' : option.value === question.value }", @click="setValue(question, option.value)") {{ option.label }}
                .type-question(v-if="question.type === 'checkbox'")
                    .options(:class="question.type")                        
                        .field(v-for="(option, j) in question.options")
                            input.is-checkradio(:id="'check-' + question.id + j",
                                type='checkbox',
                                :value="option.value",
                                v-model="question.value")
                            label(:for="'check-' + question.id + j") {{ option.label }}
                .type-question(v-if="checkTypeString(question.type)")                    
                    input(:type="question.type", placeholder="Type here...", @keyup.enter="next")
                .type-question(v-if="question.type === 'textarea'")
                    textarea(placeholder="Type here...")
        .send(v-else)
            .title-question Thanks for test
            .content-button-nav.full
                button(@click="handleReport") Back
        .content-button-nav(v-if="!sended")
            button(@click="prev", :disabled="step <= 1") Prev
            button(@click="next") Next
</template>

<script>
import "@/sass/views/report.sass";
import "bulma-checkradio";
import axios from "axios";
import _ from "lodash";
import { TimelineMax, Linear } from "gsap";
export default {
  props: {
    curve: {
      type: Object
    }
  },
  data() {
    return {
      newCurve: null,
      questions: [],
      step: 1,
      sended: false
    };
  },
  computed: {
    stepsLeft() {
      return this.questions.length;
    }
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
          let val = JSON.parse(q.value);
          let opts = JSON.parse(q.options);
          q.options = opts;
          q.value = val;
        });
      });
    },
    handleReport() {
      this.$store.dispatch("setIsAuthenticated");
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
        vm.sended = true;
        document.getElementById(
          "report-container"
        ).style.transform = `translateX(calc(0%)`;
      }
    }
  },
  mounted() {
    if (window.innerWidth > 1023) {
      this.curve.pause();
      this.newCurve = new TimelineMax();
      this.newCurve.to(".curve", 1, {
        left: "-70%",
        top: "-50%",
        scale: 3,
        ease: Linear.ease
      });
    }
    this.getQuestions();
  },
  destroyed() {
    let vm = this;
    if (window.innerWidth > 1023) {
      setTimeout(() => {
        vm.curve.resume();
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
