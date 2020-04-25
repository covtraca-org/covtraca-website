import Vue from "vue";

import VueI18n from "vue-i18n";
import en from "@/assets/lang/en";
import es from "@/assets/lang/es";

Vue.use(VueI18n);

const messages = {
  en,
  es
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "es",
  messages
});

export default i18n;
