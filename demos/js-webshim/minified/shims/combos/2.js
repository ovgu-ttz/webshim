(function(a){var c=window.Modernizr,l=a.webshims,f=l.bugs,o=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),h=function(){if(o[0].querySelector)try{f.findRequired=!o[0].querySelector("select:required")}catch(a){f.findRequired=!1}};f.findRequired=!1;f.validationMessage=!1;f.valueAsNumberSet=!1;l.capturingEventPrevented=function(c){if(!c._isPolyfilled){var d=c.isDefaultPrevented,
f=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return f.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!d.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!c.formvalidation||f.bustedValidity)h();else if(l.capturingEvents(["input"]),l.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var d=a("input",o).eq(0),n,A=function(a){l.loader.loadList(["dom-extend"]);l.ready("dom-extend",a)},s=function(f){var h=["form-extend","form-message","form-native-fix"];f&&(f.preventDefault(),f.stopImmediatePropagation());clearTimeout(n);setTimeout(function(){o&&(o.remove(),o=d=null)},9);if(!c.bugfreeformvalidation)l.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),l.modules["form-extend"].test=a.noop;l.isReady("form-number-date-api")&&
h.push("form-number-date-api");l.reTest(h);if(d)try{d.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&A(function(){l.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(c){!c&&this&&a.prop(this,"value",a.prop(this,"value"))}});l.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(c){if(!c&&this)c=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(c)}})})}catch(u){}(a.browser.opera||window.testGoodWithFix)&&
A(function(){var c=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(d){var f=l.defineNodeNameProperty(d,"checkValidity",{prop:{value:function(){l.fromSubmit||a(this).bind("invalid.checkvalidity",c);l.fromCheckValidity=!0;var b=f.prop._supvalue.apply(this,arguments);l.fromSubmit||a(this).unbind("invalid.checkvalidity",c);l.fromCheckValidity=!1;return b}}})})})};o.appendTo("head");if(window.opera||window.testGoodWithFix){h();f.validationMessage=!d.prop("validationMessage");
if((c.inputtypes||{}).date){try{d.prop("valueAsNumber",0)}catch(u){}f.valueAsNumberSet="1970-01-01"!=d.prop("value")}d.prop("value","")}o.bind("submit",function(a){c.bugfreeformvalidation=!1;s(a)});n=setTimeout(function(){o&&o.triggerHandler("submit")},9);a("input, select",o).bind("invalid",s).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,l,f,o,h){var d={radio:1},n={checkbox:1,radio:1},A=a([]),s=c.bugs,u=function(b){var b=a(b),g,c;g=A;if(d[b[0].type])c=b.prop("form"),g=(g=b[0].name)?c?a(c[g]):a(f.getElementsByName(g)).filter(function(){return!a.prop(this,"form")}):b,g=g.filter('[type="radio"]');return g},t=c.getContentValidationMessage=function(b,g,c){var i=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";c&&i[c]&&(i=i[c]);"object"==typeof i&&(g=g||a.prop(b,"validity")||
{valid:1},g.valid||a.each(g,function(a,b){if(b&&"valid"!=a&&i[a])return i=i[a],!1}));if("object"==typeof i)i=i.defaultMessage;return i||""},p={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,
"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!p[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!p[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=a.expr.filters[b+"-element"]});a.expr.filters.focus=function(a){try{var g=
a.ownerDocument;return a===g.activeElement&&(!g.hasFocus||g.hasFocus())}catch(c){}return!1};var w=a.event.customEvent||{};(s.bustedValidity||s.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,g=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,i=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,g=function(g){var j=arguments,j=a.call(j,1,j.length);j.unshift(g.replace(c,i));return b.apply(this,
j)},x;for(x in b)b.hasOwnProperty(x)&&(g[x]=b[x]);return g}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",f.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,i);return g.call(this,a,b)}}();var y=a.prop,C={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,g,c){var i=y.apply(this,arguments);if(b&&"form"in b&&C[g]&&c!==o&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==g&&c&&u(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return i};var q=function(b,g){var c;a.each(b,function(b,v){if(v)return c="customError"==b?a.prop(g,"validationMessage"):b,!1});return c};a(f).bind(h.validityUIEvents||"focusout change refreshvalidityui",function(b){var g,c;if(b.target&&(g=a(b.target).getNativeElement()[0],"submit"!=g.type&&a.prop(g,"willValidate"))){c=a.data(g,"webshimsswitchvalidityclass");var i=function(){var c=a.prop(g,"validity"),j=a(g).getShadowElement(),
k,z,r,m;a(g).trigger("refreshCustomValidityRules");c.valid?j.hasClass("form-ui-valid")||(k="form-ui-valid",z="form-ui-invalid",m="changedvaliditystate",r="changedvalid",n[g.type]&&g.checked&&u(g).not(g).removeClass(z).addClass(k).removeAttr("aria-invalid"),a.removeData(g,"webshimsinvalidcause")):(c=q(c,g),a.data(g,"webshimsinvalidcause")!=c&&(a.data(g,"webshimsinvalidcause",c),m="changedvaliditystate"),j.hasClass("form-ui-invalid")||(k="form-ui-invalid",z="form-ui-valid",n[g.type]&&!g.checked&&u(g).not(g).removeClass(z).addClass(k),
r="changedinvalid"));k&&(j.addClass(k).removeClass(z),setTimeout(function(){a(g).trigger(r)},0));m&&setTimeout(function(){a(g).trigger(m)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?i():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(i,9))}});w.changedvaliditystate=!0;w.refreshCustomValidityRules=!0;w.changedvalid=!0;w.changedinvalid=!0;w.refreshvalidityui=!0;c.triggerInlineForm=function(b,g){a(b).trigger(g)};c.modules["form-core"].getGroupElements=
u;s=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==f.compatMode?a(f.body):a(f.documentElement)};s();c.ready("DOM",s);c.getRelOffset=function(b,g){var b=a(b),c=a(g).offset(),i;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=b.offset()});c.top-=i.top;c.left-=i.left;return c};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",g,k=!1,i=!1,v,j={hideDelay:5E3,showFor:function(b,c,r,m){j._create();var b=a(b),B=
a(b).getShadowElement(),d=j.getOffsetFromBody(B);j.clear();m?this.hide():(this.getMessage(b,c),this.position(B,d),g.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(k=setTimeout(v,this.hideDelay)),a(l).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(i);i=setTimeout(function(){j.position(B)},9)}));r||this.setFocus(B,d)},getOffsetFromBody:function(a){return c.getRelOffset(g,a)},setFocus:function(j,
k){var r=a(j).getShadowFocusElement(),m=c.scrollRoot.scrollTop(),i=(k||r.offset()).top-30,d;c.getID&&"label"==b&&g.attr("for",c.getID(r));m>i&&(c.scrollRoot.animate({scrollTop:i-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(m-i)),80)}),d=!0);try{r[0].focus()}catch(h){}d&&(c.scrollRoot.scrollTop(m),setTimeout(function(){c.scrollRoot.scrollTop(m)},0));setTimeout(function(){a(f).bind("focusout.validityalert",v)},10)},getMessage:function(b,c){c||(c=t(b[0])||b.prop("validationMessage"));c?a("span.va-box",
g).text(c):this.hide()},position:function(b,c){c=c?a.extend({},c):j.getOffsetFromBody(b);c.top+=b.outerHeight();g.css(c)},show:function(){"none"===g.css("display")&&g.css({opacity:0}).show();g.addClass("va-visible").fadeTo(400,1)},hide:function(){g.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(k);a(f).unbind(".validityalert");a(l).unbind(".validityalert");g.stop().removeAttr("for")},_create:function(){if(!g)g=j.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){g.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&g.bgIframe()})}};v=a.proxy(j,"hide");return j}();(function(){var b,c=[],k;a(f).bind("invalid",function(i){if(!i.wrongWebkitInvalid){var d=a(i.target),j=d.getShadowElement();j.hasClass("form-ui-invalid")||(j.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=i.isDefaultPrevented,j=a.Event("firstinvalidsystem"),a(f).triggerHandler(j,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),d.trigger(b);b&&b.isDefaultPrevented()&&i.preventDefault();c.push(i.target);i.extraData="fix";clearTimeout(k);k=setTimeout(function(){var j={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(i.target).trigger(j,j)},9);j=d=null}})})();a.fn.getErrorMessage=function(){var b="",
c=this[0];c&&(b=t(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};h.replaceValidationUI&&c.ready("DOM forms",function(){a(f).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
jQuery.webshims.register("form-message",function(a,c,l,f,o,h){var d=c.validityMessages,l=h.overrideMessages||h.customMessages?["customValidationMessage"]:[];d.en=a.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},
stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},d.en||d["en-US"]||{});["select","radio"].forEach(function(a){d.en.valueMissing[a]="Please select an option."});["date","time","datetime-local"].forEach(function(a){d.en.rangeUnderflow[a]="Value must be at or after {%min}."});["date",
"time","datetime-local"].forEach(function(a){d.en.rangeOverflow[a]="Value must be at or before {%max}."});d["en-US"]=d["en-US"]||d.en;d[""]=d[""]||d["en-US"];d.de=a.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},
rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",
checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},d.de||{});["select","radio"].forEach(function(a){d.de.valueMissing[a]="Bitte w\u00e4hlen Sie eine Option aus"});["date","time","datetime-local"].forEach(function(a){d.de.rangeUnderflow[a]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."});["date","time","datetime-local"].forEach(function(a){d.de.rangeOverflow[a]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});
var n=d[""];c.createValidationMessage=function(c,d){var f=n[d];f&&"string"!==typeof f&&(f=f[a.prop(c,"type")]||f[(c.nodeName||"").toLowerCase()]||f.defaultMessage);f&&"value,min,max,title,maxlength,label".split(",").forEach(function(d){if(-1!==f.indexOf("{%"+d)){var h=("label"==d?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.attr(c,d))||"";f=f.replace("{%"+d+"}",h);"value"==d&&(f=f.replace("{%valueLen}",h.length))}});return f||""};(c.bugs.validationMessage||!Modernizr.formvalidation||
c.bugs.bustedValidity)&&l.push("validationMessage");c.activeLang({langObj:d,module:"form-core",callback:function(a){n=a}});l.forEach(function(d){c.defineNodeNamesProperty(["fieldset","output","button"],d,{prop:{value:"",writeable:!1}});["input","select","textarea"].forEach(function(f){var h=c.defineNodeNameProperty(f,d,{prop:{get:function(){var d=this,f="";if(!a.prop(d,"willValidate"))return f;var n=a.prop(d,"validity")||{valid:1};if(n.valid||(f=c.getContentValidationMessage(d,n)))return f;if(n.customError&&
d.nodeName&&(f=Modernizr.formvalidation&&!c.bugs.bustedValidity&&h.prop._supget?h.prop._supget.call(d):c.data(d,"customvalidationMessage")))return f;a.each(n,function(a,h){if("valid"!=a&&h&&(f=c.createValidationMessage(d,a)))return!1});return f||""},writeable:!1}})})})});
(!Modernizr.formvalidation||jQuery.webshims.bugs.bustedValidity)&&jQuery.webshims.register("form-extend",function(a,c,l,f){c.inputTypes=c.inputTypes||{};var o=c.cfg.forms,h,d=c.inputTypes,n={radio:1,checkbox:1};c.addInputType=function(a,c){d[a]=c};var A={customError:!1,typeMismatch:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,tooLong:!1,patternMismatch:!1,valueMissing:!1,valid:!0},s={valueMissing:function(b,g,k){if(!b.prop("required"))return!1;var d=!1;if(!("type"in k))k.type=(b[0].getAttribute("type")||
b[0].type||"").toLowerCase();if("select"==k.nodeName){if(g=!g)if(!(g=0>b[0].selectedIndex))b=b[0],g="select-one"==b.type&&2>b.size?!!a("> option:first-child",b).prop("selected"):!1;b=g}else b=n[k.type]?"checkbox"==k.type?!b.is(":checked"):!c.modules["form-core"].getGroupElements(b).filter(":checked")[0]:!g;return b},tooLong:function(){return!1},typeMismatch:function(a,c,k){if(""===c||"select"==k.nodeName)return!1;var i=!1;if(!("type"in k))k.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();
if(d[k.type]&&d[k.type].mismatch)i=d[k.type].mismatch(c,a);else if("validity"in a[0])i=a[0].validity.typeMismatch;return i},patternMismatch:function(a,g,k){if(""===g||"select"==k.nodeName)return!1;a=a.attr("pattern");if(!a)return!1;try{a=RegExp("^(?:"+a+")$")}catch(d){c.error('invalid pattern value: "'+a+'" | '+d),a=!1}return!a?!1:!a.test(g)}};c.addValidityRule=function(a,c){s[a]=c};a.event.special.invalid={add:function(){a.event.special.invalid.setup.call(this.form||this)},setup:function(){var b=
this.form||this;if(!a.data(b,"invalidEventShim")&&(a(b).data("invalidEventShim",!0).bind("submit",a.event.special.invalid.handler),c.moveToFirstEvent(b,"submit"),c.bugs.bustedValidity&&a.nodeName(b,"form"))){var g=b.getAttribute("novalidate");b.setAttribute("novalidate","novalidate");c.data(b,"bustedNoValidate",null==g?null:g)}},teardown:a.noop,handler:function(b){if(!("submit"!=b.type||b.testedValidity||!b.originalEvent||!a.nodeName(b.target,"form")||a.prop(b.target,"noValidate"))){h=!0;b.testedValidity=
!0;if(!a(b.target).checkValidity())return b.stopImmediatePropagation(),h=!1;h=!1}}};var u=function(b){if(!a.support.submitBubbles&&b&&"object"==typeof b&&!b._submit_attached)a.event.add(b,"submit._submit",function(a){a._submit_bubble=!0}),b._submit_attached=!0};if(!a.support.submitBubbles&&a.event.special.submit)a.event.special.submit.setup=function(){if(a.nodeName(this,"form"))return!1;a.event.add(this,"click._submit keypress._submit",function(b){b=b.target;b=a.nodeName(b,"input")||a.nodeName(b,
"button")?a.prop(b,"form"):void 0;u(b)})};a.event.special.submit=a.event.special.submit||{setup:function(){return!1}};var t=a.event.special.submit.setup;a.extend(a.event.special.submit,{setup:function(){a.nodeName(this,"form")?a(this).bind("invalid",a.noop):a("form",this).bind("invalid",a.noop);return t.apply(this,arguments)}});a(l).bind("invalid",a.noop);c.addInputType("email",{mismatch:function(){var a=o.emailReg||/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return function(c){return!a.test(c)}}()});
c.addInputType("url",{mismatch:function(){var a=o.urlReg||/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(c){return!a.test(c)}}()});c.defineNodeNameProperty("input","type",{prop:{get:function(){var a=(this.getAttribute("type")||"").toLowerCase();return c.inputTypes[a]?a:this.type}}});c.defineNodeNamesProperties(["button","fieldset","output"],{checkValidity:{value:function(){return!0}},willValidate:{value:!1},setCustomValidity:{value:a.noop},validity:{writeable:!1,get:function(){return a.extend({},A)}}},"prop");var p=function(b){var g,k=a.prop(b,"validity");if(k)a.data(b,"cachedValidity",
k);else return!0;if(!k.valid){g=a.Event("invalid");var d=a(b).trigger(g);if(h&&!p.unhandledInvalids&&!g.isDefaultPrevented())c.validityAlert.showFor(d),p.unhandledInvalids=!0}a.removeData(b,"cachedValidity");return k.valid},w=/^(?:select|textarea|input)/i;c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){var b=!0,g=a(a.prop(this,"elements")).filter(function(){if(!w.test(this.nodeName))return!1;var a=c.data(this,"shadowData");return!a||!a.nativeElement||a.nativeElement===this});
p.unhandledInvalids=!1;for(var k=0,d=g.length;k<d;k++)p(g[k])||(b=!1);return b}}});c.defineNodeNamesProperties(["input","textarea","select"],{checkValidity:{value:function(){p.unhandledInvalids=!1;return p(a(this).getNativeElement()[0])}},setCustomValidity:{value:function(b){a.removeData(this,"cachedValidity");c.data(this,"customvalidationMessage",""+b)}},willValidate:{writeable:!1,get:function(){var b={button:1,reset:1,hidden:1,image:1};return function(){var c=a(this).getNativeElement()[0];return!(c.disabled||
c.readOnly||b[c.type])}}()},validity:{writeable:!1,get:function(){var b=a(this).getNativeElement(),g=b[0],d=a.data(g,"cachedValidity");if(d)return d;d=a.extend({},A);if(!a.prop(g,"willValidate")||"submit"==g.type)return d;var f=b.val(),h={nodeName:g.nodeName.toLowerCase()};d.customError=!!c.data(g,"customvalidationMessage");if(d.customError)d.valid=!1;a.each(s,function(a,c){if(c(b,f,h))d[a]=!0,d.valid=!1});a(this).getShadowFocusElement().attr("aria-invalid",d.valid?"false":"true");g=b=null;return d}}},
"prop");c.defineNodeNamesBooleanProperty(["input","textarea","select"],"required",{set:function(b){a(this).getShadowFocusElement().attr("aria-required",!!b+"")},initAttr:!a.browser.msie||7<c.browserVersion});c.reflectProperties(["input"],["pattern"]);if(!("maxLength"in f.createElement("textarea"))){var y=function(){var b,c=0,d=a([]),f=1E9,h=function(){var a=d.prop("value"),b=a.length;b>c&&b>f&&(b=Math.max(c,f),d.prop("value",a.substr(0,b)));c=b},j=function(){clearTimeout(b);d.unbind(".maxlengthconstraint")};
return function(x,z){j();if(-1<z)f=z,c=a.prop(x,"value").length,d=a(x),d.bind("keydown.maxlengthconstraint keypress.maxlengthconstraint paste.maxlengthconstraint cut.maxlengthconstraint",function(){setTimeout(h,0)}),d.bind("keyup.maxlengthconstraint",h),d.bind("blur.maxlengthconstraint",j),b=setInterval(h,200)}}();y.update=function(b,c){a(b).is(":focus")&&(null==c&&(c=a.prop(b,"maxlength")),y(e.target,c))};a(f).bind("focusin",function(b){var c;"TEXTAREA"==b.target.nodeName&&-1<(c=a.prop(b.target,
"maxlength"))&&y(b.target,c)});c.defineNodeNameProperty("textarea","maxlength",{attr:{set:function(a){this.setAttribute("maxlength",""+a);y.update(this)},get:function(){var a=this.getAttribute("maxlength");return null==a?void 0:a}},prop:{set:function(a){if("number"==typeof a||a&&a==1*a){if(0>a)throw"INDEX_SIZE_ERR";a=parseInt(a,10);this.setAttribute("maxlength",a);y.update(this,a)}else this.setAttribute("maxlength","0"),y.update(this,0)},get:function(){var a=this.getAttribute("maxlength");return("number"==
typeof a||a&&a==1*a)&&0<=a?parseInt(a,10):-1}}});c.defineNodeNameProperty("textarea","maxLength",{prop:{set:function(b){a.prop(this,"maxlength",b)},get:function(){return a.prop(this,"maxlength")}}})}var C={submit:1,button:1,image:1},q={};[{name:"enctype",limitedTo:{"application/x-www-form-urlencoded":1,"multipart/form-data":1,"text/plain":1},defaultProp:"application/x-www-form-urlencoded",proptype:"enum"},{name:"method",limitedTo:{get:1,post:1},defaultProp:"get",proptype:"enum"},{name:"action",proptype:"url"},
{name:"target"},{name:"novalidate",propName:"noValidate",proptype:"boolean"}].forEach(function(b){var c="form"+(b.propName||b.name).replace(/^[a-z]/,function(a){return a.toUpperCase()}),d="form"+b.name,i=b.name,h="click.webshimssubmittermutate"+i,j=function(){if("form"in this&&C[this.type]){var j=a.prop(this,"form");if(j){var f=a.attr(this,d);if(null!=f&&(!b.limitedTo||f.toLowerCase()===a.prop(this,c))){var m=a.attr(j,i);a.attr(j,i,f);setTimeout(function(){if(null!=m)a.attr(j,i,m);else try{a(j).removeAttr(i)}catch(b){j.removeAttribute(i)}},
9)}}}};switch(b.proptype){case "url":var x=f.createElement("form");q[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);if(null==b)return"";x.setAttribute("action",b);return x.action}}};break;case "boolean":q[c]={prop:{set:function(b){b?a.attr(this,"formnovalidate","formnovalidate"):a(this).removeAttr("formnovalidate")},get:function(){return null!=a.attr(this,"formnovalidate")}}};break;case "enum":q[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var c=a.attr(this,
d);return!c||(c=c.toLowerCase())&&!b.limitedTo[c]?b.defaultProp:c}}};break;default:q[c]={prop:{set:function(b){a.attr(this,d,b)},get:function(){var b=a.attr(this,d);return null!=b?b:""}}}}q[d]||(q[d]={});q[d].attr={set:function(b){q[d].attr._supset.call(this,b);a(this).unbind(h).bind(h,j)},get:function(){return q[d].attr._supget.call(this)}};q[d].initAttr=!0;q[d].removeAttr={value:function(){a(this).unbind(h);q[d].removeAttr._supvalue.call(this)}}});c.defineNodeNamesProperties(["input","button"],
q);!a.support.getSetAttribute&&null==a("<form novalidate></form>").attr("novalidate")?c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){this.setAttribute("novalidate",""+a)},get:function(){var a=this.getAttribute("novalidate");return null==a?void 0:a}}}):c.bugs.bustedValidity&&(c.defineNodeNameProperty("form","novalidate",{attr:{set:function(a){c.data(this,"bustedNoValidate",""+a)},get:function(){var a=c.data(this,"bustedNoValidate");return null==a?void 0:a}},removeAttr:{value:function(){c.data(this,
"bustedNoValidate",null)}}}),a.each(["rangeUnderflow","rangeOverflow","stepMismatch"],function(a,c){s[c]=function(a){return(a[0].validity||{})[c]||!1}}));c.defineNodeNameProperty("form","noValidate",{prop:{set:function(b){b?a.attr(this,"novalidate","novalidate"):a(this).removeAttr("novalidate")},get:function(){return null!=a.attr(this,"novalidate")}}});a.browser.webkit&&Modernizr.inputtypes.date&&function(){var b={updateInput:1,input:1},d={date:1,time:1,"datetime-local":1},k={focusout:1,blur:1},i=
{updateInput:1,change:1},v=function(a){var c,d=!0,g=a.prop("value"),m=g,f=function(c){if(a){var f=a.prop("value");f!==g&&(g=f,(!c||!b[c.type])&&a.trigger("input"));c&&i[c.type]&&(m=f);!d&&f!==m&&a.trigger("change")}},h,v=function(b){clearInterval(c);setTimeout(function(){b&&k[b.type]&&(d=!1);a&&(a.unbind("focusout blur",v).unbind("input change updateInput",f),f());a=null},1)};clearInterval(c);c=setInterval(f,160);clearTimeout(h);h=setTimeout(f,9);a.unbind("focusout blur",v).unbind("input change updateInput",
f);a.bind("focusout blur",v).bind("input updateInput change",f)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;(function(){var b=function(b){var c=1,d,g;if("date"==b.type&&(h||!a(b).is(":focus")))if((g=b.value)&&10>g.length&&(g=g.split("-"))&&3==g.length){for(;3>c;c++)if(1==g[c].length)g[c]="0"+g[c];else if(2!=g[c].length){d=!0;break}if(!d)return g=g.join("-"),a.prop(b,"value",g),g}},d,g,r,m;d=c.defineNodeNameProperty("input","checkValidity",{prop:{value:function(){b(this);return d.prop._supvalue.apply(this,
arguments)}}});g=c.defineNodeNameProperty("form","checkValidity",{prop:{value:function(){a("input",this).each(function(){b(this)});return g.prop._supvalue.apply(this,arguments)}}});r=c.defineNodeNameProperty("input","value",{prop:{set:function(){return r.prop._supset.apply(this,arguments)},get:function(){return b(this)||r.prop._supget.apply(this,arguments)}}});m=c.defineNodeNameProperty("input","validity",{prop:{writeable:!1,get:function(){b(this);return m.prop._supget.apply(this,arguments)}}});a(f).bind("change",
function(a){isChangeSubmit=!0;b(a.target);isChangeSubmit=!1})})();a(f).bind("focusin",function(b){b.target&&d[b.target.type]&&!b.target.readOnly&&!b.target.disabled&&v(a(b.target))})}();c.addReady(function(b,c){var d;a("form",b).add(c.filter("form")).bind("invalid",a.noop);try{if(b==f&&!("form"in(f.activeElement||{})))(d=a("input[autofocus], select[autofocus], textarea[autofocus]",b).eq(0).getShadowFocusElement()[0])&&d.offsetHeight&&d.offsetWidth&&d.focus()}catch(h){}});(!Modernizr.formattribute||
!Modernizr.fieldsetdisabled)&&function(){(function(b,c){a.prop=function(d,g,r){var m;if(d&&1==d.nodeType&&r===c&&a.nodeName(d,"form")&&d.id){m=f.getElementsByName(g);if(!m||!m.length)m=f.getElementById(g);if(m&&(m=a(m).filter(function(){return a.prop(this,"form")==d}).get(),m.length))return 1==m.length?m[0]:m}return b.apply(this,arguments)}})(a.prop,void 0);var b=function(b){var c=a.data(b,"webshimsAddedElements");c&&(c.remove(),a.removeData(b,"webshimsAddedElements"))},d=/\r?\n/g,h=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
i=/^(?:select|textarea)/i;Modernizr.formattribute||(c.defineNodeNamesProperty(["input","textarea","select","button","fieldset"],"form",{prop:{get:function(){var b=c.contentAttr(this,"form");b&&(b=f.getElementById(b))&&!a.nodeName(b,"form")&&(b=null);return b||this.form},writeable:!1}}),c.defineNodeNamesProperty(["form"],"elements",{prop:{get:function(){var b=this.id,c;b&&(c=a(a.makeArray(this.elements)).add('input[form="'+b+'"], select[form="'+b+'"], textarea[form="'+b+'"], button[form="'+b+'"], fieldset[form="'+
b+'"]').not(".webshims-visual-hide > *").get());return c.length?c:this.elements||null},writeable:!1}}),a(function(){var c=function(a){a.stopPropagation()};a(f).bind("submit",function(c){if(!c.isDefaultPrevented()){var d=c.target;if(c=d.id)b(d),c=a('input[form="'+c+'"], select[form="'+c+'"], textarea[form="'+c+'"]').filter(function(){return!this.disabled&&this.name&&this.form!=d}).clone(),c.length&&(a.data(d,"webshimsAddedElements",a('<div class="webshims-visual-hide" />').append(c).appendTo(d)),setTimeout(function(){b(d)},
9)),c=null}});a(f).bind("click",function(b){if(!b.isDefaultPrevented()&&a(b.target).is('input[type="submit"][form], button[form], input[type="button"][form], input[type="image"][form], input[type="reset"][form]')){var d=a.prop(b.target,"form"),g=b.target.form,f;d&&d!=g&&(f=a(b.target).clone().removeAttr("form").addClass("webshims-visual-hide").bind("click",c).appendTo(d),g&&b.preventDefault(),u(d),f.trigger("click"),setTimeout(function(){f.remove();f=null},9))}})}));Modernizr.fieldsetdisabled||c.defineNodeNamesProperty(["fieldset"],
"elements",{prop:{get:function(){var b=a("input, select, textarea, button, fieldset",this);return b.length?b:this.elements||null},writeable:!1}});a.fn.serializeArray=function(){return this.map(function(){var b=a.prop(this,"elements");return b?a.makeArray(b):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||i.test(this.nodeName)||h.test(this.type))}).map(function(b,c){var f=a(this).val();return null==f?null:a.isArray(f)?a.map(f,function(a){return{name:c.name,value:a.replace(d,
"\r\n")}}):{name:c.name,value:f.replace(d,"\r\n")}}).get()}}();(function(){Modernizr.textareaPlaceholder=!!("placeholder"in a("<textarea />")[0]);var b=a.browser.webkit&&Modernizr.textareaPlaceholder;if(!Modernizr.input.placeholder||!Modernizr.textareaPlaceholder||b){var d="over"==c.cfg.forms.placeholderType,f=["textarea"];Modernizr.input.placeholder||f.push("input");var h=function(a){try{if(a.setSelectionRange)return a.setSelectionRange(0,0),!0;if(a.createTextRange){var b=a.createTextRange();b.collapse(!0);
b.moveEnd("character",0);b.moveStart("character",0);b.select();return!0}}catch(c){}},n=function(b,c,f,j){!1===f&&(f=a.prop(b,"value"));if(!d&&"password"!=b.type){if(!f&&j&&h(b)){var n=setTimeout(function(){h(b)},9);a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))b.value=a.prop(b,"value"),c.box.removeClass("placeholder-visible"),clearTimeout(n),a(b).unbind(".placeholderremove")}).bind("mousedown.placeholderremove drag.placeholderremove select.placeholderremove",
function(){h(b);clearTimeout(n);n=setTimeout(function(){h(b)},9)}).bind("blur.placeholderremove",function(){clearTimeout(n);a(b).unbind(".placeholderremove")});return}b.value=f}else if(!f&&j){a(b).unbind(".placeholderremove").bind("keydown.placeholderremove keypress.placeholderremove paste.placeholderremove input.placeholderremove",function(d){if(!d||!(17==d.keyCode||16==d.keyCode))c.box.removeClass("placeholder-visible"),a(b).unbind(".placeholderremove")}).bind("blur.placeholderremove",function(){a(b).unbind(".placeholderremove")});
return}c.box.removeClass("placeholder-visible")},j=function(b,c,f,h,i){if(!h&&(h=a.data(b,"placeHolder"),!h))return;a(b).unbind(".placeholderremove");if("focus"==i||!i&&a(b).is(":focus"))("password"==b.type||d||a(b).hasClass("placeholder-visible"))&&n(b,h,"",!0);else if(!1===c&&(c=a.prop(b,"value")),c)n(b,h,c);else if(!1===f&&(f=a.attr(b,"placeholder")||""),f&&!c){c=h;!1===f&&(f=a.prop(b,"placeholder"));if(!d&&"password"!=b.type)b.value=f;c.box.addClass("placeholder-visible")}else n(b,h,c)},o=function(b){var b=
a(b),c=b.prop("id"),d=!(!b.prop("title")&&!b.attr("aria-labelledby"));!d&&c&&(d=!!a('label[for="'+c+'"]',b[0].form)[0]);d||(c||(c=a.webshims.getID(b)),d=!!a("label #"+c)[0]);return a(d?'<span class="placeholder-text"></span>':'<label for="'+c+'" class="placeholder-text"></label>')},p=function(){var b={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(b){var c=a.data(b,"placeHolder");if(c)return c;c=a.data(b,"placeHolder",{});a(b).bind("focus.placeholder blur.placeholder",function(a){j(this,
!1,!1,c,a.type);c.box["focus"==a.type?"addClass":"removeClass"]("placeholder-focused")});b.form&&a(b.form).bind("reset.placeholder",function(a){setTimeout(function(){j(b,!1,!1,c,a.type)},0)});if("password"==b.type||d){c.text=o(b);c.box=a(b).wrap('<span class="placeholder-box placeholder-box-'+(b.nodeName||"").toLowerCase()+'" />').parent();c.text.insertAfter(b).bind("mousedown.placeholder",function(){j(this,!1,!1,c,"focus");try{setTimeout(function(){b.focus()},0)}catch(a){}return!1});a.each(["Left",
"Top"],function(d,f){var g=(parseInt(a.css(b,"padding"+f),10)||0)+Math.max(parseInt(a.css(b,"margin"+f),10)||0,0)+(parseInt(a.css(b,"border"+f+"Width"),10)||0);c.text.css("padding"+f,g)});a.css(b,"lineHeight");var f={width:a(b).width(),height:a(b).height()},h=a.css(b,"float");a.each(["lineHeight","fontSize","fontFamily","fontWeight"],function(d,f){var g=a.css(b,f);c.text.css(f)!=g&&c.text.css(f,g)});f.width&&f.height&&c.text.css(f);"none"!==h&&c.box.addClass("placeholder-box-"+h)}else f=function(d){a(b).hasClass("placeholder-visible")&&
(n(b,c,""),d&&"submit"==d.type&&setTimeout(function(){d.isDefaultPrevented()&&j(b,!1,!1,c)},9))},a(l).bind("beforeunload",f),c.box=a(b),b.form&&a(b.form).submit(f);return c},update:function(c,d){if(!("date"==(a.attr(c,"type")||"").toLowerCase()||!b[a.prop(c,"type")]&&!a.nodeName(c,"textarea"))){var f=p.create(c);f.text&&f.text.text(d);j(c,!1,d,f)}}}}();a.webshims.publicMethods={pHolder:p};f.forEach(function(a){c.defineNodeNameProperty(a,"placeholder",{attr:{set:function(a){b?(c.data(this,"textareaPlaceholder",
a),this.placeholder=""):c.contentAttr(this,"placeholder",a);p.update(this,a)},get:function(){return(b?c.data(this,"textareaPlaceholder"):"")||c.contentAttr(this,"placeholder")}},reflect:!0,initAttr:!0})});f.forEach(function(d){var f={},g;["attr","prop"].forEach(function(d){f[d]={set:function(f){var h;b&&(h=c.data(this,"textareaPlaceholder"));h||(h=c.contentAttr(this,"placeholder"));a.removeData(this,"cachedValidity");var i=g[d]._supset.call(this,f);h&&"value"in this&&j(this,f,h);return i},get:function(){return a(this).hasClass("placeholder-visible")?
"":g[d]._supget.call(this)}}});g=c.defineNodeNameProperty(d,"value",f)})}})()});
jQuery.webshims.ready("dom-support",function(a,c,l,f){(function(){if(!("value"in f.createElement("output"))){c.defineNodeNameProperty("output","value",{prop:{set:function(c){var d=a.data(this,"outputShim");d||(d=l(this));d(c)},get:function(){return c.contentAttr(this,"value")||a(this).text()||""}}});c.onNodeNamesPropertyModify("input","value",function(c,d,f){"removeAttr"!=f&&(d=a.data(this,"outputShim"))&&d(c)});var l=function(h){if(!h.getAttribute("aria-live")){var h=a(h),d=(h.text()||"").trim(),
n=h.attr("id"),l=h.attr("for"),o=a('<input class="output-shim" type="text" disabled name="'+(h.attr("name")||"")+'" value="'+d+'" style="display: none !important;" />').insertAfter(h),u=o[0].form||f,t=function(a){o[0].value=a;a=o[0].value;h.text(a);c.contentAttr(h[0],"value",a)};h[0].defaultValue=d;c.contentAttr(h[0],"value",d);h.attr({"aria-live":"polite"});n&&(o.attr("id",n),h.attr("aria-labelledby",c.getID(a('label[for="'+n+'"]',u))));l&&(n=c.getID(h),l.split(" ").forEach(function(a){(a=f.getElementById(a))&&
a.setAttribute("aria-controls",n)}));h.data("outputShim",t);o.data("outputShim",t);return t}};c.addReady(function(c,d){a("output",c).add(d.filter("output")).each(function(){l(this)})})}})();(function(){var l={updateInput:1,input:1},h={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,file:1,color:1},d=function(a){var d,f=a.prop("value"),h=function(d){if(a){var h=a.prop("value");h!==f&&(f=h,(!d||!l[d.type])&&c.triggerInlineForm&&c.triggerInlineForm(a[0],"input"))}},t,p=function(){clearTimeout(t);
t=setTimeout(h,9)},w=function(){a.unbind("focusout",w).unbind("keyup keypress keydown paste cut",p).unbind("input change updateInput",h);clearInterval(d);setTimeout(function(){h();a=null},1)};clearInterval(d);d=setInterval(h,99);p();a.bind("keyup keypress keydown paste cut",p).bind("focusout",w).bind("input updateInput change",h)};if(a.event.customEvent)a.event.customEvent.updateInput=!0;a(f).bind("focusin",function(c){c.target&&c.target.type&&!c.target.readOnly&&!c.target.disabled&&"input"==(c.target.nodeName||
"").toLowerCase()&&!h[c.target.type]&&d(a(c.target))})})();c.isReady("form-output",!0)});
