(window["cov_build_jsonp"] = window["cov_build_jsonp"] || []).push([[6],{

/***/ "298c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".map-cov{height:100vh;width:100vw;position:fixed;top:0;left:0}#map{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3624":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("298c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0ee25606", content, shadowRoot)
};

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

/***/ "6e45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Map.vue?vue&type=template&id=b224b1ac&lang=pug&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-home"},[_c('div',{staticClass:"container-fluid"},[_c('map-cov')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Map.vue?vue&type=template&id=b224b1ac&lang=pug&shadow

// EXTERNAL MODULE: ./src/sass/views/introduction.sass
var introduction = __webpack_require__("97be");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapCov.vue?vue&type=template&id=fb85f284&lang=pug&
var MapCovvue_type_template_id_fb85f284_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var MapCovvue_type_template_id_fb85f284_lang_pug_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map-cov"},[_c('div',{attrs:{"id":"map"}})])}]


// CONCATENATED MODULE: ./src/components/MapCov.vue?vue&type=template&id=fb85f284&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.fill.js
var es_array_fill = __webpack_require__("cb29");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array-buffer.slice.js
var es_array_buffer_slice = __webpack_require__("ace4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.uint8-array.js
var es_typed_array_uint8_array = __webpack_require__("5cc6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.includes.js
var es_typed_array_includes = __webpack_require__("82f8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.sort.js
var es_typed_array_sort = __webpack_require__("219c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-locale-string.js
var es_typed_array_to_locale_string = __webpack_require__("b39a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.typed-array.to-string.js
var es_typed_array_to_string = __webpack_require__("72f7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.js
var mapbox_gl = __webpack_require__("e192");
var mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(mapbox_gl);

// EXTERNAL MODULE: ./node_modules/gsap/gsap-core.js
var gsap_core = __webpack_require__("a5cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MapCov.vue?vue&type=script&lang=js&












//
//
//
//





/* harmony default export */ var MapCovvue_type_script_lang_js_ = ({
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["a" /* mapGetters */])(["getCurve"])),

  data() {
    return {
      newCurve: null,
      reports: [],
      coordinates: []
    };
  },

  methods: {
    getReports() {
      var vm = this;
      axios_default.a.get("https://api.covtraca.org/v1/reports").then(res => {
        vm.reports = res.data.data;

        lodash_default.a.forEach(vm.reports, r => {
          if (r.lat != null && r.long != null) {
            vm.coordinates.push({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [r.long, r.lat]
              }
            });
          }
        });
      });
    },

    renderMap() {
      var vm = this;
      mapbox_gl_default.a.accessToken = "pk.eyJ1IjoiY292dHJhY2EiLCJhIjoiY2s5Y3liNXVmMDkyODNocDVzdGxvaXZqeCJ9.I-oXd16J5u_HVtr3gL8QPA";
      var map = new mapbox_gl_default.a.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 1.5
      });
      var size = 200;
      var pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
        onAdd: function onAdd() {
          var canvas = document.createElement("canvas");
          canvas.width = this.width;
          canvas.height = this.height;
          this.context = canvas.getContext("2d");
        },
        // called once before every frame where the icon will be used
        render: function render() {
          var duration = 1000;
          var t = performance.now() % duration / duration;
          var radius = size / 2 * 0.3;
          var outerRadius = size / 2 * 0.7 * t + radius;
          var context = this.context; // draw outer circle

          context.clearRect(0, 0, this.width, this.height);
          context.beginPath();
          context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2); //context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';

          context.fillStyle = "rgba(0, 156, 222," + (1 - t) + ")";
          context.fill(); // draw inner circle

          context.beginPath();
          context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2); //context.fillStyle = 'rgba(255, 100, 100, 1)';

          context.fillStyle = "rgba(0, 156, 222, 1)";
          context.strokeStyle = "white";
          context.lineWidth = 2 + 4 * (1 - t);
          context.fill();
          context.stroke(); // update this image's data with data from the canvas

          this.data = context.getImageData(0, 0, this.width, this.height).data; // continuously repaint the map, resulting in the smooth animation of the dot

          map.triggerRepaint(); // return `true` to let the map know that the image was updated

          return true;
        }
      };
      map.on("load", function () {
        map.addImage("pulsing-dot", pulsingDot, {
          pixelRatio: 2
        });
        map.addSource("points", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: vm.coordinates
          }
        });
        map.addLayer({
          id: "points",
          type: "symbol",
          source: "points",
          layout: {
            "icon-image": "pulsing-dot"
          }
        });
      });
    }

  },

  mounted() {
    if (window.innerWidth > 1023) {
      this.getCurve.pause();
      this.newCurve = new gsap_core["b" /* TimelineMax */]();
      this.newCurve.to(".curve", 1, {
        left: "-70%",
        top: "-50%",
        scale: 3,
        ease: gsap_core["a" /* Linear */].ease
      });
    }

    this.getReports();
    this.renderMap();
  },

  destroyed() {
    var vm = this;

    if (window.innerWidth > 1023) {
      setTimeout(() => {
        vm.getCurve.resume();
      }, 1100);
      vm.newCurve.to(".curve", 1, {
        left: "0%",
        top: "-5%",
        scale: 1,
        ease: gsap_core["a" /* Linear */].ease
      });
    }
  }

});
// CONCATENATED MODULE: ./src/components/MapCov.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapCovvue_type_script_lang_js_ = (MapCovvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/MapCov.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("ef1a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MapCovvue_type_script_lang_js_,
  MapCovvue_type_template_id_fb85f284_lang_pug_render,
  MapCovvue_type_template_id_fb85f284_lang_pug_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var MapCov = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Map.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//


/* harmony default export */ var Mapvue_type_script_lang_js_shadow = ({
  components: {
    MapCov: MapCov
  },

  mounted() {
    this.$store.dispatch("handleMap");
  }

});
// CONCATENATED MODULE: ./src/views/Map.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var views_Mapvue_type_script_lang_js_shadow = (Mapvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/views/Map.vue?shadow





/* normalize component */

var Mapshadow_component = Object(componentNormalizer["a" /* default */])(
  views_Mapvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Mapshadow = __webpack_exports__["default"] = (Mapshadow_component.exports);

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

/***/ }),

/***/ "ef1a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3624");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MapCov_vue_vue_type_style_index_0_lang_sass___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=cov_build.6.js.map