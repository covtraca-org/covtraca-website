(window["cov_build_jsonp"] = window["cov_build_jsonp"] || []).push([[5],{

/***/ "10ec":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2172");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5317f61e", content, shadowRoot)
};

/***/ }),

/***/ "2172":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.is-checkradio[type=checkbox],.is-checkradio[type=radio]{outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;position:absolute;opacity:0}.is-checkradio[type=checkbox]+label,.is-checkradio[type=radio]+label{position:relative;display:initial;cursor:pointer;vertical-align:middle;margin:.5em;padding:.2rem .5rem .2rem 0;border-radius:4px}.is-checkradio[type=checkbox]+label:first-of-type,.is-checkradio[type=radio]+label:first-of-type{margin-left:0}.is-checkradio[type=checkbox]+label:hover:before,.is-checkradio[type=radio]+label:hover:before{-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:hover-color;animation-name:hover-color}.is-checkradio[type=checkbox]+label:before,.is-checkradio[type=radio]+label:before{position:absolute;left:0;top:0;content:\"\";border:.1rem solid #dbdbdb}.is-checkradio[type=checkbox]+label:after,.is-checkradio[type=radio]+label:after{position:absolute;display:none;content:\"\";top:0}.is-checkradio[type=checkbox].is-rtl+label,.is-checkradio[type=radio].is-rtl+label{margin-right:0;margin-left:.5rem}.is-checkradio[type=checkbox].is-rtl+label:before,.is-checkradio[type=radio].is-rtl+label:before{left:auto;right:0}.is-checkradio[type=checkbox]:focus+label:before,.is-checkradio[type=radio]:focus+label:before{outline:1px dotted #b5b5b5}.is-checkradio[type=checkbox]:hover:not([disabled])+label:before,.is-checkradio[type=radio]:hover:not([disabled])+label:before{border-color:#00d1b2!important}.is-checkradio[type=checkbox]:checked+label:before,.is-checkradio[type=radio]:checked+label:before{border:.1rem solid #dbdbdb}.is-checkradio[type=checkbox]:checked[disabled],.is-checkradio[type=radio]:checked[disabled]{cursor:not-allowed}.is-checkradio[type=checkbox]:checked[disabled]+label,.is-checkradio[type=radio]:checked[disabled]+label{opacity:.5}.is-checkradio[type=checkbox]:checked+label:before,.is-checkradio[type=radio]:checked+label:before{-webkit-animation-name:none;animation-name:none}.is-checkradio[type=checkbox]:checked+label:after,.is-checkradio[type=radio]:checked+label:after{display:inline-block}.is-checkradio[type=checkbox][disabled],.is-checkradio[type=radio][disabled]{cursor:not-allowed}.is-checkradio[type=checkbox][disabled]+label,.is-checkradio[type=radio][disabled]+label{opacity:.5;cursor:not-allowed}.is-checkradio[type=checkbox][disabled]+label:after,.is-checkradio[type=checkbox][disabled]+label:before,.is-checkradio[type=checkbox][disabled]+label:hover,.is-checkradio[type=checkbox][disabled]:hover,.is-checkradio[type=radio][disabled]+label:after,.is-checkradio[type=radio][disabled]+label:before,.is-checkradio[type=radio][disabled]+label:hover,.is-checkradio[type=radio][disabled]:hover{cursor:not-allowed}.is-checkradio[type=checkbox][disabled]:hover:before,.is-checkradio[type=radio][disabled]:hover:before{-webkit-animation-name:none;animation-name:none}.is-checkradio[type=checkbox][disabled]:after,.is-checkradio[type=checkbox][disabled]:before,.is-checkradio[type=radio][disabled]:after,.is-checkradio[type=radio][disabled]:before{cursor:not-allowed}.is-checkradio[type=checkbox].has-no-border+label:before,.is-checkradio[type=radio].has-no-border+label:before{border:none!important}.is-checkradio[type=checkbox].is-block,.is-checkradio[type=radio].is-block{display:none!important}.is-checkradio[type=checkbox].is-block+label,.is-checkradio[type=radio].is-block+label{width:100%!important;background:#f5f5f5;color:rgba(0,0,0,.7);padding-right:.75em}.is-checkradio[type=checkbox].is-block:hover:not([disabled])+label,.is-checkradio[type=radio].is-block:hover:not([disabled])+label{background:#e8e8e8}.is-checkradio[type=checkbox]+label:before{border-radius:4px}.is-checkradio[type=checkbox]+label:after{box-sizing:border-box;transform:translateY(0) rotate(45deg);border-width:.1rem;border-style:solid;border-color:#00d1b2;border-top:0;border-left:0}.is-checkradio[type=checkbox].is-circle+label:before{border-radius:50%}.is-checkradio[type=checkbox]+label{font-size:1rem;padding-left:2rem}.is-checkradio[type=checkbox]+label:before{width:1.5rem;height:1.5rem}.is-checkradio[type=checkbox]+label:after{width:.375rem;height:.6rem;top:.405rem;left:.6rem}.is-checkradio[type=checkbox].is-block+label:before{width:1.25rem;height:1.25rem;left:.175rem;top:.175rem}.is-checkradio[type=checkbox].is-block+label:after{top:.325rem;left:.65rem}.is-checkradio[type=checkbox].is-rtl+label{padding-left:0;padding-right:2rem}.is-checkradio[type=checkbox].is-rtl+label:after{left:auto;right:.6rem}.is-checkradio[type=checkbox].is-small+label{font-size:.75rem;padding-left:1.5rem}.is-checkradio[type=checkbox].is-small+label:before{width:1.125rem;height:1.125rem}.is-checkradio[type=checkbox].is-small+label:after{width:.28125rem;height:.45rem;top:.30375rem;left:.45rem}.is-checkradio[type=checkbox].is-small.is-block+label:before{width:.9375rem;height:.9375rem;left:.175rem;top:.175rem}.is-checkradio[type=checkbox].is-small.is-block+label:after{top:.29375rem;left:.5375rem}.is-checkradio[type=checkbox].is-small.is-rtl+label{padding-left:0;padding-right:1.5rem}.is-checkradio[type=checkbox].is-small.is-rtl+label:after{left:auto;right:.45rem}.is-checkradio[type=checkbox].is-medium+label{font-size:1.25rem;padding-left:2.5rem}.is-checkradio[type=checkbox].is-medium+label:before{width:1.875rem;height:1.875rem}.is-checkradio[type=checkbox].is-medium+label:after{width:.46875rem;height:.75rem;top:.50625rem;left:.75rem}.is-checkradio[type=checkbox].is-medium.is-block+label:before{width:1.5625rem;height:1.5625rem;left:.175rem;top:.175rem}.is-checkradio[type=checkbox].is-medium.is-block+label:after{top:.35625rem;left:.7625rem}.is-checkradio[type=checkbox].is-medium.is-rtl+label{padding-left:0;padding-right:2.5rem}.is-checkradio[type=checkbox].is-medium.is-rtl+label:after{left:auto;right:.75rem}.is-checkradio[type=checkbox].is-large+label{font-size:1.5rem;padding-left:3rem}.is-checkradio[type=checkbox].is-large+label:before{width:2.25rem;height:2.25rem}.is-checkradio[type=checkbox].is-large+label:after{width:.5625rem;height:.9rem;top:.6075rem;left:.9rem}.is-checkradio[type=checkbox].is-large.is-block+label:before{width:1.875rem;height:1.875rem;left:.175rem;top:.175rem}.is-checkradio[type=checkbox].is-large.is-block+label:after{top:.3875rem;left:.875rem}.is-checkradio[type=checkbox].is-large.is-rtl+label{padding-left:0;padding-right:3rem}.is-checkradio[type=checkbox].is-large.is-rtl+label:after{left:auto;right:.9rem}.is-checkradio[type=checkbox].is-white.has-background-color+label:before{border-color:transparent!important;background-color:#fff!important}.is-checkradio[type=checkbox].is-white:checked+label:after,.is-checkradio[type=checkbox].is-white:hover:not([disabled])+label:before{border-color:#fff!important}.is-checkradio[type=checkbox].is-white:checked.has-background-color+label:before{border-color:transparent!important;background-color:#fff!important}.is-checkradio[type=checkbox].is-white:checked.has-background-color+label:after{border-color:#0a0a0a!important;background-color:#fff!important}.is-checkradio[type=checkbox].is-white.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-white.is-block:hover:not([disabled])+label:before{border-color:#fff!important}.is-checkradio[type=checkbox].is-white.is-block:checked+label{color:#0a0a0a;border-color:#fff!important;background:#fff}.is-checkradio[type=checkbox].is-white.is-block:checked+label:after{border-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-white.is-block:checked:hover:not([disabled])+label{background:#f2f2f2}.is-checkradio[type=checkbox].is-white.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-white.is-block:checked:hover:not([disabled])+label:before{border-color:#000!important}.is-checkradio[type=checkbox].is-black.has-background-color+label:before{border-color:transparent!important;background-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-black:checked+label:after,.is-checkradio[type=checkbox].is-black:hover:not([disabled])+label:before{border-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-black:checked.has-background-color+label:before{border-color:transparent!important;background-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-black:checked.has-background-color+label:after{border-color:#fff!important;background-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-black.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-black.is-block:hover:not([disabled])+label:before{border-color:#0a0a0a!important}.is-checkradio[type=checkbox].is-black.is-block:checked+label{color:#fff;border-color:#0a0a0a!important;background:#0a0a0a}.is-checkradio[type=checkbox].is-black.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-black.is-block:checked:hover:not([disabled])+label{background:#000}.is-checkradio[type=checkbox].is-black.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-black.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox].is-light.has-background-color+label:before{border-color:transparent!important;background-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-light:checked+label:after,.is-checkradio[type=checkbox].is-light:hover:not([disabled])+label:before{border-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-light:checked.has-background-color+label:before{border-color:transparent!important;background-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-light:checked.has-background-color+label:after{border-color:#363636!important;background-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-light.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-light.is-block:hover:not([disabled])+label:before{border-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-light.is-block:checked+label{color:#363636;border-color:#f5f5f5!important;background:#f5f5f5}.is-checkradio[type=checkbox].is-light.is-block:checked+label:after{border-color:#363636!important}.is-checkradio[type=checkbox].is-light.is-block:checked:hover:not([disabled])+label{background:#e8e8e8}.is-checkradio[type=checkbox].is-light.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-light.is-block:checked:hover:not([disabled])+label:before{border-color:#292929!important}.is-checkradio[type=checkbox].is-dark.has-background-color+label:before{border-color:transparent!important;background-color:#363636!important}.is-checkradio[type=checkbox].is-dark:checked+label:after,.is-checkradio[type=checkbox].is-dark:hover:not([disabled])+label:before{border-color:#363636!important}.is-checkradio[type=checkbox].is-dark:checked.has-background-color+label:before{border-color:transparent!important;background-color:#363636!important}.is-checkradio[type=checkbox].is-dark:checked.has-background-color+label:after{border-color:#f5f5f5!important;background-color:#363636!important}.is-checkradio[type=checkbox].is-dark.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-dark.is-block:hover:not([disabled])+label:before{border-color:#363636!important}.is-checkradio[type=checkbox].is-dark.is-block:checked+label{color:#f5f5f5;border-color:#363636!important;background:#363636}.is-checkradio[type=checkbox].is-dark.is-block:checked+label:after{border-color:#f5f5f5!important}.is-checkradio[type=checkbox].is-dark.is-block:checked:hover:not([disabled])+label{background:#292929}.is-checkradio[type=checkbox].is-dark.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-dark.is-block:checked:hover:not([disabled])+label:before{border-color:#e8e8e8!important}.is-checkradio[type=checkbox].is-primary.has-background-color+label:before{border-color:transparent!important;background-color:#00d1b2!important}.is-checkradio[type=checkbox].is-primary:checked+label:after,.is-checkradio[type=checkbox].is-primary:hover:not([disabled])+label:before{border-color:#00d1b2!important}.is-checkradio[type=checkbox].is-primary:checked.has-background-color+label:before{border-color:transparent!important;background-color:#00d1b2!important}.is-checkradio[type=checkbox].is-primary:checked.has-background-color+label:after{border-color:#fff!important;background-color:#00d1b2!important}.is-checkradio[type=checkbox].is-primary.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-primary.is-block:hover:not([disabled])+label:before{border-color:#00d1b2!important}.is-checkradio[type=checkbox].is-primary.is-block:checked+label{color:#fff;border-color:#00d1b2!important;background:#00d1b2}.is-checkradio[type=checkbox].is-primary.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-primary.is-block:checked:hover:not([disabled])+label{background:#00b89c}.is-checkradio[type=checkbox].is-primary.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-primary.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox].is-link.has-background-color+label:before{border-color:transparent!important;background-color:#3273dc!important}.is-checkradio[type=checkbox].is-link:checked+label:after,.is-checkradio[type=checkbox].is-link:hover:not([disabled])+label:before{border-color:#3273dc!important}.is-checkradio[type=checkbox].is-link:checked.has-background-color+label:before{border-color:transparent!important;background-color:#3273dc!important}.is-checkradio[type=checkbox].is-link:checked.has-background-color+label:after{border-color:#fff!important;background-color:#3273dc!important}.is-checkradio[type=checkbox].is-link.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-link.is-block:hover:not([disabled])+label:before{border-color:#3273dc!important}.is-checkradio[type=checkbox].is-link.is-block:checked+label{color:#fff;border-color:#3273dc!important;background:#3273dc}.is-checkradio[type=checkbox].is-link.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-link.is-block:checked:hover:not([disabled])+label{background:#2366d1}.is-checkradio[type=checkbox].is-link.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-link.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox].is-info.has-background-color+label:before{border-color:transparent!important;background-color:#209cee!important}.is-checkradio[type=checkbox].is-info:checked+label:after,.is-checkradio[type=checkbox].is-info:hover:not([disabled])+label:before{border-color:#209cee!important}.is-checkradio[type=checkbox].is-info:checked.has-background-color+label:before{border-color:transparent!important;background-color:#209cee!important}.is-checkradio[type=checkbox].is-info:checked.has-background-color+label:after{border-color:#fff!important;background-color:#209cee!important}.is-checkradio[type=checkbox].is-info.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-info.is-block:hover:not([disabled])+label:before{border-color:#209cee!important}.is-checkradio[type=checkbox].is-info.is-block:checked+label{color:#fff;border-color:#209cee!important;background:#209cee}.is-checkradio[type=checkbox].is-info.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-info.is-block:checked:hover:not([disabled])+label{background:#118fe4}.is-checkradio[type=checkbox].is-info.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-info.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox].is-success.has-background-color+label:before{border-color:transparent!important;background-color:#23d160!important}.is-checkradio[type=checkbox].is-success:checked+label:after,.is-checkradio[type=checkbox].is-success:hover:not([disabled])+label:before{border-color:#23d160!important}.is-checkradio[type=checkbox].is-success:checked.has-background-color+label:before{border-color:transparent!important;background-color:#23d160!important}.is-checkradio[type=checkbox].is-success:checked.has-background-color+label:after{border-color:#fff!important;background-color:#23d160!important}.is-checkradio[type=checkbox].is-success.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-success.is-block:hover:not([disabled])+label:before{border-color:#23d160!important}.is-checkradio[type=checkbox].is-success.is-block:checked+label{color:#fff;border-color:#23d160!important;background:#23d160}.is-checkradio[type=checkbox].is-success.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-success.is-block:checked:hover:not([disabled])+label{background:#20bc56}.is-checkradio[type=checkbox].is-success.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-success.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox].is-warning.has-background-color+label:before{border-color:transparent!important;background-color:#ffdd57!important}.is-checkradio[type=checkbox].is-warning:checked+label:after,.is-checkradio[type=checkbox].is-warning:hover:not([disabled])+label:before{border-color:#ffdd57!important}.is-checkradio[type=checkbox].is-warning:checked.has-background-color+label:before{border-color:transparent!important;background-color:#ffdd57!important}.is-checkradio[type=checkbox].is-warning:checked.has-background-color+label:after{border-color:rgba(0,0,0,.7)!important;background-color:#ffdd57!important}.is-checkradio[type=checkbox].is-warning.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-warning.is-block:hover:not([disabled])+label:before{border-color:#ffdd57!important}.is-checkradio[type=checkbox].is-warning.is-block:checked+label{color:rgba(0,0,0,.7);border-color:#ffdd57!important;background:#ffdd57}.is-checkradio[type=checkbox].is-warning.is-block:checked+label:after{border-color:rgba(0,0,0,.7)!important}.is-checkradio[type=checkbox].is-warning.is-block:checked:hover:not([disabled])+label{background:#ffd83d}.is-checkradio[type=checkbox].is-warning.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-warning.is-block:checked:hover:not([disabled])+label:before{border-color:rgba(0,0,0,.7)!important}.is-checkradio[type=checkbox].is-danger.has-background-color+label:before{border-color:transparent!important;background-color:#ff3860!important}.is-checkradio[type=checkbox].is-danger:checked+label:after,.is-checkradio[type=checkbox].is-danger:hover:not([disabled])+label:before{border-color:#ff3860!important}.is-checkradio[type=checkbox].is-danger:checked.has-background-color+label:before{border-color:transparent!important;background-color:#ff3860!important}.is-checkradio[type=checkbox].is-danger:checked.has-background-color+label:after{border-color:#fff!important;background-color:#ff3860!important}.is-checkradio[type=checkbox].is-danger.is-block:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-danger.is-block:hover:not([disabled])+label:before{border-color:#ff3860!important}.is-checkradio[type=checkbox].is-danger.is-block:checked+label{color:#fff;border-color:#ff3860!important;background:#ff3860}.is-checkradio[type=checkbox].is-danger.is-block:checked+label:after{border-color:#fff!important}.is-checkradio[type=checkbox].is-danger.is-block:checked:hover:not([disabled])+label{background:#ff1f4b}.is-checkradio[type=checkbox].is-danger.is-block:checked:hover:not([disabled])+label:after,.is-checkradio[type=checkbox].is-danger.is-block:checked:hover:not([disabled])+label:before{border-color:#f2f2f2!important}.is-checkradio[type=checkbox]:indeterminate+label:after{display:inline-block;transform:rotate(90deg);border-bottom:none}.is-checkradio[type=checkbox]:indeterminate.is-white+label:after{border-color:#fff}.is-checkradio[type=checkbox]:indeterminate.is-black+label:after{border-color:#0a0a0a}.is-checkradio[type=checkbox]:indeterminate.is-light+label:after{border-color:#f5f5f5}.is-checkradio[type=checkbox]:indeterminate.is-dark+label:after{border-color:#363636}.is-checkradio[type=checkbox]:indeterminate.is-primary+label:after{border-color:#00d1b2}.is-checkradio[type=checkbox]:indeterminate.is-link+label:after{border-color:#3273dc}.is-checkradio[type=checkbox]:indeterminate.is-info+label:after{border-color:#209cee}.is-checkradio[type=checkbox]:indeterminate.is-success+label:after{border-color:#23d160}.is-checkradio[type=checkbox]:indeterminate.is-warning+label:after{border-color:#ffdd57}.is-checkradio[type=checkbox]:indeterminate.is-danger+label:after{border-color:#ff3860}.is-checkradio[type=radio]+label:before{border-radius:50%}.is-checkradio[type=radio]+label:after{border-radius:50%;background:#00d1b2;left:0;transform:scale(.5)}.is-checkradio[type=radio]:checked.has-background-color+label:after,.is-checkradio[type=radio]:checked.has-background-color+label:before{border-color:#4a4a4a!important;background-color:#4a4a4a!important}.is-checkradio[type=radio].is-rtl+label{padding-left:0}.is-checkradio[type=radio].is-rtl+label:after{left:auto;right:0}.is-checkradio[type=radio]+label{font-size:1rem;line-height:1.5rem;padding-left:2rem}.is-checkradio[type=radio]+label:after,.is-checkradio[type=radio]+label:before{width:1.5rem;height:1.5rem}.is-checkradio[type=radio].is-rtl+label{padding-right:2rem}.is-checkradio[type=radio].is-small+label{font-size:.75rem;line-height:1.125rem;padding-left:1.5rem}.is-checkradio[type=radio].is-small+label:after,.is-checkradio[type=radio].is-small+label:before{width:1.125rem;height:1.125rem}.is-checkradio[type=radio].is-small.is-rtl+label{padding-right:1.5rem}.is-checkradio[type=radio].is-medium+label{font-size:1.25rem;line-height:1.875rem;padding-left:2.5rem}.is-checkradio[type=radio].is-medium+label:after,.is-checkradio[type=radio].is-medium+label:before{width:1.875rem;height:1.875rem}.is-checkradio[type=radio].is-medium.is-rtl+label{padding-right:2.5rem}.is-checkradio[type=radio].is-large+label{font-size:1.5rem;line-height:2.25rem;padding-left:3rem}.is-checkradio[type=radio].is-large+label:after,.is-checkradio[type=radio].is-large+label:before{width:2.25rem;height:2.25rem}.is-checkradio[type=radio].is-large.is-rtl+label{padding-right:3rem}.is-checkradio[type=radio].is-white.has-background-color+label:before{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-white:hover:not([disabled])+label:before{border-color:#fff!important}.is-checkradio[type=radio].is-white:checked+label:after,.is-checkradio[type=radio].is-white:checked.has-background-color+label:before{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-black.has-background-color+label:before,.is-checkradio[type=radio].is-white:checked.has-background-color+label:after{border-color:#0a0a0a!important;background-color:#0a0a0a!important}.is-checkradio[type=radio].is-black:hover:not([disabled])+label:before{border-color:#0a0a0a!important}.is-checkradio[type=radio].is-black:checked+label:after,.is-checkradio[type=radio].is-black:checked.has-background-color+label:before{border-color:#0a0a0a!important;background-color:#0a0a0a!important}.is-checkradio[type=radio].is-black:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-light.has-background-color+label:before{border-color:#f5f5f5!important;background-color:#f5f5f5!important}.is-checkradio[type=radio].is-light:hover:not([disabled])+label:before{border-color:#f5f5f5!important}.is-checkradio[type=radio].is-light:checked+label:after,.is-checkradio[type=radio].is-light:checked.has-background-color+label:before{border-color:#f5f5f5!important;background-color:#f5f5f5!important}.is-checkradio[type=radio].is-dark.has-background-color+label:before,.is-checkradio[type=radio].is-light:checked.has-background-color+label:after{border-color:#363636!important;background-color:#363636!important}.is-checkradio[type=radio].is-dark:hover:not([disabled])+label:before{border-color:#363636!important}.is-checkradio[type=radio].is-dark:checked+label:after,.is-checkradio[type=radio].is-dark:checked.has-background-color+label:before{border-color:#363636!important;background-color:#363636!important}.is-checkradio[type=radio].is-dark:checked.has-background-color+label:after{border-color:#f5f5f5!important;background-color:#f5f5f5!important}.is-checkradio[type=radio].is-primary.has-background-color+label:before{border-color:#00d1b2!important;background-color:#00d1b2!important}.is-checkradio[type=radio].is-primary:hover:not([disabled])+label:before{border-color:#00d1b2!important}.is-checkradio[type=radio].is-primary:checked+label:after,.is-checkradio[type=radio].is-primary:checked.has-background-color+label:before{border-color:#00d1b2!important;background-color:#00d1b2!important}.is-checkradio[type=radio].is-primary:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-link.has-background-color+label:before{border-color:#3273dc!important;background-color:#3273dc!important}.is-checkradio[type=radio].is-link:hover:not([disabled])+label:before{border-color:#3273dc!important}.is-checkradio[type=radio].is-link:checked+label:after,.is-checkradio[type=radio].is-link:checked.has-background-color+label:before{border-color:#3273dc!important;background-color:#3273dc!important}.is-checkradio[type=radio].is-link:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-info.has-background-color+label:before{border-color:#209cee!important;background-color:#209cee!important}.is-checkradio[type=radio].is-info:hover:not([disabled])+label:before{border-color:#209cee!important}.is-checkradio[type=radio].is-info:checked+label:after,.is-checkradio[type=radio].is-info:checked.has-background-color+label:before{border-color:#209cee!important;background-color:#209cee!important}.is-checkradio[type=radio].is-info:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-success.has-background-color+label:before{border-color:#23d160!important;background-color:#23d160!important}.is-checkradio[type=radio].is-success:hover:not([disabled])+label:before{border-color:#23d160!important}.is-checkradio[type=radio].is-success:checked+label:after,.is-checkradio[type=radio].is-success:checked.has-background-color+label:before{border-color:#23d160!important;background-color:#23d160!important}.is-checkradio[type=radio].is-success:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}.is-checkradio[type=radio].is-warning.has-background-color+label:before{border-color:#ffdd57!important;background-color:#ffdd57!important}.is-checkradio[type=radio].is-warning:hover:not([disabled])+label:before{border-color:#ffdd57!important}.is-checkradio[type=radio].is-warning:checked+label:after,.is-checkradio[type=radio].is-warning:checked.has-background-color+label:before{border-color:#ffdd57!important;background-color:#ffdd57!important}.is-checkradio[type=radio].is-warning:checked.has-background-color+label:after{border-color:rgba(0,0,0,.7)!important;background-color:rgba(0,0,0,.7)!important}.is-checkradio[type=radio].is-danger.has-background-color+label:before{border-color:#ff3860!important;background-color:#ff3860!important}.is-checkradio[type=radio].is-danger:hover:not([disabled])+label:before{border-color:#ff3860!important}.is-checkradio[type=radio].is-danger:checked+label:after,.is-checkradio[type=radio].is-danger:checked.has-background-color+label:before{border-color:#ff3860!important;background-color:#ff3860!important}.is-checkradio[type=radio].is-danger:checked.has-background-color+label:after{border-color:#fff!important;background-color:#fff!important}", ""]);
// Exports
module.exports = exports;


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

