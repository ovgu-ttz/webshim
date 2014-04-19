webshims.register("jme",function(a,b,c,d,e){"use strict";var f={},g={},h=Array.prototype.slice,i=a.extend({selector:".mediaplayer"},b.cfg.mediaelement.jme);b.cfg.mediaelement.jme=i,a.jme={plugins:{},data:function(b,c,d){var f=a(b).data("jme")||a.data(b,"jme",{});return d===e?c?f[c]:f:void(f[c]=d)},registerPlugin:function(b,c){this.plugins[b]=c,c.nodeName||(c.nodeName=""),c.className||(c.className=b),i[b]=a.extend(c.options||{},i[b]),i[b]&&i[b].text?c.text=i[b].text:i.i18n&&i.i18n[b]&&(c.text=i.i18n[b])},defineMethod:function(a,b){g[a]=b},defineProp:function(b,c){c||(c={}),c.set||(c.set=c.readonly?function(){throw b+" is readonly"}:a.noop),c.get||(c.get=function(c){return a.jme.data(c,b)}),f[b]=c},prop:function(b,c,d){if(!f[c])return a.prop(b,c,d);if(d===e)return f[c].get(b);var g=f[c].set(b,d);g===e&&(g=d),"noDataSet"!=g&&a.jme.data(b,c,g)}},a.fn.jmeProp=function(b,c){return a.access(this,a.jme.prop,b,c,arguments.length>1)},a.fn.jmeFn=function(b){var c,d=h.call(arguments,1);return this.each(function(){return c=(g[b]||a.prop(this,b)).apply(this,d),c!==e?!1:void 0}),c!==e?c:this};var j={emptied:1,pause:1},k={canplay:1,canplaythrough:1},l=i.selector;a.jme.initJME=function(b,c){a(l,b).add(c.filter(l)).jmePlayer()},a.jme.getDOMList=function(b){var c=[];return b||(b=[]),"string"==typeof b&&(b=b.split(" ")),a.each(b,function(a,b){b&&(b=document.getElementById(b),b&&c.push(b))}),c},a.jme.getButtonText=function(b,c){var d,e,f=function(f){e!==f&&(e=f,b.removeClass(c[f?0:1]).addClass(c[f]),d&&(b.prop("checked",!!f),(b.data("checkboxradio")||{refresh:a.noop}).refresh()))};return b.is('[type="checkbox"], [type="radio"]')?(b.prop("checked",function(){return this.defaultChecked}),d=!0):b.is("a")&&b.on("click",function(a){a.preventDefault()}),f},a.fn.jmePlayer=function(b){return this.each(function(){b&&a.jme.data(this,a.extend(!0,{},b));var c,d,e,f,g,h,l=a("audio, video",this).eq(0),m=a(this),n=a.jme.data(this),o=a.jme.data(l[0]);m.addClass(l.prop("nodeName").toLowerCase()+"player"),o.player=m,o.media=l,n.media||(e=function(){l.off("canplay",d),clearTimeout(f)},d=function(){var a=l.prop("paused")?"idle":"playing";m.attr("data-state",a)},c=function(b){var c,i,n=b.type;e(),k[n]&&"waiting"!=g||h&&"emptied"==n||("ended"==n||a.prop(this,"ended")?n="ended":"waiting"==n?a.prop(this,"readyState")>2?n="":(f=setTimeout(function(){l.prop("readyState")>2&&d()},9),l.on("canPlay",d)):j[n]?n="idle":(c=a.prop(this,"readyState"),i=a.prop(this,"paused"),n=!i&&3>c?"waiting":!i&&c>2?"playing":"idle"),"idle"==n&&m._seekpause&&(n=!1),n&&(g=n,m.attr("data-state",n)))},n.media=l,n.player=m,l.on("ended emptied play",function(){var a,b=function(){h=!1},c=function(){e(),l.jmeFn("pause"),i.noReload||!l.prop("ended")||!l.prop("paused")||l.prop("autoplay")||l.prop("loop")||l.hasClass("no-reload")||(h=!0,l.jmeFn("load"),m.attr("data-state","ended"),setTimeout(b))};return function(b){clearTimeout(a),"ended"!=b.type||i.noReload||l.prop("autoplay")||l.prop("loop")||l.hasClass("no-reload")||(a=setTimeout(c))}}()).on("emptied waiting canplay canplaythrough playing ended pause mediaerror",c).on("volumechange updateJMEState",function(){var b=a.prop(this,"volume");m[!b||a.prop(this,"muted")?"addClass":"removeClass"]("state-muted"),b=.01>b?"no":.36>b?"low":.7>b?"medium":"high",m.attr("data-volume",b)}),c&&l.on("updateJMEState",c).triggerHandler("updateJMEState"))})},a.jme.defineProp("isPlaying",{get:function(b){return!a.prop(b,"ended")&&!a.prop(b,"paused")&&a.prop(b,"readyState")>1&&!a.data(b,"mediaerror")},readonly:!0}),a.jme.defineProp("player",{readonly:!0}),a.jme.defineProp("media",{readonly:!0}),a.jme.defineProp("srces",{get:function(b){var c,d=a.jme.data(b),e=d.media.prop("src");return e?[{src:e}]:c=a.map(a("source",d.media).get(),function(b){var c={src:a.prop(b,"src")},d=a.attr(b,"media");return d&&(c.media=d),d=a.attr(b,"type"),d&&(c.type=d),c})},set:function(b,c){var d=a.jme.data(b),e=function(b,c){"string"==typeof c&&(c={src:c}),a(document.createElement("source")).attr(c).appendTo(d.media)};return d.media.removeAttr("src").find("source").remove(),a.isArray(c)?a.each(c,e):e(0,c),d.media.jmeFn("load"),"noDataSet"}}),a.jme.defineMethod("togglePlay",function(){a(this).jmeFn(f.isPlaying.get(this)?"pause":"play")}),a.jme.defineMethod("addControls",function(b){var c=a.jme.data(this)||{};if(c.media){var d=a.jme.data(c.player[0],"controlElements")||a([]);b=a(b),a.each(a.jme.plugins,function(d,e){b.filter("."+e.className).add(b.find("."+e.className)).each(function(){var b=a(this),d=a.jme.data(this);d.player=c.player,d.media=c.media,d._rendered||(d._rendered=!0,e.options&&a.each(e.options,function(a,b){a in d||(d[a]=b)}),e._create(b,c.media,c.player,d),b=null)})}),a.jme.data(c.player[0],"controlElements",d.add(b)),c.player.triggerHandler("controlsadded")}}),b.addReady(a.jme.initJME),b._polyfill(["mediaelement"])}),webshims.register("mediacontrols",function(a,b,c){"use strict";var d=b.cfg.mediaelement.jme,e=d.selector,f='<button class="{%class%}" type="button" aria-label="{%text%}"></button>',g='<div class="{%class%} media-range"></div>',h='<div  class="{%class%}">00:00</div>',i=function(){var a,b="";return"function"==typeof c.Audio&&(a=new Audio,a.volume=.55,b=a.volume=""),b}(),j=function(){var b={},c=/\{\{(.+?)\}\}/gim;return function(e,f){return e||(e=d.barTemplate),(!b[e]||f)&&(b[e]=e.replace(c,function(b,c){var d=a.jme.plugins[c];return d&&d.structure?d.structure.replace("{%class%}",c).replace("{%text%}",d.text||""):b})),b[e]||""}}(),k=function(){k.loaded||(k.loaded=!0,b.loader.loadList(["mediacontrols-lazy","range-ui"]))},l=function(a){a||(a="_create");var c=function(){var d=this,e=arguments;k(),b.ready("mediacontrols-lazy",function(){return c!=d[a]?d[a].apply(d,e):void b.error("stop too much recursion")})};return c};d.barTemplate||(d.barTemplate='<div class="play-pause-container">{{play-pause}}</div><div class="playlist-container"><div class="playlist-box">{{playlist-prev}}{{playlist-next}}</div></div><div class="currenttime-container">{{currenttime-display}}</div><div class="progress-container">{{time-slider}}</div><div class="duration-container">{{duration-display}}</div><div class="mute-container">{{mute-unmute}}</div><div class="volume-container">{{volume-slider}}</div><div class="subtitle-container"><div class="subtitle-controls">{{captions}}</div></div><div class="fullscreen-container">{{fullscreen}}</div>'),d.barStructure||(d.barStructure='<div class="jme-media-overlay"></div><div class="jme-controlbar'+i+'" tabindex="-1"><div class="jme-cb-box"></div></div>'),b.loader.addModule("mediacontrols-lazy",{src:"jme/mediacontrols-lazy"});var m={_create:l()};a.jme.plugins.useractivity=m,a.jme.defineProp("controlbar",{set:function(c,e){e=!!e;var f,g,h=a.jme.data(c),i=a("div.jme-mediaoverlay, div.jme-controlbar",h.player),k="";return e&&!i[0]?h._controlbar?h._controlbar.appendTo(h.player):(h.media.prop("controls",!1),k=j(),h._controlbar=a(d.barStructure),i=h._controlbar.find("div.jme-cb-box").addClass("media-controls"),f=h._controlbar.filter(".jme-media-overlay").addClass("play-pause"),f=f.add(i),a(k).appendTo(i),h._controlbar.appendTo(h.player),h.player.jmeFn("addControls",f),g=function(){var a,b=[{size:290,name:"xx-small"},{size:380,name:"x-small"},{size:490,name:"small"},{size:756,name:"medium"},{size:1024,name:"large"}],c=b.length;return function(){var d="x-large",e=0,f=h.player.outerWidth(),g=Math.max(parseInt(h.player.css("fontSize"),10)||16,13);for(f*=16/g;c>e;e++)if(b[e].size>=f){d=b[e].name;break}a!=d&&(a=d,h.player.attr("data-playersize",d))}}(),m._create(0,0,h.player),g(),b.ready("dom-support",function(){h.player.onWSOff("updateshadowdom",g),b.addShadowDom()})):e||i.detach(),i=null,f=null,e}}),a.jme.registerPlugin("play-pause",{structure:f,text:"play / pause",_create:l()}),a.jme.registerPlugin("mute-unmute",{structure:f,text:"mute / unmute",_create:l()}),a.jme.registerPlugin("volume-slider",{structure:g,_create:l()}),a.jme.registerPlugin("time-slider",{structure:g,options:{format:["mm","ss"]},_create:l()}),a.jme.defineProp("format",{set:function(b,c){a.isArray(c)||(c=c.split(":"));var d=a.jme.data(b);return d.format=c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("duration-display",{structure:h,options:{format:"mm:ss"},_create:l()}),a.jme.defineProp("countdown",{set:function(b,c){var d=a.jme.data(b);return d.countdown=!!c,a(b).triggerHandler("updatetimeformat"),d.player.triggerHandler("updatetimeformat"),"noDataSet"}}),a.jme.registerPlugin("currenttime-display",{structure:h,options:{format:"mm:ss",countdown:!1},_create:l()}),a.jme.registerPlugin("poster-display",{structure:"<div />",options:{},_create:l()}),a.jme.registerPlugin("fullscreen",{options:{fullscreen:!0,autoplayfs:!1},structure:f,text:"enter fullscreen / exit fullscreen",_create:l()}),a.jme.registerPlugin("captions",{structure:f,text:"subtitles",_create:function(b,c,d){var e=c.find("track");b.wsclonedcheckbox=a(b).clone().attr({role:"checkbox"}).insertBefore(b),d.attr("data-tracks",e.length>1?"many":e.length),b.attr("aria-haspopup","true"),l().apply(this,arguments)}}),b.ready(b.cfg.mediaelement.plugins.concat(["mediaelement"]),function(){b.addReady(function(b,c){a(e,b).add(c.filter(e)).jmeProp("controlbar",!0)})}),b.ready("WINDOWLOAD",k)}),webshims.ready("jme DOM",function(){"use strict";function a(a){this._data=a,this.lists={},this.on("showcontrolschange",this._updateControlsClass)}function b(a,c,d){this.list=a||[],this.playlists=c,this.media=c._data.media,this.player=c._data.player,this.options=h.extend(!0,{},b.defaults,d),this.options.itemTmpl=this.options.itemTmpl.trim(),this.deferred=h.Deferred(),this._selectedIndex=-1,this._selectedItem=null,this.$rendered=null,this._detectListType(),this.autoplay(this.options.autoplay),this.deferred.done(function(){this._addEvents(this),"auto"!=this.options.defaultSelected||this.media.jmeProp("srces").length||(this.options.defaultSelected=0),this.list[this.options.defaultSelected]&&this.selectedIndex(this.options.defaultSelected),this._fire("addlist")})}function c(a){return a.description=a.description||a.content,a.srces=[],(a.mediaGroups||[]).forEach(function(b){(b.contents||[]).forEach(function(b){b.src=b.src||b.url,a.srces.push(b)})}),a}function d(){return{src:h.attr(this,"href"),srclang:h.attr(this,"lang"),label:h.attr(this,"data-label")}}function e(){return{src:h.attr(this,"url")||h.attr(this,"href"),type:h.attr(this,"type")}}function f(){return 1==this.nodeType}var g=window.webshims,h=g.$,i=h.jme,j=0,k='<button class="{%class%}" type="button" aria-label="{%text%}"></button>';h.extend(a.prototype,{on:function(){h.fn.on.apply(h(this),arguments)},off:function(){h.fn.off.apply(h(this),arguments)},_getListId:function(a){var b;return b="string"==typeof a?a:a.id},_updateControlsClass:function(){this._data.player[this.getShowcontrolsList()?"addClass":"removeClass"]("has-playlist")},add:function(a,c){return a=new b(a,this,c),a.id||(j++,a.id="list-"+j),this.lists[a.id]=a,a.options.showcontrols&&this._data.player.addClass("has-playlist"),a},remove:function(a){var b=this._getListId(a);this.lists[b]&&(this.lists[b]._remove(),delete this.lists[b]),this.getShowcontrolsList()||this._data.player.removeClass("has-playlist")},getAutoplayList:function(){var a=null;return h.each(this.lists,function(b,c){return c.options.autoplay?(a=c,!1):void 0}),a},getShowcontrolsList:function(){var a=null;return h.each(this.lists,function(b,c){return c.options.showcontrols?(a=c,!1):void 0}),a}}),b.getText=function(a){return a.attr("content")||(a.text()||"").trim()},b.getUrl=function(a){return a.attr("content")||a.attr("url")||a.attr("href")||a.attr("src")||(a.text()||"").trim()},b.defaults={loop:!1,autoplay:!1,defaultSelected:"auto",addItemEvents:!0,showcontrols:!0,ajax:{},itemTmpl:'<li class="list-item"><% if(typeof poster == "string" && poster) {%><img src="<%=poster%>" /><% }%><h3><%=title%></h3><% if(typeof description == "string" && description) {%><div class="item-description"><%=description%></div><% }%></li>',renderer:function(a,b){return h.jme.tmpl(b,a)},mapDom:function(a){return{title:b.getText(h('[itemprop="name"], h1, h2, h3, h4, h5, h6, a',a)),srces:h('[itemprop="contentUrl"], a[type^="video"], a[type^="audio"]',a).map(function(){var c,d={src:b.getUrl(h(this))};return c="a"==this.nodeName.toLowerCase()?h.prop(this,"type"):b.getText(h('[itemprop="encodingFormat"]',a)),c&&(d.type=c),c=h.attr(this,"data-media"),c&&(d.media=c),d}).get(),tracks:h('a[type="text/vtt"]').map(d).get(),poster:b.getUrl(h('[itemprop="thumbnailUrl"], a[type^="image"], img',a))||null,description:b.getText(h('[itemprop="description"], .item-description, p',a))||null}},mapUrl:function(a,f){h.ajax(h.extend(a,{success:function(a){var g;h.isArray(a)?g=a:a.responseData&&a.responseData.feed?(a=a.responseData.feed,g=(a.entries||[]).map(c)):(g=[],h("item",a).each(function(){var a=h("enclosure, media\\:content",this).filter('[type^="video"], [type^="audio"]').map(e).get();a.length&&g.push({title:h("title",this).html(),srces:a,publishedDate:h("pubDate",this).html()||null,description:h("description",this).text()||null,poster:b.getUrl(h('itunes\\:image, media\\:thumbnail, enclosure[type^="image"], media\\:content[type^="image"]',this))||null,author:h("itunes\\:author",this).html()||null,duration:h("itunes\\:duration",this).html()||null,tracks:h("media\\:subTitle",this).map(d).get()||null})})),g!=a&&(g.fullData=a),f(g)}}))}},h.extend(b.prototype,{on:function(){h.fn.on.apply(h(this),arguments)},off:function(){h.fn.off.apply(h(this),arguments)},_detectListType:function(){var a;return"string"==typeof this.list?void this._createListFromUrl():(this.list.nodeName||this.list.length>0&&this.list[0].nodeName?this._createListFromDom():this.list.responseData&&this.list.responseData.feed&&(a=this.list.responseData.feed,this.list=(a.entries||[]).map(c),this.list.fullData=a),void this.deferred.resolveWith(this))},_createListFromUrl:function(){var a=this;this.options.ajax.url=this.list,this.options.mapUrl(this.options.ajax,function(b){a.list=b,a.deferred.resolveWith(a)})},_createListFromDom:function(){var a=this;this.$rendered=h(this.list).eq(0),this.list=[],this.$rendered&&(this._addDomList(),this.list=this.$rendered.children().map(function(){return a._createItemFromDom(this)}).get())},_createItemFromDom:function(a){var b=this.options.mapDom(a);return this._addItemData(b,a),b},_fire:function(a,b){var a=h.Event(a);h(this).triggerHandler(a,b),h(this.playlists).triggerHandler(a,h.merge([{list:this}],b||[])),this.$rendered&&this.$rendered.triggerHandler(a,b)},_addDomList:function(){this.$rendered.attr({"data-autoplay":this.options.autoplay,"data-loop":this.options.loop}).addClass("media-playlist").data("playlist",this)},_addItemData:function(a,b){var c=this;a.$item=h(b).data("itemData",a),a==this._selectedItem&&a.$item.addClass("selected-item"),this.options.addItemEvents&&a.$item.on("click.playlist",function(b){return c.options.addItemEvents?(c.playItem(a,b),!1):void 0})},_addEvents:function(a){var b=a.options,c=function(c){b.autoplay&&a.playNext(c)};this.media.on("ended",c),this._remove=function(){a.media.off("ended",c),a.autoplay(!1),a.$rendered&&a.$rendered.remove(),a._fire("removelist")}},_remove:function(){this._fire("removelist")},render:function(a){this.$rendered?a(this.$rendered,this.player,this):this.deferred.done(function(){var b,c=this,d=[];if(!this.$rendered){switch(h.each(this.list,function(a,b){var e=h(h.parseHTML(c.options.renderer(b,c.options.itemTmpl))).filter(f)[0];c._addItemData(b,e),d.push(e)}),b=(d[0]&&d[0].nodeName||"").toLowerCase()){case"li":this.$rendered=h.parseHTML("<ul />");break;case"option":this.$rendered=h.parseHTML("<select />");break;default:this.$rendered=h.parseHTML("<div />")}this.$rendered=h(this.$rendered).html(d),this._addDomList()}a(this.$rendered,this.player,this)})},_loadItem:function(a){var b=this.media;b.attr("poster",a.poster||""),h("track",b).remove(),h.each(a.tracks||[],function(a,c){h("<track />").attr(c).appendTo(b)}),b.jmeProp("srces",a.srces)},_getItem:function(a){return a&&(a.nodeName||a.jquery||"string"==typeof a)&&(a=h(a).data("itemData")),a},playItem:function(a,b){this.selectedItem(a,b),a&&this.media.play()},selectedIndex:function(a,b){return arguments.length?void this.selectedItem(this.list[a],b):this._selectedIndex},selectedItem:function(a,b){var c,d;return arguments.length?(d=-1,a=this._getItem(a),a&&h.each(this.list,function(b){return a==this?(d=b,!1):void 0}),d>=0&&this._loadItem(this.list[d]),d!=this._selectedIndex&&(c=this._selectedItem||null,c&&c.$item&&c.$item.removeClass("selected-item"),this._selectedItem=this.list[d]||null,this._selectedIndex=d,this._selectedItem&&this._selectedItem.$item&&this._selectedItem.$item.addClass("selected-item"),c!==this._selectedItem&&this._fire("itemchange",[{oldItem:c,from:b||null}])),void 0):this._selectedItem},playNext:function(){var a=this.getNext();a&&this.playItem(a)},playPrev:function(){var a=this.getPrev();a&&this.playItem(a)},getNext:function(){var a=this._selectedIndex+1;return this.list[a]||(this.options.loop?this.list[0]:null)},getPrev:function(){var a=this._selectedIndex-1;return this.list[a]||(this.options.loop?this.list[this.list.length-1]:null)}}),[{name:"autoplay",fn:"getAutoplayList"},{name:"showcontrols",fn:"getShowcontrolsList"},{name:"loop"}].forEach(function(a){b.prototype[a.name]=function(b){var c;return arguments.length?(b=!!b,b&&a.fn&&(c=this.playlists[a.fn](),c&&c!=this&&c[a.name](!1)),this.options[a.name]!=b&&(this.options[a.name]=b,this.$rendered&&this.$rendered.attr("data-"+a.name,b),this._fire(a.name+"change")),void 0):this.options[a.name]}}),i.defineProp("playlists",{writable:!1,get:function(b){var c=h.jme.data(b);return b!=c.player[0]?null:(c.playlists||(c.playlists=new a(c)),c.playlists)}}),i.defineMethod("addPlaylist",function(a,b){var c=h.jme.prop(this,"playlists");return c&&c.add?c.add(a,b):null}),[{name:"playlist-prev",text:"previous",get:"getPrev",play:"playPrev"},{name:"playlist-next",text:"next",get:"getNext",play:"playNext"}].forEach(function(a){h.jme.registerPlugin(a.name,{structure:k,text:a.text,_create:function(b,c,d){function e(){var c=g[a.get]();b.prop(c?{disabled:!1,title:c.title}:{disabled:!0,title:""})}function f(){var a=h.getShowcontrolsList();a!=g&&(g&&g.off("itemchange",e),g=a,g&&(g.on("itemchange",e),e()))}var g,h=d.jmeProp("playlists");b.on("click",function(){g&&g[a.play]()}),h.on({"addlist removelist showcontrolschange":f}),f()}})}),function(){var a={};h.jme.tmpl=function(b,c){return a[b]||(a[b]=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+b.replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"',$1,'").split("<%").join("');").split("%>").join("p.push('")+"');}return p.join('');")),c?a[b](c):a[b]}}(),h.jme.Playlist=b,g.isReady("playlist",!0)});