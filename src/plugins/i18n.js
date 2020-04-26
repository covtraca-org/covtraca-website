import Vue from "vue";

import VueI18n from "vue-i18n";

const messages = {};

let langs = [];

const files = require.context("@/assets/lang/", true, /\.js$/i);
files.keys().map(key => {
  let l = key
    .split("/")
    .pop()
    .split(".");
  messages[l[0]] = require(`@/assets/lang/${l[0]}.${l[1]}`).default;
  langs.push({
    name: messages[l[0]].nameLang,
    value: l[0]
  });
});

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "es",
  messages
});

i18n.vm.data = langs;

export default i18n;
