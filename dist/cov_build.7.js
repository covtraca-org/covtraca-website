(window["cov_build_jsonp"] = window["cov_build_jsonp"] || []).push([[7],{

/***/ "43e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhoneDownload.vue?vue&type=template&id=bac8c162&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6"},[_c('div',{staticClass:"content-hour-people"},[_c('div',{staticClass:"hour"},[_vm._v(_vm._s(_vm.hour)),_c('div',{staticClass:"day"},[_vm._v(_vm._s(_vm.day))])])])]),_c('div',{staticClass:"col-lg-6"},[_vm._m(0),_c('div',{staticClass:"content-download full"},[_c('button',{staticClass:"btn btn-dark-xd btn-lg download-button",attrs:{"type":"button"},on:{"click":_vm.handleReport}},[_c('i',{staticClass:"fas fa-paper-plane"}),_vm._v(" Report now ")]),_c('button',{staticClass:"btn btn-dark-xd btn-lg download-button",attrs:{"type":"button"},on:{"click":_vm.handleMap}},[_c('i',{staticClass:"fas fa-map-marked-alt"}),_vm._v(" View map")])]),_vm._m(1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-title-description"},[_c('div',{staticClass:"title-cov"},[_vm._v("Help stop the spread of COVID-19")]),_c('div',{staticClass:"title-cov"},[_vm._v("Take 1 minute each day")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-download"},[_c('a',{staticClass:"btn black-b btn-dark btn-lg download-button",attrs:{"type":"button"}},[_c('i',{staticClass:"fab fa-apple"}),_vm._v(" Download")]),_c('a',{staticClass:"btn btn-outline-dark btn-lg download-button",attrs:{"type":"button"}},[_c('i',{staticClass:"fab fa-google-play"}),_vm._v(" Download")])])}]


