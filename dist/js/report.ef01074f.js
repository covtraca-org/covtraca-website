(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["report"],{"10ec":function(e,t,n){},"762c":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"section-home"},[n("div",{staticClass:"container-fluid"},[n("start-report")],1)])},a=[],o=(n("97be"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"all-questions"},[e.sended?n("div",{staticClass:"send"},[n("div",{staticClass:"title-question"},[e._v("Your report has been sent, thanks for contributing")]),n("div",{staticClass:"content-button-nav full"},[n("button",{on:{click:e.handleReport}},[e._v(e._s(e.$t("backButton")))])])]):n("div",{attrs:{id:"report-container"}},e._l(e.questions,(function(t,s){return n("div",{key:s,staticClass:"question"},[n("div",{staticClass:"title-question"},[e._v(e._s(e.$t(t.i18n))+" ")]),"select"===t.type?n("div",{staticClass:"type-question"},[n("div",{staticClass:"options",class:t.type},e._l(t.options,(function(s,a){return n("div",{staticClass:"option",class:{"is-large-text":s.label.length>4,active:s.value===t.value},on:{click:function(n){return e.setValue(t,s.value)}}},[e._v(e._s(e.$t(s.i18n)))])})),0)]):e._e(),"checkbox"===t.type?n("div",{staticClass:"type-question"},[n("div",{staticClass:"options",class:t.type},e._l(t.options,(function(s,a){return n("div",{staticClass:"field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"question.value"}],staticClass:"is-checkradio",attrs:{id:"check-"+t.id+a,type:"checkbox"},domProps:{value:s.id,checked:Array.isArray(t.value)?e._i(t.value,s.id)>-1:t.value},on:{change:function(n){var a=t.value,o=n.target,i=!!o.checked;if(Array.isArray(a)){var r=s.id,c=e._i(a,r);o.checked?c<0&&e.$set(t,"value",a.concat([r])):c>-1&&e.$set(t,"value",a.slice(0,c).concat(a.slice(c+1)))}else e.$set(t,"value",i)}}}),n("label",{attrs:{for:"check-"+t.id+a}},[e._v(e._s(e.$t(s.i18n)))])])})),0)]):e._e(),e.checkTypeString(t.type)?n("div",{staticClass:"type-question"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"question.value"}],attrs:{placeholder:"Type here...",type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next(t)},change:function(n){var s=t.value,a=n.target,o=!!a.checked;if(Array.isArray(s)){var i=null,r=e._i(s,i);a.checked?r<0&&e.$set(t,"value",s.concat([i])):r>-1&&e.$set(t,"value",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(t,"value",o)}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"question.value"}],attrs:{placeholder:"Type here...",type:"radio"},domProps:{checked:e._q(t.value,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next(t)},change:function(n){return e.$set(t,"value",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"question.value"}],attrs:{placeholder:"Type here...",type:t.type},domProps:{value:t.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.next(t)},input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}})]):e._e(),"textarea"===t.type?n("div",{staticClass:"type-question",model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"question.value"}},[n("textarea",{attrs:{placeholder:"Type here..."}})]):e._e()])})),0),e.sended?e._e():n("div",{staticClass:"content-button-nav"},[n("button",{attrs:{disabled:e.step<=1},on:{click:e.prev}},[e._v(e._s(e.$t("prevButton")))]),n("button",{on:{click:e.next}},[e._v(e._s(e.$t("nextButton")))])])])}),i=[],r=(n("4160"),n("159b"),n("5530")),c=(n("cbf4"),n("10ec"),n("bc3a")),u=n.n(c),l=n("2ef0"),d=n.n(l),p=n("a5cf"),v=n("2f62"),h={data:function(){return{newCurve:null,questions:[],step:1,sended:!1,user_report:{answer:[],lat:"",long:""}}},computed:Object(r["a"])({stepsLeft:function(){return this.questions.length}},Object(v["b"])(["getCurve"])),methods:{checkTypeString:function(e){switch(e){case"text":case"number":case"email":case"tel":return!0;default:return!1}},setValue:function(e,t){e.value=t,this.next()},getQuestions:function(){var e=this;u.a.get("https://api.covtraca.org/v1/questions").then((function(t){e.questions=t.data.data,d.a.forEach(e.questions,(function(e){"checkbox"==e.type?e["value"]=[]:e["value"]="";var t=JSON.parse(e.options);e.options=t}))}))},sendReport:function(){var e=this;d.a.forEach(e.questions,(function(t){e.user_report.answer.push({id:t.id,value:t.value})}));var t=JSON.stringify(e.user_report.answer);e.user_report.answer=t,u.a.post("https://api.covtraca.org/v1/reports",e.user_report).then((function(){e.sended=!0}))},handleReport:function(){this.$store.dispatch("handleReport")},prev:function(){var e=this;e.step>1&&(e.step--,document.getElementById("report-container").style.transform="translateX(calc(-100% * ".concat(e.step-1,")"))},next:function(){var e=this;e.step<e.stepsLeft?(e.step++,document.getElementById("report-container").style.transform="translateX(calc(-100% * ".concat(e.step-1,")")):(e.sendReport(),document.getElementById("report-container").style.transform="translateX(calc(0%)")},getLocation:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(e.showPosition):(e.$store.dispatch("handleToast"),setTimeout((function(){e.$store.dispatch("handleToast")}),3e3),this.$store.dispatch("setMessage","Geolocation is not supported by this browser."))},showPosition:function(e){var t=this;t.user_report.lat=e.coords.latitude,t.user_report.long=e.coords.longitude}},mounted:function(){window.innerWidth>1023&&(this.getCurve.pause(),this.newCurve=new p["d"],this.newCurve.to(".curve",1,{left:"-70%",top:"-50%",scale:3,ease:p["b"].ease})),this.getQuestions(),this.getLocation()},destroyed:function(){var e=this;window.innerWidth>1023&&(setTimeout((function(){e.getCurve.resume()}),1100),e.newCurve.to(".curve",1,{left:"0%",top:"-5%",scale:1,ease:p["b"].ease}))}},f=h,y=n("2877"),m=Object(y["a"])(f,o,i,!1,null,null,null),k=m.exports,_={components:{StartReport:k},mounted:function(){this.$store.dispatch("handleReport")}},g=_,b=Object(y["a"])(g,s,a,!1,null,null,null);t["default"]=b.exports},cbf4:function(e,t,n){}}]);
//# sourceMappingURL=report.ef01074f.js.map