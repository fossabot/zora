(function(e){function t(t){for(var s,r,n=t[0],c=t[1],l=t[2],d=0,p=[];d<n.length;d++)r=n[d],o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},o={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("c21b"),o=a.n(s);o.a},"1b30":function(e,t,a){"use strict";var s=a("b0e9"),o=a.n(s);o.a},"1c14":function(e,t,a){"use strict";var s=a("9c3e"),o=a.n(s);o.a},5177:function(e,t,a){"use strict";var s=a("a9a8"),o=a.n(s);o.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},i=[],r=(a("034f"),a("2877")),n={},c=Object(r["a"])(n,o,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),e._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"container slide-in-elliptic-top-fwd"},[e._m(1),a("br"),a("br"),a("hr"),a("h2",[e._v("Commands")]),a("Commands",{attrs:{items:e.commandlist}})],1)]),a("ZFooter",{attrs:{btntext:"Dashboard",btnurl:"api/discord/login"}})],1)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container",staticStyle:{height:"50%"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("img",{staticStyle:{width:"100%"},attrs:{src:a("c5d7"),alt:"ZoraBOT"}})])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"five columns centertext statusheader"},[a("h1",[e._v("This is Zora BOT")]),a("button",{staticClass:"sp-btn",attrs:{onclick:"window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"}},[e._v(" Invite Me!")]),a("br"),a("hr"),a("a",{attrs:{href:"https://discordbots.org/bot/478616471640080395"}},[a("img",{attrs:{src:"https://discordbots.org/api/widget/478616471640080395.svg",alt:"Zora"}})])]),a("div",{staticClass:"seven columns"},[a("p",{staticStyle:{"padding-top":"32px"}},[e._v("\n          Zora is the bot for everyone! With open source code, we have created a bot anyone can adapt to their own needs. Whether you just need a simple music bot, or you want to browse reddit and stackoverflow. Zora is the bot for you!\n          ")]),a("hr"),a("p",[e._v("\n            Zora was created by "),a("a",{attrs:{href:"http://www.averywagar.com/"}},[e._v("Avery Wagar")]),e._v(" and "),a("a",{attrs:{href:"https://nlaha.com"}},[e._v("Nathan Laha")]),a("br"),a("br"),a("button",{staticClass:"sp-btn",staticStyle:{"margin-right":"20px","margin-left":"20px"},attrs:{onclick:"window.open('https://github.com/ajmwagar/discordbot')"}},[e._v("Source Code")]),a("button",{staticClass:"sp-btn",staticStyle:{"margin-top":"22px","margin-right":"20px","margin-left":"20px"},attrs:{onclick:"window.open('https://discordbots.org/bot/478616471640080395/vote')"}},[e._v("Vote for us!")])])])])}],v=(a("ac6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),a("button",{staticClass:"closebtn",class:{closedbutton:e.isClosed},on:{click:function(t){e.isClosed=!e.isClosed}}},[a("i",{staticClass:"material-icons"},[e._v("keyboard_arrow_down")])]),a("footer",{staticClass:"mainfooter",class:{closed:e.isClosed}},[a("a",{attrs:{href:"https://dta.dekutree.org/api/discord/login"}},[a("button",{staticClass:"sp-btn-s",class:{closed:e.isClosed},on:{click:function(t){e.dshow=!e.dshow}}},[e._v(e._s(e.btntext))])])])])}),f=[],m=a("7c76"),g={name:"footer",props:["btntext","btnurl"],data:function(){return{isClosed:!0,dshow:!0}}},h=g,y=(a("d4b0"),Object(r["a"])(h,v,f,!1,null,"0e5fa410",null));y.options.__file="zfooter.vue";var b=y.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{ref:"rootEl",staticClass:"faq"},[a("div",{staticClass:"faq-wrapper"},[e.hasNavigation?a("nav",{staticClass:"faq__nav"},e._l(e.categories,function(t,s){return a("div",{key:"category-"+s,class:e.generateCategoryClasses(t),domProps:{innerHTML:e._s(t)},on:{click:function(a){e.makeActiveCategory(t)}}})})):e._e(),a("transition",{attrs:{name:"accordion-fade-slide",mode:"out-in"}},[e.showAccordion?a("div",{staticClass:"accordion"},e._l(e.categoryItems,function(t,s){return a("div",{key:"accordion-item-"+s,staticClass:"accordion__item"},[a("div",{class:e.generateQuestionClasses(s),on:{click:function(t){e.makeActive(s)}}},[a("p",{staticClass:"accordion__title-text",domProps:{innerHTML:e._s(t[e.questionProperty])}}),a("button",{class:e.generateButtonClasses(s)})]),a("collapse-transition",[s===e.activeQuestionIndex?a("div",[a("p",{staticClass:"accordion__value",domProps:{innerHTML:e._s(t[e.answerProperty])}})]):e._e()])],1)})):e._e()])],1)])},w=[],C={name:"Commands",components:{CollapseTransition:m["a"]},data:function(){return{activeTab:"",activeQuestionIndex:null,showAccordion:!0}},props:{items:{type:Array,required:!0},questionProperty:{type:String,default:"title"},answerProperty:{type:String,default:"value"},tabName:{type:String,default:"category"},activeColor:{type:String,default:"#c55b2a"},borderColor:{type:String,default:"#9E9E9E"},fontColor:{type:String,default:"#2c3e50"}},computed:{categories:function(){var e=this,t=this.items.map(function(t){return t[e.tabName]}).filter(function(e,t,a){return a.indexOf(e)===t});return this.activeTab=t[0],t},categoryItems:function(){var e=this;return this.items.filter(function(t){return t[e.tabName]===e.activeTab})},hasNavigation:function(){return!!this.categories[0]}},methods:{makeActive:function(e){this.activeQuestionIndex===e?this.activeQuestionIndex=null:this.activeQuestionIndex=e},generateButtonClasses:function(e){return["accordion__toggle-button",this.activeQuestionIndex===e?"accordion__toggle-button_active":null]},generateQuestionClasses:function(e){return["accordion__title",this.activeQuestionIndex===e?"accordion__title_active":null]},makeActiveCategory:function(e){var t=this;this.activeTab!==e&&(this.showAccordion=!1,this.activeTab=e,this.activeQuestionIndex=null,setTimeout(function(){t.showAccordion=!0},300))},generateCategoryClasses:function(e){return["faq__nav-item",this.activeTab===e?"faq__nav-item_active":null]}},mounted:function(){this.$refs.rootEl.style.setProperty("--active-color",this.activeColor),this.$refs.rootEl.style.setProperty("--border-color",this.borderColor),this.$refs.rootEl.style.setProperty("--font-color",this.fontColor)}},S=C,A=(a("1b30"),Object(r["a"])(S,_,w,!1,null,"16fe67e3",null));A.options.__file="commands.vue";var x=A.exports,M=a("a7fe"),k=a.n(M),P=a("bc3a"),B=a.n(P);(function(){var e=document.querySelectorAll("body"),t=.5;[].slice.call(e).forEach(function(e,a){var s=window.pageYOffset,o="50% "+s*t+"px";e.style.backgroundPosition=o}),window.onscroll=function(){[].slice.call(e).forEach(function(e,a){var s=window.pageYOffset,o="50% "+s*t+"px";e.style.backgroundPosition=o})}})();var T={computed:{username:function(){return this.$route.params.username}},name:"app",components:{ZFooter:b,Commands:x},data:function(){return{isClosed:!1,dshow:!0,btisClosed:!1,commandlist:[{title:"+help",category:"Admin",value:"Show a help menu"},{title:"+ban <span class='cArgs'>[user]</span",category:"Admin",value:"Ban a user (admins only)"},{title:"+setlog <span class='cArgs'>[channel]</span",category:"Admin",value:"Set channel for modlog"},{title:"+kick <span class='cArgs'>[user]</span",category:"Admin",value:"Kick a user (admins and mods only)"},{title:"+purge <span class='cArgs'>[number of messages]</span",category:"Admin",value:"Purge a channel"},{title:"+bws",category:"Admin",value:"List banned words for automod"},{title:"+addbw <span class='cArgs'>[words]</span",category:"Admin",value:"Add words to ban list"},{title:"+removebw <span class='cArgs'>[words]</span",category:"Admin",value:"Remove words from ban list"},{title:"+ping",category:"Admin",value:"Pong?"},{title:"+say <span class='cArgs'>[message]</span",category:"Admin",value:"Say a message"},{title:"+prefix",category:"Admin",value:"Sets the bot prefix"},{title:"+alexamode",category:"Admin",value:"Changes the prefix to Alexa <span class='cArgs'>[command]</span"},{title:"+weather <span class='cArgs'>[city]</span",category:"Utility",value:"Get the weather for a city"},{title:"+joke",category:"Utility",value:"Tell a joke"},{title:"+yoda <span class='cArgs'>[message]</span",category:"Utility",value:"Translates your message to yodaspeak!"},{title:"+stack <span class='cArgs'>[search query]</span",category:"Utility",value:"Searches stack overflow"},{title:"+dice <span class='cArgs'>[number of sides]</span",category:"Utility",value:"Roles a dice with a number of sides"},{title:"+coinflip",category:"Utility",value:"Flips a coin"},{title:"+math <span class='cArgs'>[number1]</span <span class='cArgs'>[operator]</span <span class='cArgs'>[number2]</span",category:"Utility",value:"Does basic math operations. Gets pissed off if you divide by 0"},{title:"+dab",category:"Utility",value:"Dabs on them haters"},{title:"+translate <span class='cArgs'>[language code]</span <span class='cArgs'>[input text]</span",category:"Utility",value:"Translate's input to specified language, for a list of ISO 639-1 codes go to: <a href='https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>wikipedia</a>"},{title:"+currency <span class='cArgs'>[to]</span <span class='cArgs'>[from]</span (Example: BTC USD)",category:"Utility",value:"Gets and compares currency prices"},{title:"+wolfram <span class='cArgs'>[search]</span",category:"Utility",value:"Searches Wolfram Alpha"},{title:"+bug <span class='cArgs'>[description]</span",category:"Utility",value:"Report a bug"},{title:"+credits",category:"Utility",value:"Visit the github repo!"},{title:"+invite",category:"Utility",value:"Invite our official bot to your server!"},{title:"+support",category:"Utility",value:"Join our support server."},{title:"+daily",category:"Money",value:"Get 500 ZCoins every 24 hours"},{title:"+slots",category:"Money",value:"Test your luck with 250 ZCoins!"},{title:"+profile",category:"Money",value:"View your user profile (xp, zcoins, level)"},{title:"+shop",category:"Money",value:"View the shop"},{title:"+buy",category:"Money",value:"Buy items from the shop"},{title:"+forbes",category:"Money",value:"Checkout the richest people alive. Forbes."},{title:"+fortnite <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",category:"Games",value:"Fortnite Stats"},{title:"+pubg <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",category:"Games",value:"PUBG Stats"},{title:"+subs",category:"Memes",value:"Lists subscribed subreddits."},{title:"+setmemechannel <span class='cArgs'>[channel]<span>",category:"Memes",value:"Set channel for dumping memes"},{title:"+setmemeinterval <span class='cArgs'>[interval]<span>",category:"Memes",value:"Set interval for dumping memes (in hours)"},{title:"+addsub <span class='cArgs'>[subreddit title]<span>",category:"Memes",value:"add a subreddit for getting memes (/r/ format)"},{title:"+removesub <span class='cArgs'>[subreddit title]<span>",category:"Memes",value:"remove a subreddit for getting memes (/r/ format)"},{title:"+memes",category:"Memes",value:"gets all the memes from Reddit"},{title:"+join",category:"Music",value:"Join Voice channel of message sender"},{title:"+add <span class='cArgs'>[URL or Search Query]</span>",category:"Music",value:"Add a valid youtube link to the queue"},{title:"+queue",category:"Music",value:"Shows the current queue, up to 15 songs shown."},{title:"+play",category:"Music",value:"Play the music queue if already joined to a voice channel"},{title:"+pause",category:"Music",value:"pauses the music"},{title:"+resume",category:"Music",value:"resumes the music"},{title:"+skip",category:"Music",value:"skips the playing song"},{title:"+time",category:"Music",value:"Shows the playtime of the song."}]}},methods:{login:function(e){},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},E=T,O=(a("5177"),Object(r["a"])(E,d,p,!1,null,"3a296bd2",null));O.options.__file="Home.vue";var j=O.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),a("div",{staticClass:"content",staticStyle:{"min-height":"200px","box-shadow":"0px -60px 00px #c55b2a"}},[a("div",{staticClass:"container slide-in-elliptic-top-fwd"},[a("div",{staticClass:"row"},[e._m(0),a("div",{staticClass:"seven columns",staticStyle:{"text-align":"left"}},[e._m(1),a("h2",[e._v("Select a server:")]),a("form",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedValue,expression:"selectedValue"}],staticClass:"serverSelect",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selectedValue=t.target.multiple?a:a[0]},e.onChange]}},e._l(e.filters,function(t){return a("option",{staticClass:"serverlistitem",domProps:{value:t.id}},[e._v(e._s(t.name))])})),a("br"),a("hr"),a("span",{staticClass:"toggleitem"},[e._v("Music Bot:")]),a("div",{staticClass:"toggle slide"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.MusicBotState,expression:"MusicBotState"}],attrs:{id:"c",type:"checkbox"},domProps:{checked:Array.isArray(e.MusicBotState)?e._i(e.MusicBotState,null)>-1:e.MusicBotState},on:{change:function(t){var a=e.MusicBotState,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);s.checked?r<0&&(e.MusicBotState=a.concat([i])):r>-1&&(e.MusicBotState=a.slice(0,r).concat(a.slice(r+1)))}else e.MusicBotState=o}}}),e._m(2)]),a("br"),a("span",{staticClass:"toggleitem"},[e._v("Welcome Messages:")]),a("div",{staticClass:"toggle slide"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.WelcomeMessageState,expression:"WelcomeMessageState"}],attrs:{id:"d",type:"checkbox"},domProps:{checked:Array.isArray(e.WelcomeMessageState)?e._i(e.WelcomeMessageState,null)>-1:e.WelcomeMessageState},on:{change:function(t){var a=e.WelcomeMessageState,s=t.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=e._i(a,i);s.checked?r<0&&(e.WelcomeMessageState=a.concat([i])):r>-1&&(e.WelcomeMessageState=a.slice(0,r).concat(a.slice(r+1)))}else e.WelcomeMessageState=o}}}),e._m(3)]),a("br"),a("span",{staticClass:"toggleitem"},[e._v("Prefix:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Prefix,expression:"Prefix"}],staticClass:"modSelect",staticStyle:{float:"right",width:"75px"},domProps:{value:e.Prefix},on:{input:function(t){t.target.composing||(e.Prefix=t.target.value)}}}),e._v(e._s(e.Prefix)),a("br"),a("span",{staticClass:"toggleitem"},[e._v("Modlog Channel:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.ModselectedValue,expression:"ModselectedValue"}],staticClass:"modSelect",staticStyle:{float:"right",width:"77px"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.ModselectedValue=t.target.multiple?a:a[0]}}},e._l(e.modfilters,function(t){return a("option",{staticClass:"serverlistitem",domProps:{value:t.id}},[e._v(e._s(t.name))])})),a("br"),a("br"),a("input",{staticClass:"sp-btn",staticStyle:{float:"right","font-size":"22px"},attrs:{type:"submit",value:"Save"}}),a("br"),a("br"),a("h3",[e._v("Stats:")]),a("p",{staticClass:"Serveritem"},[e._v("\n                players: "+e._s(e.playercount)+"\n              ")]),a("p")]),a("hr")])])])]),a("ZFooter",{attrs:{btntext:"Logout",btnurl:"home"}})],1)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"five columns centertext"},[a("h1",[e._v("Dashboard")]),a("button",{staticClass:"sp-btn",attrs:{onclick:"window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"}},[e._v(" Invite Me!")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticStyle:{"padding-top":"32px"}},[e._v("\n          Welcome to the dashboard! Here you can easily conifgure Zora bot for your server. As well as view helpful statistics!"),a("br")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"c"}},[a("div",{staticClass:"card slide"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"d"}},[a("div",{staticClass:"card slide"})])}],U=a("0a12"),W=a.n(U),q={name:"dash",components:{ZFooter:b},props:{filters:Array,modfilters:Array,selectedValue:String,ModselectedValue:String,Prefix:String,MusicBotState:Boolean,WelcomeMessageState:Boolean},data:function(){return{isClosed:!1,dshow:!0,btisClosed:!1}},sockets:{connect:function(){console.log("Socket Connected!")},getservers:function(e){}},mounted:function(){},methods:{onChange:function(e){alert("Hello "+this.selectedValue+"!")},Save:function(e){}},beforeMount:function(){var e=this;this.$options.sockets.event_name=function(t){console.log(t),console.log(filters),e.filters=t}}},V=q,Z=(a("1c14"),Object(r["a"])(V,$,I,!1,null,"f814c89a",null));Z.options.__file="Dashboard.vue";var N=Z.exports;s["a"].use(k.a,B.a),s["a"].use(u["a"]),s["a"].use(W.a,"https://dta.dekutree.org:443",{secure:!0});var Q=new u["a"]({routes:[{path:"/",name:"home",component:j},{path:"/dashboard",name:"dashboard",component:N}]});a("d971"),a("e382"),a("5aea"),s["a"].config.productionTip=!1,new s["a"]({router:Q,render:function(e){return e(l)}}).$mount("#app")},"5aea":function(e,t,a){},"9c3e":function(e,t,a){},a9a8:function(e,t,a){},b0e9:function(e,t,a){},c21b:function(e,t,a){},c5d7:function(e,t,a){e.exports=a.p+"img/ZoraWeb.3ac37b1a.svg"},d4b0:function(e,t,a){"use strict";var s=a("fb79"),o=a.n(s);o.a},d971:function(e,t,a){},e382:function(e,t,a){},fb79:function(e,t,a){}});
//# sourceMappingURL=app.7adfdc70.js.map