// CONCATENATED MODULE: ./src/components/PhoneDownload.vue?vue&type=template&id=bac8c162&lang=pug&

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__("c1df");
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/PhoneDownload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var PhoneDownloadvue_type_script_lang_js_ = ({
  computed: {
    hour() {
      return `${moment_default()().hour()}:${moment_default()().minutes()}`;
    },

    day() {
      return moment_default()().format("MMM Do dddd");
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
});
// CONCATENATED MODULE: ./src/components/PhoneDownload.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PhoneDownloadvue_type_script_lang_js_ = (PhoneDownloadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/PhoneDownload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PhoneDownloadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var PhoneDownload = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "2bfb",
	"./af.js": "2bfb",
	"./ar": "8e73",
	"./ar-dz": "a356",
	"./ar-dz.js": "a356",
	"./ar-kw": "423e",
	"./ar-kw.js": "423e",
	"./ar-ly": "1cfd",
	"./ar-ly.js": "1cfd",
	"./ar-ma": "0a84",
	"./ar-ma.js": "0a84",
	"./ar-sa": "8230",
	"./ar-sa.js": "8230",
	"./ar-tn": "6d83",
	"./ar-tn.js": "6d83",
	"./ar.js": "8e73",
	"./az": "485c",
	"./az.js": "485c",
	"./be": "1fc1",
	"./be.js": "1fc1",
	"./bg": "84aa",
	"./bg.js": "84aa",
	"./bm": "a7fa",
	"./bm.js": "a7fa",
	"./bn": "9043",
	"./bn.js": "9043",
	"./bo": "d26a",
	"./bo.js": "d26a",
	"./br": "6887",
	"./br.js": "6887",
	"./bs": "2554",
	"./bs.js": "2554",
	"./ca": "d716",
	"./ca.js": "d716",
	"./cs": "3c0d",
	"./cs.js": "3c0d",
	"./cv": "03ec",
	"./cv.js": "03ec",
	"./cy": "9797",
	"./cy.js": "9797",
	"./da": "0f14",
	"./da.js": "0f14",
	"./de": "b469",
	"./de-at": "b3eb",
	"./de-at.js": "b3eb",
	"./de-ch": "bb71",
	"./de-ch.js": "bb71",
	"./de.js": "b469",
	"./dv": "598a",
	"./dv.js": "598a",
	"./el": "8d47",
	"./el.js": "8d47",
	"./en-SG": "cdab",
	"./en-SG.js": "cdab",
	"./en-au": "0e6b",
	"./en-au.js": "0e6b",
	"./en-ca": "3886",
	"./en-ca.js": "3886",
	"./en-gb": "39a6",
	"./en-gb.js": "39a6",
	"./en-ie": "e1d3",
	"./en-ie.js": "e1d3",
	"./en-il": "7333",
	"./en-il.js": "7333",
	"./en-nz": "6f50",
	"./en-nz.js": "6f50",
	"./eo": "65db",
	"./eo.js": "65db",
	"./es": "898b",
	"./es-do": "0a3c",
	"./es-do.js": "0a3c",
	"./es-us": "55c9",
	"./es-us.js": "55c9",
	"./es.js": "898b",
	"./et": "ec18",
	"./et.js": "ec18",
	"./eu": "0ff2",
	"./eu.js": "0ff2",
	"./fa": "8df4",
	"./fa.js": "8df4",
	"./fi": "81e9",
	"./fi.js": "81e9",
	"./fo": "0721",
	"./fo.js": "0721",
	"./fr": "9f26",
	"./fr-ca": "d9f8",
	"./fr-ca.js": "d9f8",
	"./fr-ch": "0e49",
	"./fr-ch.js": "0e49",
	"./fr.js": "9f26",
	"./fy": "7118",
	"./fy.js": "7118",
	"./ga": "5120",
	"./ga.js": "5120",
	"./gd": "f6b4",
	"./gd.js": "f6b4",
	"./gl": "8840",
	"./gl.js": "8840",
	"./gom-latn": "0caa",
	"./gom-latn.js": "0caa",
	"./gu": "e0c5",
	"./gu.js": "e0c5",
	"./he": "c7aa",
	"./he.js": "c7aa",
	"./hi": "dc4d",
	"./hi.js": "dc4d",
	"./hr": "4ba9",
	"./hr.js": "4ba9",
	"./hu": "5b14",
	"./hu.js": "5b14",
	"./hy-am": "d6b6",
	"./hy-am.js": "d6b6",
	"./id": "5038",
	"./id.js": "5038",
	"./is": "0558",
	"./is.js": "0558",
	"./it": "6e98",
	"./it-ch": "6f12",
	"./it-ch.js": "6f12",
	"./it.js": "6e98",
	"./ja": "079e",
	"./ja.js": "079e",
	"./jv": "b540",
	"./jv.js": "b540",
	"./ka": "201b",
	"./ka.js": "201b",
	"./kk": "6d79",
	"./kk.js": "6d79",
	"./km": "e81d",
	"./km.js": "e81d",
	"./kn": "3e92",
	"./kn.js": "3e92",
	"./ko": "22f8",
	"./ko.js": "22f8",
	"./ku": "2421",
	"./ku.js": "2421",
	"./ky": "9609",
	"./ky.js": "9609",
	"./lb": "440c",
	"./lb.js": "440c",
	"./lo": "b29d",
	"./lo.js": "b29d",
	"./lt": "26f9",
	"./lt.js": "26f9",
	"./lv": "b97c",
	"./lv.js": "b97c",
	"./me": "293c",
	"./me.js": "293c",
	"./mi": "688b",
	"./mi.js": "688b",
	"./mk": "6909",
	"./mk.js": "6909",
	"./ml": "02fb",
	"./ml.js": "02fb",
	"./mn": "958b",
	"./mn.js": "958b",
	"./mr": "39bd",
	"./mr.js": "39bd",
	"./ms": "ebe4",
	"./ms-my": "6403",
	"./ms-my.js": "6403",
	"./ms.js": "ebe4",
	"./mt": "1b45",
	"./mt.js": "1b45",
	"./my": "8689",
	"./my.js": "8689",
	"./nb": "6ce3",
	"./nb.js": "6ce3",
	"./ne": "3a39",
	"./ne.js": "3a39",
	"./nl": "facd",
	"./nl-be": "db29",
	"./nl-be.js": "db29",
	"./nl.js": "facd",
	"./nn": "b84c",
	"./nn.js": "b84c",
	"./pa-in": "f3ff",
	"./pa-in.js": "f3ff",
	"./pl": "8d57",
	"./pl.js": "8d57",
	"./pt": "f260",
	"./pt-br": "d2d4",
	"./pt-br.js": "d2d4",
	"./pt.js": "f260",
	"./ro": "972c",
	"./ro.js": "972c",
	"./ru": "957c",
	"./ru.js": "957c",
	"./sd": "6784",
	"./sd.js": "6784",
	"./se": "ffff",
	"./se.js": "ffff",
	"./si": "eda5",
	"./si.js": "eda5",
	"./sk": "7be6",
	"./sk.js": "7be6",
	"./sl": "8155",
	"./sl.js": "8155",
	"./sq": "c8f3",
	"./sq.js": "c8f3",
	"./sr": "cf1e",
	"./sr-cyrl": "13e9",
	"./sr-cyrl.js": "13e9",
	"./sr.js": "cf1e",
	"./ss": "52bd",
	"./ss.js": "52bd",
	"./sv": "5fbd",
	"./sv.js": "5fbd",
	"./sw": "74dc",
	"./sw.js": "74dc",
	"./ta": "3de5",
	"./ta.js": "3de5",
	"./te": "5cbb",
	"./te.js": "5cbb",
	"./tet": "576c",
	"./tet.js": "576c",
	"./tg": "3b1b",
	"./tg.js": "3b1b",
	"./th": "10e8",
	"./th.js": "10e8",
	"./tl-ph": "0f38",
	"./tl-ph.js": "0f38",
	"./tlh": "cf75",
	"./tlh.js": "cf75",
	"./tr": "0e81",
	"./tr.js": "0e81",
	"./tzl": "cf51",
	"./tzl.js": "cf51",
	"./tzm": "c109",
	"./tzm-latn": "b53d",
	"./tzm-latn.js": "b53d",
	"./tzm.js": "c109",
	"./ug-cn": "6117",
	"./ug-cn.js": "6117",
	"./uk": "ada2",
	"./uk.js": "ada2",
	"./ur": "5294",
	"./ur.js": "5294",
	"./uz": "2e8c",
	"./uz-latn": "010e",
	"./uz-latn.js": "010e",
	"./uz.js": "2e8c",
	"./vi": "2921",
	"./vi.js": "2921",
	"./x-pseudo": "fd7e",
	"./x-pseudo.js": "fd7e",
	"./yo": "7f33",
	"./yo.js": "7f33",
	"./zh-cn": "5c3a",
	"./zh-cn.js": "5c3a",
	"./zh-hk": "49ab",
	"./zh-hk.js": "49ab",
	"./zh-tw": "90ea",
	"./zh-tw.js": "90ea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "4678";

/***/ }),