/***/ "719f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (max-width:1023px){-ms-input-placeholder-color:#fff;::-webkit-input-placeholder{color:#fff}::-moz-placeholder{color:#fff}:-ms-input-placeholder{color:#fff}::-ms-input-placeholder{color:#fff}::placeholder{color:#fff}.type-question .field label{color:#fff}.type-question input[type=email],.type-question input[type=number],.type-question input[type=tel],.type-question input[type=text],.type-question textarea{background-color:transparent;color:#fff}.title-question{color:#fff}.content-button-nav button{background:#fff;color:#009cde;box-shadow:4px 5px 0 #0a729e}.options.radio .option{border:1px solid #fff;color:#fff}.options.radio .option.active{background-color:#fff;color:#009cde}}@media screen and (min-width:1024px){.all-questions{padding:20px;border:3px dashed rgba(0,156,222,.18);border-radius:10px}.title-question{color:#009cde}.content-button-nav button{background:#009cde;color:#fff;box-shadow:4px 5px 0 #0a729e}.options.radio .option{border:1px solid #009cde;color:#009cde}.options.radio .option.active{background-color:#009cde;color:#fff}}.title-question{text-align:center;font-weight:700;font-size:1.5em}#report-container{display:-webkit-box;transition:all .3s ease}#report-container .question{display:flex;width:100%;padding:100px 10px;flex-direction:column;align-items:center;justify-content:center}.options{display:flex;margin-top:20px}.options .option{cursor:pointer}.options.checkbox{flex-direction:column}.options.radio .option{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;font-weight:700;margin:0 10px;transition:all .3s ease}.all-questions{overflow:hidden;max-width:600px;margin:auto;position:relative}.content-button-nav{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:30px;padding:5px}.content-button-nav.full{grid-template-columns:repeat(1,1fr)}.content-button-nav button{font-weight:700;border:none;padding:5px 0;border-radius:4px;transition:all .3s ease;outline:none;cursor:pointer}.content-button-nav button:disabled{-webkit-filter:grayscale(1);filter:grayscale(1);opacity:.2}.content-button-nav button:active{transform:scale(.9)}.type-question{width:100%;display:flex;align-items:center;justify-content:center}.type-question input[type=email],.type-question input[type=number],.type-question input[type=tel],.type-question input[type=text],.type-question select,.type-question textarea{width:100%;border:none;border-bottom:1px solid #d2edfa;padding:5px 10px;text-align:center;margin-top:20px;outline:none;background-color:transparent}.is-checkradio[type=checkbox]:hover:not([disabled])+label:before,.is-checkradio[type=radio]:hover:not([disabled])+label:before{outline:none}", ""]);
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

