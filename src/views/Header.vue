<template lang="pug">
	nav.navbar.navbar-expand-lg.navbar-light.bg-light
		a.navbar-brand(:href='false', @click="handleReport", :class="{ 'reporting' : isReporting, 'showing-map' : showMap }")
			img.icon-nav-cov(src='images/logo-blue.svg', alt='CovTraca icon')
			.title-app
				strong COVTRACA
				span  {{ $t('descriptionApp') }}
		button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbar')
			span.navbar-toggler-icon
		#navbar.collapse.navbar-collapse
			ul.navbar-nav.ml-auto
				li.nav-
					span.lang-change {{ $t('chooseLanguage') }}
					select(@change="setLang", v-model="lang")
						option(disabled, value="") {{ $t('chooseLanguage') }}
						option(value="en") English
						option(value="es") Español
						option(value="vi") tiếng việt
						option(value="ja") 日本語
						//option(value="rs") русский

</template>

<script>
import { mapGetters } from "vuex";
import i18n from "@/plugins/i18n";
export default {
  data() {
    return {
      lang: "en"
    };
  },
  computed: {
    ...mapGetters(["isReporting", "showMap"])
  },
  methods: {
    handleReport() {
      if (this.showMap || this.isReporting) {
        this.$router.push("/");
      }
      if (this.isReporting) {
        this.$store.dispatch("handleReport");
      }
      if (this.showMap) {
        this.$store.dispatch("handleMap");
      }
      return;
    },
    setLang() {
      i18n.locale = this.lang;
      localStorage.setItem("lang", this.lang);
      this.$store.dispatch("changeLang", { locale: this.lang });
    }
  },
  mounted() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", this.lang);
    } else {
      this.lang = localStorage.getItem("lang");
      this.setLang();
    }
  }
};
</script>

<style lang="sass" scoped>
@import 'bulma/sass/utilities/_all'
+touch
	.lang-change
		margin-top: 10px
		display: block
		padding-left: 3px
		color: #fff
	select
		width: 100%
		padding: 5px 0px
+desktop
	.lang-change
		display: none
	select
		max-width: 80px
	.navbar-brand
		&.reporting, &.showing-map
			cursor: pointer
		&.reporting
			.icon-nav-cov
				filter: none
			.title-app
				color: #009cde
.navbar-brand
	display: flex
.title-app
	display: flex
	flex-direction: column
	line-height: 15px
	color: #fff
	transition: color .3s ease
	transition-delay: 1s
	span
		padding-top: 4px
.icon-nav-cov
	height: 30px
	width: 30px
	margin-right: 10px
	transition: filter .3s ease
	transition-delay: 1s
	filter: brightness(0) invert(1)
nav
	background-color: transparent !important
	z-index: 1
select
	background-color: transparent
	color: #fff
	border: none
	outline: none
	font-weight: bold
	option
		color: #4f4f4f
</style>