/***/ "62c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=template&id=46191d51&lang=pug&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('introduction-cov')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=template&id=46191d51&lang=pug&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Introduction.vue?vue&type=template&id=79a1197f&lang=pug&
var Introductionvue_type_template_id_79a1197f_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-home"},[_c('div',{staticClass:"container-fluid"},[_c('phone-cov')],1)])}
var Introductionvue_type_template_id_79a1197f_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Introduction.vue?vue&type=template&id=79a1197f&lang=pug&

// EXTERNAL MODULE: ./src/sass/views/introduction.sass
var introduction = __webpack_require__("97be");

// EXTERNAL MODULE: ./src/components/PhoneDownload.vue + 4 modules
var PhoneDownload = __webpack_require__("43e9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Introduction.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var Introductionvue_type_script_lang_js_ = ({
  components: {
    PhoneCov: PhoneDownload["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/views/Introduction.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Introductionvue_type_script_lang_js_ = (Introductionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Introduction.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Introductionvue_type_script_lang_js_,
  Introductionvue_type_template_id_79a1197f_lang_pug_render,
  Introductionvue_type_template_id_79a1197f_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Introduction = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&shadow
//
//
//
//
//

/* harmony default export */ var Homevue_type_script_lang_js_shadow = ({
  components: {
    IntroductionCov: Introduction
  }
});
// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var views_Homevue_type_script_lang_js_shadow = (Homevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/views/Home.vue?shadow





/* normalize component */

var Homeshadow_component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Homeshadow = __webpack_exports__["default"] = (Homeshadow_component.exports);

/***/ }),

/***/ "65d0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width:1023px){.content-title-description{margin-top:30px}.content-download.full button{color:#fff;font-weight:700}.content-download .btn-dark{background-color:#fff;color:#343a40;border-color:#fff}.content-download .btn-outline-dark{color:#fff;border-color:#fff}.hour{font-size:22px;top:16px;left:44px;width:67px}.hour .day{font-size:8px}.content-hour-people,.people-phone{width:270px}.content-hour-people{background-image:url(/images/people-phone-mobile.svg);height:200px;margin:20px auto}.title-image{width:70%;position:relative}.title-image.to-right{right:-17%}.title-image.to-left{left:-17%}.phone-hidde-mobile{display:none}.title-cov{font-size:2rem;line-height:2rem;color:#fff}}@media screen and (min-width:1024px){.black-b{color:#fff!important}.content-hour-people{background-image:url(/images/people-phone.svg);height:400px}.section-home{display:flex;align-items:center}.content-title-description{margin-top:100px}.hour{font-size:44px;top:26px;left:87px;width:130px}.hour .day{font-size:14px}.content-hour-people,.people-phone{width:500px}.title-image{width:100%;position:absolute}.title-image.to-right{right:-10%}.title-image.to-left{left:-10%}.phone-hidde-desktop{display:none}.title-cov{font-size:35px;line-height:35px;text-align:right}.content-download{grid-template-columns:repeat(2,1fr);grid-column-gap:30px}.content-download.full button{color:#009cde;font-weight:700}.section-home{height:calc(100vh - 60px)}}.content-hour-people{background-repeat:no-repeat;background-size:contain;position:relative}.download-button{display:flex;align-items:center;justify-content:center;font-weight:700}.download-button svg{margin-right:10px}.hour{position:absolute;color:#fff;transform:skewX(13deg) skewY(1deg);text-align:center;display:flex;flex-direction:column}.hour .day{width:100%;max-width:100%}.title-image{transform:rotate(-5deg);max-width:400px}.title-cov{font-weight:700;position:relative}.content-download{display:grid;margin-top:20px;grid-row-gap:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "97be":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("65d0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1fcaf891", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=cov_build.7.js.map