/***/ }),

/***/ "ad66":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Report.vue?vue&type=template&id=41e17d6c&lang=pug&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"section-home"},[_c('div',{staticClass:"container-fluid"},[_c('start-report')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Report.vue?vue&type=template&id=41e17d6c&lang=pug&shadow

// EXTERNAL MODULE: ./src/sass/views/introduction.sass
var introduction = __webpack_require__("97be");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"34c12566-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartReport.vue?vue&type=template&id=86275192&lang=pug&
var StartReportvue_type_template_id_86275192_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"all-questions"},[(!_vm.sended)?_c('div',{attrs:{"id":"report-container"}},_vm._l((_vm.questions),function(question,i){return _c('div',{key:i,staticClass:"question"},[_c('div',{staticClass:"title-question"},[_vm._v(_vm._s(question.title))]),(question.type === 'select')?_c('div',{staticClass:"type-question"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(question.value),expression:"question.value"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(question, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},_vm.next]}},[_c('option',{attrs:{"disabled":""},domProps:{"value":null}},[_vm._v("Choose a option")]),_vm._l((question.options),function(option,j){return _c('option',{domProps:{"value":option.value}},[_vm._v(_vm._s(option.label))])})],2)]):_vm._e(),(question.type === 'radio')?_c('div',{staticClass:"type-question"},[_c('div',{staticClass:"options",class:question.type},_vm._l((question.options),function(option,j){return _c('div',{staticClass:"option",class:{ 'active' : option.value === question.value },on:{"click":function($event){return _vm.setValue(question, option.value)}}},[_vm._v(_vm._s(option.label))])}),0)]):_vm._e(),(question.type === 'checkbox')?_c('div',{staticClass:"type-question"},[_c('div',{staticClass:"options",class:question.type},_vm._l((question.options),function(option,j){return _c('div',{staticClass:"field"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(question.value),expression:"question.value"}],staticClass:"is-checkradio",attrs:{"id":'check-' + question.id + j,"type":"checkbox"},domProps:{"value":option.value,"checked":Array.isArray(question.value)?_vm._i(question.value,option.value)>-1:(question.value)},on:{"change":function($event){var $$a=question.value,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=option.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(question, "value", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(question, "value", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(question, "value", $$c)}}}}),_c('label',{attrs:{"for":'check-' + question.id + j}},[_vm._v(_vm._s(option.label))])])}),0)]):_vm._e(),(_vm.checkTypeString(question.type))?_c('div',{staticClass:"type-question"},[((question.type)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(question.value),expression:"question.value"}],attrs:{"placeholder":"Type here...","type":"checkbox"},domProps:{"checked":Array.isArray(question.value)?_vm._i(question.value,null)>-1:(question.value)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.next($event)},"change":function($event){var $$a=question.value,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(question, "value", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(question, "value", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(question, "value", $$c)}}}}):((question.type)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(question.value),expression:"question.value"}],attrs:{"placeholder":"Type here...","type":"radio"},domProps:{"checked":_vm._q(question.value,null)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.next($event)},"change":function($event){return _vm.$set(question, "value", null)}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(question.value),expression:"question.value"}],attrs:{"placeholder":"Type here...","type":question.type},domProps:{"value":(question.value)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.next($event)},"input":function($event){if($event.target.composing){ return; }_vm.$set(question, "value", $event.target.value)}}})]):_vm._e(),(question.type === 'textarea')?_c('div',{staticClass:"type-question",model:{value:(question.value),callback:function ($$v) {_vm.$set(question, "value", $$v)},expression:"question.value"}},[_c('textarea',{attrs:{"placeholder":"Type here..."}})]):_vm._e()])}),0):_c('div',{staticClass:"send"},[_c('div',{staticClass:"title-question"},[_vm._v("Your report has been sent, thanks for contributing")]),_c('div',{staticClass:"content-button-nav full"},[_c('button',{on:{"click":_vm.handleReport}},[_vm._v("Back")])])]),(!_vm.sended)?_c('div',{staticClass:"content-button-nav"},[_c('button',{attrs:{"disabled":_vm.step <= 1},on:{"click":_vm.prev}},[_vm._v("Prev")]),_c('button',{on:{"click":_vm.next}},[_vm._v("Next")])]):_vm._e()])}
var StartReportvue_type_template_id_86275192_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StartReport.vue?vue&type=template&id=86275192&lang=pug&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./src/sass/views/report.sass
var report = __webpack_require__("cbf4");

