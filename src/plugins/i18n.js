import Vue from "vue";

import VueI18n from "vue-i18n";
import en from "@/assets/lang/en";
import es from "@/assets/lang/es";
import vi from "@/assets/lang/vi";
import ja from "@/assets/lang/ja";

Vue.use(VueI18n);

const messages = {
  en,
  es,
  vi,
  ja
};

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "es",
  messages
});

export default i18n;
