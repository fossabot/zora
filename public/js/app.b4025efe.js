(function(t){function e(e){for(var s,r,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)r=n[d],o[r]&&p.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},o={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("c21b"),o=a.n(s);o.a},"1b30":function(t,e,a){"use strict";var s=a("b0e9"),o=a.n(s);o.a},5177:function(t,e,a){"use strict";var s=a("a9a8"),o=a.n(s);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}}),a("router-view")],1)},i=[],r=(a("034f"),a("2877")),n={},c=Object(r["a"])(n,o,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),t._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"container slide-in-elliptic-top-fwd"},[t._m(1),a("br"),a("br"),a("hr"),a("h2",[t._v("Commands")]),a("Commands",{attrs:{items:t.commandlist}})],1)]),a("ZFooter",{attrs:{btntext:"Dashboard",btnurl:"api/discord/login"}})],1)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",staticStyle:{height:"50%"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"column"},[s("img",{staticStyle:{width:"100%"},attrs:{src:a("c5d7"),alt:"ZoraBOT"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"five columns centertext statusheader"},[a("h1",[t._v("This is Zora BOT")]),a("button",{staticClass:"sp-btn",attrs:{onclick:"window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"}},[t._v(" Invite Me!")]),a("br"),a("hr"),a("a",{attrs:{href:"https://discordbots.org/bot/478616471640080395"}},[a("img",{attrs:{src:"https://discordbots.org/api/widget/478616471640080395.svg",alt:"Zora"}})])]),a("div",{staticClass:"seven columns"},[a("p",{staticStyle:{"padding-top":"32px"}},[t._v("\n          Zora is the bot for everyone! With open source code, we have created a bot anyone can adapt to their own needs. Whether you just need a simple music bot, or you want to browse reddit and stackoverflow. Zora is the bot for you!\n          ")]),a("hr"),a("p",[t._v("\n            Zora was created by "),a("a",{attrs:{href:"http://www.averywagar.com/"}},[t._v("Avery Wagar")]),t._v(" and "),a("a",{attrs:{href:"https://nlaha.com"}},[t._v("Nathan Laha")]),a("br"),a("br"),a("button",{staticClass:"sp-btn",staticStyle:{"margin-right":"20px","margin-left":"20px"},attrs:{onclick:"window.open('https://github.com/ajmwagar/discordbot')"}},[t._v("Source Code")]),a("button",{staticClass:"sp-btn",staticStyle:{"margin-top":"22px","margin-right":"20px","margin-left":"20px"},attrs:{onclick:"window.open('https://discordbots.org/bot/478616471640080395/vote')"}},[t._v("Vote for us!")])])])])}],m=(a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),a("button",{staticClass:"closebtn",class:{closedbutton:t.isClosed},on:{click:function(e){t.isClosed=!t.isClosed}}},[a("i",{staticClass:"material-icons"},[t._v("keyboard_arrow_down")])]),a("footer",{staticClass:"mainfooter",class:{closed:t.isClosed}},[a("a",{attrs:{href:"https://dta.dekutree.org/api/discord/login"}},[a("button",{staticClass:"sp-btn-s",class:{closed:t.isClosed},on:{click:function(e){t.dshow=!t.dshow}}},[t._v(t._s(t.btntext))])])])])}),v=[],f=a("7c76"),g={name:"footer",props:["btntext","btnurl"],data:function(){return{isClosed:!0,dshow:!0}}},h=g,y=(a("d4b0"),Object(r["a"])(h,m,v,!1,null,"0e5fa410",null));y.options.__file="zfooter.vue";var b=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"rootEl",staticClass:"faq"},[a("div",{staticClass:"faq-wrapper"},[t.hasNavigation?a("nav",{staticClass:"faq__nav"},t._l(t.categories,function(e,s){return a("div",{key:"category-"+s,class:t.generateCategoryClasses(e),domProps:{innerHTML:t._s(e)},on:{click:function(a){t.makeActiveCategory(e)}}})})):t._e(),a("transition",{attrs:{name:"accordion-fade-slide",mode:"out-in"}},[t.showAccordion?a("div",{staticClass:"accordion"},t._l(t.categoryItems,function(e,s){return a("div",{key:"accordion-item-"+s,staticClass:"accordion__item"},[a("div",{class:t.generateQuestionClasses(s),on:{click:function(e){t.makeActive(s)}}},[a("p",{staticClass:"accordion__title-text",domProps:{innerHTML:t._s(e[t.questionProperty])}}),a("button",{class:t.generateButtonClasses(s)})]),a("collapse-transition",[s===t.activeQuestionIndex?a("div",[a("p",{staticClass:"accordion__value",domProps:{innerHTML:t._s(e[t.answerProperty])}})]):t._e()])],1)})):t._e()])],1)])},w=[],C={name:"Commands",components:{CollapseTransition:f["a"]},data:function(){return{activeTab:"",activeQuestionIndex:null,showAccordion:!0}},props:{items:{type:Array,required:!0},questionProperty:{type:String,default:"title"},answerProperty:{type:String,default:"value"},tabName:{type:String,default:"category"},activeColor:{type:String,default:"#c55b2a"},borderColor:{type:String,default:"#9E9E9E"},fontColor:{type:String,default:"#2c3e50"}},computed:{categories:function(){var t=this,e=this.items.map(function(e){return e[t.tabName]}).filter(function(t,e,a){return a.indexOf(t)===e});return this.activeTab=e[0],e},categoryItems:function(){var t=this;return this.items.filter(function(e){return e[t.tabName]===t.activeTab})},hasNavigation:function(){return!!this.categories[0]}},methods:{makeActive:function(t){this.activeQuestionIndex===t?this.activeQuestionIndex=null:this.activeQuestionIndex=t},generateButtonClasses:function(t){return["accordion__toggle-button",this.activeQuestionIndex===t?"accordion__toggle-button_active":null]},generateQuestionClasses:function(t){return["accordion__title",this.activeQuestionIndex===t?"accordion__title_active":null]},makeActiveCategory:function(t){var e=this;this.activeTab!==t&&(this.showAccordion=!1,this.activeTab=t,this.activeQuestionIndex=null,setTimeout(function(){e.showAccordion=!0},300))},generateCategoryClasses:function(t){return["faq__nav-item",this.activeTab===t?"faq__nav-item_active":null]}},mounted:function(){this.$refs.rootEl.style.setProperty("--active-color",this.activeColor),this.$refs.rootEl.style.setProperty("--border-color",this.borderColor),this.$refs.rootEl.style.setProperty("--font-color",this.fontColor)}},S=C,A=(a("1b30"),Object(r["a"])(S,_,w,!1,null,"16fe67e3",null));A.options.__file="commands.vue";var x=A.exports,M=a("a7fe"),k=a.n(M),P=a("bc3a"),B=a.n(P);(function(){var t=document.querySelectorAll("body"),e=.5;[].slice.call(t).forEach(function(t,a){var s=window.pageYOffset,o="50% "+s*e+"px";t.style.backgroundPosition=o}),window.onscroll=function(){[].slice.call(t).forEach(function(t,a){var s=window.pageYOffset,o="50% "+s*e+"px";t.style.backgroundPosition=o})}})();var T={computed:{username:function(){return this.$route.params.username}},name:"app",components:{ZFooter:b,Commands:x},data:function(){return{isClosed:!1,dshow:!0,btisClosed:!1,commandlist:[{title:"+help",category:"Admin",value:"Show a help menu"},{title:"+ban <span class='cArgs'>[user]</span",category:"Admin",value:"Ban a user (admins only)"},{title:"+setlog <span class='cArgs'>[channel]</span",category:"Admin",value:"Set channel for modlog"},{title:"+kick <span class='cArgs'>[user]</span",category:"Admin",value:"Kick a user (admins and mods only)"},{title:"+purge <span class='cArgs'>[number of messages]</span",category:"Admin",value:"Purge a channel"},{title:"+bws",category:"Admin",value:"List banned words for automod"},{title:"+addbw <span class='cArgs'>[words]</span",category:"Admin",value:"Add words to ban list"},{title:"+removebw <span class='cArgs'>[words]</span",category:"Admin",value:"Remove words from ban list"},{title:"+ping",category:"Admin",value:"Pong?"},{title:"+say <span class='cArgs'>[message]</span",category:"Admin",value:"Say a message"},{title:"+prefix",category:"Admin",value:"Sets the bot prefix"},{title:"+alexamode",category:"Admin",value:"Changes the prefix to Alexa <span class='cArgs'>[command]</span"},{title:"+weather <span class='cArgs'>[city]</span",category:"Utility",value:"Get the weather for a city"},{title:"+joke",category:"Utility",value:"Tell a joke"},{title:"+yoda <span class='cArgs'>[message]</span",category:"Utility",value:"Translates your message to yodaspeak!"},{title:"+stack <span class='cArgs'>[search query]</span",category:"Utility",value:"Searches stack overflow"},{title:"+dice <span class='cArgs'>[number of sides]</span",category:"Utility",value:"Roles a dice with a number of sides"},{title:"+coinflip",category:"Utility",value:"Flips a coin"},{title:"+math <span class='cArgs'>[number1]</span <span class='cArgs'>[operator]</span <span class='cArgs'>[number2]</span",category:"Utility",value:"Does basic math operations. Gets pissed off if you divide by 0"},{title:"+dab",category:"Utility",value:"Dabs on them haters"},{title:"+translate <span class='cArgs'>[language code]</span <span class='cArgs'>[input text]</span",category:"Utility",value:"Translate's input to specified language, for a list of ISO 639-1 codes go to: <a href='https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>wikipedia</a>"},{title:"+currency <span class='cArgs'>[to]</span <span class='cArgs'>[from]</span (Example: BTC USD)",category:"Utility",value:"Gets and compares currency prices"},{title:"+wolfram <span class='cArgs'>[search]</span",category:"Utility",value:"Searches Wolfram Alpha"},{title:"+bug <span class='cArgs'>[description]</span",category:"Utility",value:"Report a bug"},{title:"+credits",category:"Utility",value:"Visit the github repo!"},{title:"+invite",category:"Utility",value:"Invite our official bot to your server!"},{title:"+support",category:"Utility",value:"Join our support server."},{title:"+daily",category:"Money",value:"Get 500 ZCoins every 24 hours"},{title:"+slots",category:"Money",value:"Test your luck with 250 ZCoins!"},{title:"+profile",category:"Money",value:"View your user profile (xp, zcoins, level)"},{title:"+shop",category:"Money",value:"View the shop"},{title:"+buy",category:"Money",value:"Buy items from the shop"},{title:"+forbes",category:"Money",value:"Checkout the richest people alive. Forbes."},{title:"+fortnite <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",category:"Games",value:"Fortnite Stats"},{title:"+pubg <span class='cArgs'>[platform]<span> <span class='cArgs'>[usertitle]<span>",category:"Games",value:"PUBG Stats"},{title:"+subs",category:"Memes",value:"Lists subscribed subreddits."},{title:"+setmemechannel <span class='cArgs'>[channel]<span>",category:"Memes",value:"Set channel for dumping memes"},{title:"+setmemeinterval <span class='cArgs'>[interval]<span>",category:"Memes",value:"Set interval for dumping memes (in hours)"},{title:"+addsub <span class='cArgs'>[subreddit title]<span>",category:"Memes",value:"add a subreddit for getting memes (/r/ format)"},{title:"+removesub <span class='cArgs'>[subreddit title]<span>",category:"Memes",value:"remove a subreddit for getting memes (/r/ format)"},{title:"+memes",category:"Memes",value:"gets all the memes from Reddit"},{title:"+join",category:"Music",value:"Join Voice channel of message sender"},{title:"+add <span class='cArgs'>[URL or Search Query]</span>",category:"Music",value:"Add a valid youtube link to the queue"},{title:"+queue",category:"Music",value:"Shows the current queue, up to 15 songs shown."},{title:"+play",category:"Music",value:"Play the music queue if already joined to a voice channel"},{title:"+pause",category:"Music",value:"pauses the music"},{title:"+resume",category:"Music",value:"resumes the music"},{title:"+skip",category:"Music",value:"skips the playing song"},{title:"+time",category:"Music",value:"Shows the playtime of the song."}]}},methods:{login:function(t){},goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},$=T,E=(a("5177"),Object(r["a"])($,d,p,!1,null,"3a296bd2",null));E.options.__file="Home.vue";var O=E.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("link",{attrs:{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}}),a("div",{staticClass:"content",staticStyle:{"min-height":"200px","box-shadow":"0px -60px 00px #c55b2a"}},[a("div",{staticClass:"container slide-in-elliptic-top-fwd"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"seven columns",staticStyle:{"text-align":"left"}},[t._m(1),a("h2",[t._v("Select a server:")]),a("form",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedValue,expression:"selectedValue"}],staticClass:"serverSelect",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selectedValue=e.target.multiple?a:a[0]},t.onChange]}},t._l(t.filters,function(e){return a("option",{staticClass:"serverlistitem",domProps:{value:e.id}},[t._v(t._s(e.name))])})),a("br"),a("hr"),a("span",{staticClass:"toggleitem"},[t._v("Music Bot:")]),a("div",{staticClass:"toggle slide"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.MusicBotState,expression:"MusicBotState"}],attrs:{id:"c",type:"checkbox"},domProps:{checked:Array.isArray(t.MusicBotState)?t._i(t.MusicBotState,null)>-1:t.MusicBotState},on:{change:function(e){var a=t.MusicBotState,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&(t.MusicBotState=a.concat([i])):r>-1&&(t.MusicBotState=a.slice(0,r).concat(a.slice(r+1)))}else t.MusicBotState=o}}}),t._m(2)]),a("br"),a("span",{staticClass:"toggleitem"},[t._v("Welcome Messages:")]),a("div",{staticClass:"toggle slide"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.WelcomeMessageState,expression:"WelcomeMessageState"}],attrs:{id:"d",type:"checkbox"},domProps:{checked:Array.isArray(t.WelcomeMessageState)?t._i(t.WelcomeMessageState,null)>-1:t.WelcomeMessageState},on:{change:function(e){var a=t.WelcomeMessageState,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&(t.WelcomeMessageState=a.concat([i])):r>-1&&(t.WelcomeMessageState=a.slice(0,r).concat(a.slice(r+1)))}else t.WelcomeMessageState=o}}}),t._m(3)]),a("br"),a("span",{staticClass:"toggleitem"},[t._v("Prefix:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Prefix,expression:"Prefix"}],staticClass:"modSelect",staticStyle:{float:"right",width:"75px"},domProps:{value:t.Prefix},on:{input:function(e){e.target.composing||(t.Prefix=e.target.value)}}}),a("br"),a("span",{staticClass:"toggleitem"},[t._v("Modlog Channel:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Modlog,expression:"Modlog"}],staticClass:"modSelect",staticStyle:{float:"right",width:"75px"},domProps:{value:t.Modlog},on:{input:function(e){e.target.composing||(t.Modlog=e.target.value)}}}),a("br"),a("br"),a("input",{staticClass:"sp-btn",staticStyle:{float:"right","font-size":"22px"},attrs:{type:"submit",value:"Save"}}),a("br"),a("br"),a("h3",[t._v("Stats:")]),a("p",{staticClass:"Serveritem"},[t._v("\n                players: "+t._s(t.playercount)+"\n              ")]),a("p")]),a("hr")])])])]),a("ZFooter",{attrs:{btntext:"Logout",btnurl:"home"}})],1)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"five columns centertext"},[a("h1",[t._v("Dashboard")]),a("button",{staticClass:"sp-btn",attrs:{onclick:"window.open('https://discordapp.com/api/oauth2/authorize?client_id=478616471640080395&permissions=8&scope=bot')"}},[t._v(" Invite Me!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticStyle:{"padding-top":"32px"}},[t._v("\n          Welcome to the dashboard! Here you can easily conifgure Zora bot for your server. As well as view helpful statistics!"),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"c"}},[a("div",{staticClass:"card slide"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"d"}},[a("div",{staticClass:"card slide"})])}],U=(a("c5f6"),a("0a12")),W=a.n(U),q={name:"dash",components:{ZFooter:b},props:{playercount:Number,filters:Array,selectedValue:String,Prefix:String,Modlog:String,MusicBotState:Boolean,WelcomeMessageState:Boolean,bannedwords:Array,currentbw:String},data:function(){return{isClosed:!1,dshow:!0,btisClosed:!1}},sockets:{connect:function(){console.log("Socket Connected!")},updateServers:function(t){this.filters=t},updateStatus:function(t,e,a,s,o,i){this.Modlog=t,this.prefix=e,this.MusicBotState=a,this.WelcomeMessageState=s,this.bannedwords=o,this.playercount=i}},mounted:function(){},methods:{onChange:function(t){var e=this.$route.query.token;this.$socket.emit("getChannels",e,this.selectedValue)},Save:function(t){}},beforeMount:function(){var t=this.$route.query.token;this.$socket.emit("getServers",t)}},Z=q,N=(a("59b7"),Object(r["a"])(Z,j,I,!1,null,"79fcc76c",null));N.options.__file="Dashboard.vue";var Q=N.exports;s["a"].use(k.a,B.a),s["a"].use(u["a"]),s["a"].use(W.a,"https://dta.dekutree.org:443",{secure:!0});var V=new u["a"]({routes:[{path:"/",name:"home",component:O},{path:"/dashboard",name:"dashboard",component:Q}]});a("d971"),a("e382"),a("5aea"),s["a"].config.productionTip=!1,new s["a"]({router:V,render:function(t){return t(l)}}).$mount("#app")},"59b7":function(t,e,a){"use strict";var s=a("62b6"),o=a.n(s);o.a},"5aea":function(t,e,a){},"62b6":function(t,e,a){},a9a8:function(t,e,a){},b0e9:function(t,e,a){},c21b:function(t,e,a){},c5d7:function(t,e,a){t.exports=a.p+"img/ZoraWeb.3ac37b1a.svg"},d4b0:function(t,e,a){"use strict";var s=a("fb79"),o=a.n(s);o.a},d971:function(t,e,a){},e382:function(t,e,a){},fb79:function(t,e,a){}});
//# sourceMappingURL=app.b4025efe.js.map