// EXTERNAL MODULE: ./node_modules/bulma-checkradio/dist/css/bulma-checkradio.min.css
var bulma_checkradio_min = __webpack_require__("10ec");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__("2ef0");
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);

// EXTERNAL MODULE: ./node_modules/gsap/gsap-core.js
var gsap_core = __webpack_require__("a5cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartReport.vue?vue&type=script&lang=js&



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
//
//
//
//
//
//
//






/* harmony default export */ var StartReportvue_type_script_lang_js_ = ({
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

  computed: Object(objectSpread2["a" /* default */])({
    stepsLeft() {
      return this.questions.length;
    }

  }, Object(vuex_esm["a" /* mapGetters */])(["getCurve"])),
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
      var vm = this;
      axios_default.a.get("https://api.covtraca.org/v1/questions").then(res => {
        vm.questions = res.data.data;

        lodash_default.a.forEach(vm.questions, q => {
          var val = JSON.parse(q.value);
          var opts = JSON.parse(q.options);
          q.options = opts;
          q.value = val;
        });
      });
    },

    sendReport() {
      var vm = this;

      lodash_default.a.forEach(vm.questions, q => {
        vm.user_report.answer.push({
          id: q.id,
          value: q.value
        });
      });

      var ans = JSON.stringify(vm.user_report.answer);
      vm.user_report.answer = ans;
      axios_default.a.post("https://api.covtraca.org/v1/reports", vm.user_report).then(() => {
        vm.sended = true;
      });
    },

    handleReport() {
      this.$store.dispatch("handleReport");
    },

    prev() {
      var vm = this;

      if (vm.step > 1) {
        vm.step--;
        document.getElementById("report-container").style.transform = `translateX(calc(-100% * ${vm.step - 1})`;
      }
    },

    next() {
      var vm = this;

      if (vm.step < vm.stepsLeft) {
        vm.step++;
        document.getElementById("report-container").style.transform = `translateX(calc(-100% * ${vm.step - 1})`;
      } else {
        vm.sendReport();
        document.getElementById("report-container").style.transform = `translateX(calc(0%)`;
      }
    },

    getLocation() {
      var vm = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(vm.showPosition);
      } else {
        vm.$store.dispatch("handleToast");
        setTimeout(() => {
          vm.$store.dispatch("handleToast");
        }, 3000);
        this.$store.dispatch("setMessage", "Geolocation is not supported by this browser.");
      }
    },

    showPosition(position) {
      var vm = this;
      vm.user_report.lat = position.coords.latitude;
      vm.user_report.long = position.coords.longitude;
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

    this.getQuestions();
    this.getLocation();
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
// CONCATENATED MODULE: ./src/components/StartReport.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StartReportvue_type_script_lang_js_ = (StartReportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/StartReport.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_StartReportvue_type_script_lang_js_,
  StartReportvue_type_template_id_86275192_lang_pug_render,
  StartReportvue_type_template_id_86275192_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var StartReport = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--11-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Report.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//


/* harmony default export */ var Reportvue_type_script_lang_js_shadow = ({
  components: {
    StartReport: StartReport
  },

  mounted() {
    this.$store.dispatch("handleReport");
  }

});
// CONCATENATED MODULE: ./src/views/Report.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var views_Reportvue_type_script_lang_js_shadow = (Reportvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/views/Report.vue?shadow





/* normalize component */

var Reportshadow_component = Object(componentNormalizer["a" /* default */])(
  views_Reportvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Reportshadow = __webpack_exports__["default"] = (Reportshadow_component.exports);

/***/ }),

/***/ "cbf4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("719f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("74b66911", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=cov_build.5.js.map