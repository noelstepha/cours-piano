import{r as m,o as u,c as p,a as e,n as d,b as n,w as a,d as s,e as L,f as x,t as q,g as y,p as g,h as b,F as B,i as R,j as H,k as P,l as E}from"./vendor.0c5795cb.js";const N=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))_(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&_(r)}).observe(document,{childList:!0,subtree:!0});function o(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function _(l){if(l.ep)return;l.ep=!0;const i=o(l);fetch(l.href,i)}};N();var h=(t,c)=>{const o=t.__vccOpts||t;for(const[_,l]of c)o[_]=l;return o};const O={name:"Navbar.vue",data(){return{menuOpen:!0}},created(){console.log(this.$router.currentRoute.value.path)},methods:{toggle(){this.menuOpen=!this.menuOpen}}},D={class:"bg-darkIrish"},U={class:"max-w-7xl mx-auto px-2 md:px-6 lg:px-8"},F={class:"relative flex items-center justify-between h-16"},G={class:"absolute inset-y-0 left-0 flex items-center md:hidden"},Q=e("span",{class:"sr-only"},"Open main menu",-1),W=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16M4 18h16"},null,-1),Y=[W],Z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),J=[Z],K={class:"flex-1 flex items-center justify-center md:items-stretch md:justify-start"},X=e("div",{class:"flex-shrink-0 flex items-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"white","stroke-width":"2","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"})])],-1),ee={class:"hidden md:block md:ml-6"},te={class:"flex space-x-4"},se=s("Accueil"),oe=s("Cours enfant"),ne=s("Cours adultes et ados"),ae=s("Cours \xE0 distance"),re=s("Tarifs / Horaires"),le=s("Contact"),ie={class:"px-2 pt-2 pb-3 space-y-1"},ce=s("Accueil"),de=s("Cours enfants"),ue=s("Cours adultes et ados"),pe=s("Cours \xE0 distance"),_e=s("Tarifs et Horaires"),he=s("Contact");function ve(t,c,o,_,l,i){const r=m("router-link");return u(),p("nav",D,[e("div",U,[e("div",F,[e("div",G,[e("button",{type:"button",class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",onClick:c[0]||(c[0]=(...v)=>i.toggle&&i.toggle(...v))},[Q,(u(),p("svg",{class:d([{hidden:!l.menuOpen,block:l.menuOpen},"block h-6 w-6"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},Y,2)),(u(),p("svg",{class:d([{hidden:l.menuOpen,block:!l.menuOpen},"h-6 w-6"]),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},J,2))])]),e("div",K,[X,e("div",ee,[e("div",te,[n(r,{to:"/",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/","bg-gray-900":t.$router.currentRoute.value.path==="/","text-white":t.$router.currentRoute.value.path==="/"}]),"aria-current":"page"},{default:a(()=>[se]),_:1},8,["class"]),n(r,{to:"/children",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/children","bg-gray-900":t.$router.currentRoute.value.path==="/children","text-white":t.$router.currentRoute.value.path==="/children"}])},{default:a(()=>[oe]),_:1},8,["class"]),n(r,{to:"/adult",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/adult","bg-gray-900":t.$router.currentRoute.value.path==="/adult","text-white":t.$router.currentRoute.value.path==="/adult"}])},{default:a(()=>[ne]),_:1},8,["class"]),n(r,{to:"/online",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/online","bg-gray-900":t.$router.currentRoute.value.path==="/online","text-white":t.$router.currentRoute.value.path==="/online"}])},{default:a(()=>[ae]),_:1},8,["class"]),n(r,{to:"/pricing",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/pricing","bg-gray-900":t.$router.currentRoute.value.path==="/pricing","text-white":t.$router.currentRoute.value.path==="/pricing"}])},{default:a(()=>[re]),_:1},8,["class"]),n(r,{to:"/contact",class:d(["px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium",{"text-gray-300":t.$router.currentRoute.value.path!=="/contact","bg-gray-900":t.$router.currentRoute.value.path==="/contact","text-white":t.$router.currentRoute.value.path==="/contact"}])},{default:a(()=>[le]),_:1},8,["class"])])])])])]),e("div",{class:d([{hidden:l.menuOpen,block:!l.menuOpen},"md:hidden"])},[e("div",ie,[n(r,{to:"/",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/"}]),"aria-current":"page"},{default:a(()=>[ce]),_:1},8,["class"]),n(r,{to:"/children",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/children","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/children"}])},{default:a(()=>[de]),_:1},8,["class"]),n(r,{to:"/adult",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/adult","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/adult"}])},{default:a(()=>[ue]),_:1},8,["class"]),n(r,{to:"/online",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/online","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/online"}])},{default:a(()=>[pe]),_:1},8,["class"]),n(r,{to:"/pricing",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/pricing","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/pricing"}])},{default:a(()=>[_e]),_:1},8,["class"]),n(r,{to:"/contact",class:d(["block px-3 py-2 rounded-md text-base font-medium",{"text-gray-300 hover:bg-gray-700 hover:text-white":t.$router.currentRoute.value.path!=="/contact","bg-gray-900 text-white":t.$router.currentRoute.value.path==="/contact"}])},{default:a(()=>[he]),_:1},8,["class"])])],2)])}var me=h(O,[["render",ve]]);const fe={name:"Footer"},xe={class:"flex flex-wrap text-sm text-white text-center md:text-left"},ge={class:"w-full md:w-1/3 p-5 flex flex-col items-center"},be=e("div",{class:"text-xl font-bold mb-3"},"Explorer",-1),we=s("Accueil"),$e=e("br",null,null,-1),ye=s("Cours enfants"),ke=e("br",null,null,-1),Ce=s("Cours adultes et ados"),qe=e("br",null,null,-1),Le=s("Tarifs/Horaires"),Be=e("br",null,null,-1),je=s("Contact"),Me=e("br",null,null,-1),Re=L('<div class="w-full md:w-1/3 p-5 flex flex-col items-center"><div><div class="text-xl font-bold mb-3">Adresse</div> Espace Musical des Blanchers<br> 15 rue Laganne<br> 31300 Toulouse<br><br> 05 62 48 38 33<br><a href="mailto:espace.blanchers@gmail.com">espace.blanchers@gmail.com</a></div></div><div class="w-full md:w-1/3 p-5 flex flex-col items-center"><div class="text-xl font-bold mb-3">R\xE9seaux sociaux</div><div class="flex-grow"> Pour plus d&#39;informations, suivez nous sur notre page <a href="https://www.facebook.com/Espace-Musical-des-Blanchers-108883338593799">Facebook</a><a href="https://www.facebook.com/Espace-Musical-des-Blanchers-108883338593799"><svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path><br></svg></a></div></div><div class="w-full flex justify-center p-3"><span class="mx-5">\xA9 Espace Musical des Banchers</span> | <span class="mx-5">Tous Droits R\xE9serv\xE9s</span></div>',3);function Te(t,c,o,_,l,i){const r=m("router-link");return u(),p("div",xe,[e("div",ge,[e("div",null,[be,n(r,{to:"/",class:"inline-block my-1"},{default:a(()=>[we]),_:1}),$e,n(r,{to:"/children",class:"inline-block my-1"},{default:a(()=>[ye]),_:1}),ke,n(r,{to:"/adult",class:"inline-block my-1"},{default:a(()=>[Ce]),_:1}),qe,n(r,{to:"/pricing",class:"inline-block my-1"},{default:a(()=>[Le]),_:1}),Be,n(r,{to:"/contact",class:"inline-block my-1"},{default:a(()=>[je]),_:1}),Me])]),Re])}var Se=h(fe,[["render",Te]]);const Ae={key:0,class:"bg-white shadow"},ze={class:"bg-darkIrish"},Ie={setup(t){return(c,o)=>{const _=m("router-view");return u(),p("div",null,[c.$route.meta.title?(u(),p("header",Ae,[n(me)])):x("",!0),e("main",null,[n(_)]),e("footer",ze,[n(Se)])])}}};var Ve="/cours-piano/img/clavier.png";const He={name:"Button",props:{text:String,dark:Boolean}},Pe={key:0};function Ee(t,c,o,_,l,i){return u(),p("button",{class:d(["bg-irish text-white p-2 px-4 uppercase border-2 hover:bg-transparent border-irish",{"hover:text-irish border-irish":!o.dark,"hover:text-white hover:border-white":o.dark}])},[o.text?(u(),p("span",Pe,q(o.text),1)):x("",!0),y(t.$slots,"default")],2)}var T=h(He,[["render",Ee]]);const Ne={name:"Banner",components:{Button:T}},j=t=>(g("data-v-76dddbb5"),t=t(),b(),t),Oe={class:"banner flex flex-col"},De={class:"flex-grow flex flex-col items-center justify-center text-3xl text-white text-center p-5"},Ue={class:"banner-text text-6xl md:text-8xl"},Fe=j(()=>e("span",{class:"font-baskerville italic"},"Espace musical des Blanchers",-1)),Ge=j(()=>e("br",null,null,-1)),Qe=j(()=>e("h1",{class:"text-2xl uppercase font-light text-center mt-20 mb-0"},"Cours de piano pour adultes et enfants \xE0 Toulouse",-1)),We={class:"flex flex-wrap justify-center mt-4"},Ye=s("Cours de piano"),Ze=s("Contactez nous"),Je={class:"flex justify-center mb-3"},Ke=j(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 9l-7 7-7-7"})],-1));function Xe(t,c,o,_,l,i){const r=m("router-link"),v=m("Button");return u(),p("div",Oe,[e("div",De,[e("div",Ue,[Fe,Ge,Qe,e("div",We,[n(v,{class:"text-base m-2 p-2 uppercase",dark:""},{default:a(()=>[n(r,{to:"#lesson"},{default:a(()=>[Ye]),_:1})]),_:1}),n(v,{class:"text-base m-2 p-2 uppercase",to:"/contact",dark:""},{default:a(()=>[n(r,{to:"/contact"},{default:a(()=>[Ze]),_:1})]),_:1})])])]),e("div",Je,[n(r,{to:"#school"},{default:a(()=>[Ke]),_:1})])])}var et=h(Ne,[["render",Xe],["__scopeId","data-v-76dddbb5"]]);const tt={name:"Title",props:{text:String}},st={class:"text-3xl uppercase"},ot=e("div",{class:"border-b border-b-blue-400 w-20 my-2.5"},null,-1);function nt(t,c,o,_,l,i){return u(),p(B,null,[e("h1",st,q(o.text),1),ot],64)}var w=h(tt,[["render",nt]]);const at={name:"CatchPhrase",props:{bgClass:String}};function rt(t,c,o,_,l,i){return u(),p("section",{class:d(["flex items-center mb-12 bg-fixed bg-cover bg-center w-full text-5xl italic text-white font-baskerville",{[o.bgClass]:!0}])},[y(t.$slots,"default",{},void 0,!0)],2)}var $=h(at,[["render",rt],["__scopeId","data-v-3bc1079f"]]);const lt={name:"AnimatedGradient"},it={class:"flex flex-col justify-center bg-animated-gradient"},ct={class:"bg-overwhite p-4"},dt={class:"bg-corners"};function ut(t,c,o,_,l,i){return u(),p("div",it,[e("div",ct,[e("div",dt,[y(t.$slots,"default",{},void 0,!0)])])])}var pt=h(lt,[["render",ut],["__scopeId","data-v-2f7e305d"]]);const _t={name:"PagePreview",components:{Title:w,Button:T},props:{reverse:Boolean,title:String,to:String,bgClass:String,first:Boolean,last:Boolean}},ht={class:"flex-grow"},vt=s("Lire plus");function mt(t,c,o,_,l,i){const r=m("Title"),v=m("router-link"),V=m("Button");return u(),p("div",{class:d(["m-auto max-w-screen-xl flex",{"flex-col-reverse md:flex-row":o.reverse,"flex-wrap":!o.reverse}])},[o.reverse?x("",!0):(u(),p("div",{key:0,class:d(["w-full md:w-1/2 h-80 bg-center bg-cover",{[o.bgClass]:!0}])},null,2)),e("div",{class:d(["w-full md:w-1/2 py-5 flex flex-col",{"pt-10":!o.first,"pb-10":!o.last,"pl-10":!o.reverse,"pr-10":o.reverse}])},[n(r,{text:o.title},null,8,["text"]),e("p",ht,[y(t.$slots,"default",{},void 0,!0)]),n(V,{class:"w-max mt-2"},{default:a(()=>[n(v,{to:o.to},{default:a(()=>[vt]),_:1},8,["to"])]),_:1})],2),o.reverse?(u(),p("div",{key:1,class:d(["w-full md:w-1/2 h-80 bg-center bg-cover",{[o.bgClass]:!0}])},null,2)):x("",!0)],2)}var M=h(_t,[["render",mt],["__scopeId","data-v-ce45183a"]]);const f=t=>(g("data-v-9c5e2e64"),t=t(),b(),t),ft={class:"bg-white"},xt={class:"flex justify-center"},gt=f(()=>e("div",{class:"flex flex-col items-center"},[e("div",{class:"w-full p-4 text-center"},[e("h1",{class:"text-3xl my-2 font-baskerville italic"},"C'est bient\xF4t la rentr\xE9e !"),e("br"),e("p",{class:"text-lg"},[s(" Vous pouvez nous contacter \xE0 partir du "),e("br"),e("span",{class:"text-xl font-baskerville italic"},"mercredi 31 Ao\xFBt 2022"),e("br"),s(" pour tout renseignement."),e("br"),e("br"),s(" Les cours reprendront \xE0 partir du "),e("br"),e("span",{class:"text-xl font-baskerville italic"},"lundi 5 Septembre 2022"),s("."),e("br"),s(" Inscription tout au long de l'ann\xE9e. ")])]),e("img",{class:"w-1/3 my-5",src:Ve,alt:"cours piano"})],-1)),bt={id:"school",class:"mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-col-reverse md:flex-row"},wt=f(()=>e("div",{class:"w-full h-80 md:w-1/3 bg-center bg-contain bg-no-repeat school-img"},null,-1)),$t={class:"w-full md:w-2/3"},yt=f(()=>e("div",null,[s(" Notre \xE9cole de piano, l'Espace Musical des Blanchers, est install\xE9e \xE0 Toulouse, dans le quartier de Saint-Cyprien, et propose des cours de piano de tous niveaux \xE0 partir de 8 ans."),e("br"),s(" Nous vous proposons des cours de piano, piano num\xE9rique, clavinova, ou clavier pour tous les \xE2ges du d\xE9butant au plus confirm\xE9."),e("br"),s(" Notre m\xE9thode d'enseignement vous permet d'apprendre la musique avec une p\xE9dagogie adapt\xE9e \xE0 votre \xE2ge, ainsi qu'\xE0 vos capacit\xE9s."),e("br"),s(" Notre professeur met plus de 15 ans d'exp\xE9rience \xE0 votre service, afin de vous apprendre \xE0 jouer du piano, tout en s'adaptant \xE0 votre niveau et \xE0 vos go\xFBts musicaux."),e("br"),s(" La salle de cours, insonoris\xE9e et climatis\xE9e, est \xE9quip\xE9e de pianos Yamaha r\xE9guli\xE8rement chang\xE9s pour que votre progression se passe toujours dans les meilleures conditions."),e("br")],-1)),kt=f(()=>e("div",{class:"flex items-center justify-center text-center h-40 w-full"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-12 w-12 mx-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})]),e("span",{class:"text-4xl"},"Un cours d'essai vous est offert"),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"inline h-12 w-12 mx-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"})])],-1)),Ct={class:"mb-12",id:"lesson"},qt=s(" Ce cours pour enfants s\u2019adresse aux enfants de 8 \xE0 14 ans et se passe en cours collectif de 2 \xE0 4 \xE9l\xE8ves. Notre professeur de musique accompagnera votre enfant dans son apprentissage du piano et son \xE9veil musical gr\xE2ce \xE0 son esprit p\xE9dagogue. Peu importe le niveau de votre enfant, d\xE9butant ou non, qu'il soit int\xE9ress\xE9 par le piano classique ou le clavier \xE9lectrique, le professeur pianiste revient sur les bases et fondamentaux du piano."),Lt=f(()=>e("br",null,null,-1)),Bt=s(" Ce cours de piano s\u2019adresse aux adultes et aux adolescents \xE0 partir de 15 ans. La m\xE9thode d'enseignement est con\xE7ue pour les d\xE9butants et les \xE9l\xE8ves exp\xE9riment\xE9s."),jt=f(()=>e("br",null,null,-1)),Mt=s(" Quel que soit votre niveau, d\xE9butant ou exp\xE9riment\xE9, il y aura toujours un cours de piano qui vous correspondra. "),Rt=s(" En compl\xE9ment des cours traditionnels, ils ont lieu \xE0 distance via WhatsApp, FaceTime, Zoom,\u2026 avec votre smartphone ou tablette,\u2026 quelque soit votre niveau ou votre \xE2ge. Pas besoin d\u2019\xE9quipement particulier."),Tt=f(()=>e("br",null,null,-1)),St=s(" Ces cours sont accessibles de fa\xE7on r\xE9guli\xE8re ou ponctuelle, en cas d\u2019incapacit\xE9 de se d\xE9placer pour un cours en pr\xE9sentiel. Des fichiers audios vous sont transmis pour compl\xE9ter le travail personnel. "),At=f(()=>e("div",{class:"flex flex-wrap items-center justify-center w-full mt-5 h-80"},[e("div",{class:"w-full md:w-1/2 flex flex-col justify-center items-center text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"})]),e("div",{class:"my-5 text-3xl"},"Un apprentissage ludique")]),e("div",{class:"w-full md:w-1/2 flex flex-col justify-center items-center text-center"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-20 w-20",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})]),e("div",{class:"my-5 text-3xl"},"15 ans d'experience")])],-1)),zt={class:"mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8 flex flex-wrap"},It=f(()=>e("div",{class:"w-1/3 h-40 bg-center bg-contain bg-no-repeat covid-img"},null,-1)),Vt={class:"w-2/3"},Ht=f(()=>e("div",null,[s(" Nous avons install\xE9 toute une panoplie de protections sous forme de parois de plexiglass et nettoyant d\xE9sinfectant, afin que vous puissiez suivre vos cours avec toutes les protections sanitaires qui s'imposent. "),e("br"),e("br"),s(" Pendant les p\xE9riodes de confinement ou couvre-feu, des cours de piano en ligne en mode visioconf\xE9rence avec un professeur en direct, sont toujours disponibles. ")],-1)),Pt={setup(t){return(c,o)=>(u(),p("div",ft,[n(et),e("section",xt,[n(pt,{class:"w-3/4 md:w-1/3 min-h-80 my-10 shadow-md"},{default:a(()=>[gt]),_:1})]),e("section",bt,[wt,e("div",$t,[n(w,{text:"L'\xE9cole"}),yt])]),n($,{"bg-class":"bg-gradient"},{default:a(()=>[kt]),_:1}),e("section",Ct,[n(M,{title:"Cours enfants","bg-class":"children-img",to:"/children",reverse:"",first:""},{default:a(()=>[qt,Lt]),_:1}),n(M,{title:"Cours adultes et adolescents","bg-class":"adult-img",to:"/adult"},{default:a(()=>[Bt,jt,Mt]),_:1}),n(M,{title:"Cours \xE0 distance","bg-class":"online-img",to:"/online",reverse:"",last:""},{default:a(()=>[Rt,Tt,St]),_:1})]),n($,{"bg-class":"bg-sheet-music"},{default:a(()=>[At]),_:1}),e("section",zt,[It,e("div",Vt,[n(w,{text:"Covid-19"}),Ht])])]))}};var Et=h(Pt,[["__scopeId","data-v-9c5e2e64"]]);const Nt={},Ot={class:"bg-white shadow"},Dt=e("div",{class:"mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8"},[e("h1",{class:"text-3xl font-bold leading-tight text-gray-900"},"Not Found")],-1),Ut=[Dt];function Ft(t,c){return u(),p("header",Ot,Ut)}var Gt=h(Nt,[["render",Ft]]);const Qt={name:"LessonValueBox",props:{title:String,row:Boolean,color:String}},Wt=t=>(g("data-v-401e1acc"),t=t(),b(),t),Yt={class:"flex flex-col"},Zt=Wt(()=>e("path",{d:"M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"},null,-1)),Jt=[Zt],Kt={key:0,class:"text-3xl mx-5 mb-5 font-baskerville italic"};function Xt(t,c,o,_,l,i){return u(),p("div",Yt,[e("div",{class:d(["p-10 flex flex-col h-full",{"pt-20":!o.row,"items-center":!o.row}])},[e("div",{class:d({"text-center":!o.row,"text-left":o.row}),style:R({color:o.color})},[(u(),p("svg",{xmlns:"http://www.w3.org/2000/svg",class:d(["h-16 w-16",{"float-left":o.row}]),viewBox:"0 0 20 20",fill:"currentColor"},Jt,2)),o.row?(u(),p("h1",Kt,q(o.title),1)):x("",!0)],6),o.row?x("",!0):(u(),p("h1",{key:0,class:"text-3xl mx-5 mb-5 font-baskerville text-center italic",style:R({color:o.color})},q(o.title),5)),e("p",{class:d({"text-center":!o.row,"text-left":o.row})},[y(t.$slots,"default",{},void 0,!0)],2)],2)])}var S=h(Qt,[["render",Xt],["__scopeId","data-v-401e1acc"]]);const es={name:"AdultLesson",components:{LessonValueBox:S,CatchPhrase:$}},ts=e("div",{class:"h-80 flex justify-center items-center text-center w-full"},"Cours pour adultes et adolescents ",-1),ss={class:"container mx-auto mb-10"},os={class:"flex flex-wrap align-start justify-start mx-5 md:mx-10 lg:mx-20"},ns=e("div",{class:"p-10"},[s(" Ce cours de piano s\u2019adresse aux adultes et aux adolescents \xE0 partir de 15 ans."),e("br"),s(" La m\xE9thode d'enseignement est con\xE7ue pour les d\xE9butants et les \xE9l\xE8ves exp\xE9riment\xE9s."),e("br"),s(" Quel que soit votre niveau, d\xE9butant ou exp\xE9riment\xE9, il y aura toujours un cours de piano qui vous correspondra. ")],-1),as=s(" Les cours de piano se d\xE9roulent en cours collectifs pour les enfants, par contre les adultes peuvent choisir entre les cours individuels et les cours collectifs."),rs=e("br",null,null,-1),ls=s(" Les cours collectifs se font avec des \xE9l\xE8ves de m\xEAme \xE2ge et de m\xEAme niveau pour que tout les \xE9l\xE8ves puissent \xE9voluer de mani\xE8re identique avec une \xE9mulation globale."),is=e("br",null,null,-1),cs=s(" Chaque \xE9l\xE8ve ayant un instrument pour jouer. "),ds=s(" D\xE8s le premier cours, les \xE9l\xE8ves apprennent \xE0 jouer un morceau de piano et touchent du doigt leurs premi\xE8res sensations musicales."),us=e("br",null,null,-1),ps=s(" Contrairement aux id\xE9es re\xE7ues, il n'y a pas d'\xE2ge limite pour commencer \xE0 apprendre le piano."),_s=e("br",null,null,-1),hs=s(" Vos seules limites \xE9tant votre envie et votre volont\xE9. "),vs=s(" Grace \xE0 une p\xE9dagogie moderne, durant les cours, vous allez apprendre \xE0 jouer du piano, mais aussi apprendre comment pratiquer pendant la semaine, au travers d'outils sp\xE9cifiques. S'entrainer ne n\xE9cessite pas que de l'obstination, il faut aussi la bonne m\xE9thode. L\u2019enseignement du solf\xE8ge \xE9volue avec la pratique de l\u2019instrument."),ms=e("br",null,null,-1),fs=s(" A chaque nouveau morceau, l'\xE9l\xE8ve apprend les nouveaux points de solf\xE8ge lui permettant de mieux comprendre la partition. Ainsi, pas besoin d'avoir d'exercices de solf\xE8ge. L'apprentissage se faisant au travers de la pratique du piano."),xs=e("br",null,null,-1),gs=s(" Durant les cours, on d\xE9veloppe les capacit\xE9s musicales globales (m\xE9lodie, oreille, rythme lecture et th\xE9orie) au travers de l\u2019apprentissage du clavier. "),bs=s(" Grace \xE0 des musiques vari\xE9es et de tout style, les \xE9l\xE8ves progressent tout en se faisant plaisir."),ws=e("br",null,null,-1),$s=s(" Ayant plus de 15 ans d'exp\xE9rience d'enseignement et bien plus, de pratique de la musique, je peux vous proposer un r\xE9pertoire de musiques, large et vari\xE9, quelque soit votre \xE2ge et votre univers musical. "),ys=s(" Les cours se d\xE9roulent sur des Yamaha Clavinova, qui sont des pianos num\xE9riques. Ces instruments permettent d'avoir le meilleur compromis avec l'instrument que poss\xE8dent les \xE9l\xE8ves. Ils se rapprochent au mieux possible d'un vrai piano tout en ayant les fonctionnalit\xE9s d'un synth\xE9tiseur."),ks=e("br",null,null,-1),Cs=s(" Quelque soit le r\xE9pertoire musical pratiqu\xE9 en cours, il y aura toujours une fonctionnalit\xE9 permettant de rendre l'apprentissage confortable. "),qs=e("div",{class:"p-10"},[s(" Un cours d'essai vous est offert."),e("br"),s(" N'h\xE9sitez pas \xE0 nous contacter pour de plus amples renseignements."),e("br")],-1);function Ls(t,c,o,_,l,i){const r=m("CatchPhrase"),v=m("LessonValueBox");return u(),p(B,null,[n(r,{"bg-class":"bg-adult"},{default:a(()=>[ts]),_:1}),e("section",null,[e("div",ss,[e("div",os,[ns,n(v,{title:"Des cours individuels ou collectifs",class:"w-full",color:"#2b7d7c",row:""},{default:a(()=>[as,rs,ls,is,cs]),_:1}),n(v,{title:"Un plaisir musical imm\xE9diat",class:"w-full",row:"",color:"#2b7d7c"},{default:a(()=>[ds,us,ps,_s,hs]),_:1}),n(v,{title:"Une p\xE9dagogie \xE9volutive",class:"w-full",color:"#2b7d7c",row:""},{default:a(()=>[vs,ms,fs,xs,gs]),_:1}),n(v,{title:"Un r\xE9pertoire adapt\xE9 \xE0 vos gouts musicaux",class:"w-full",color:"#2b7d7c",row:""},{default:a(()=>[bs,ws,$s]),_:1}),n(v,{title:"Instruments de cours",class:"w-full",color:"#2b7d7c",row:""},{default:a(()=>[ys,ks,Cs]),_:1}),qs])])])],64)}var Bs=h(es,[["render",Ls]]);const js={name:"ChildrenLesson",components:{LessonValueBox:S,CatchPhrase:$}},k=t=>(g("data-v-99c07718"),t=t(),b(),t),Ms=k(()=>e("section",{class:"flex items-center pt-20 mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-music"},[e("div",{class:"h-80 flex justify-center items-center text-center w-full goup"},"Cours pour enfants")],-1)),Rs={class:"container mx-auto mb-10"},Ts={class:"flex flex-wrap justify-stretch mx-5 md:mx-10 lg:mx-20"},Ss=k(()=>e("p",{class:"p-10"},[s(" Ce cours pour enfants s\u2019adresse aux enfants de 8 \xE0 14 ans et se passe en cours collectif de 2 \xE0 4 \xE9l\xE8ves."),e("br"),s(" Notre professeur de musique accompagnera votre enfant dans son apprentissage du piano et son \xE9veil musical gr\xE2ce \xE0 son esprit p\xE9dagogue."),e("br"),s(" Peu importe le niveau de votre enfant, d\xE9butant ou non, qu'il soit int\xE9ress\xE9 par le piano classique ou le clavier \xE9lectrique, le professeur pianiste revient sur les bases et fondamentaux du piano. ")],-1)),As=s(" La m\xE9thode d'enseignement propose des morceaux \xE9crits sp\xE9cialement pour les enfants de cet \xE2ge, ce qui les rend plus ludiques. Les morceaux sont aussi adapt\xE9s au d\xE9veloppement physiologique des enfants. "),zs=s(" Le d\xE9sir naturel des enfants est de prendre contact avec la musique de mani\xE8re concr\xE8te. D\xE8s le premier cours de piano, ils exp\xE9rimentent le plaisir de la musique en jouant la m\xE9lodie d\u2019un premier morceau. "),Is=s(" Les cours sont collectifs et chaque enfant a un instrument pour jouer."),Vs=k(()=>e("br",null,null,-1)),Hs=s(" Les cours de piano se font avec des \xE9l\xE8ves de m\xEAme \xE2ge et de m\xEAme niveau pour que tout le monde puisse \xE9voluer de mani\xE8re identique avec une \xE9mulation globale. "),Ps=s(" Durant les cours, on d\xE9veloppe les capacit\xE9s musicales globales. On apprend \xE0 interpr\xE9ter une m\xE9lodie, au travers du d\xE9veloppement de l'oreille, avec un apprentissage du rythme et de la lecture de notes."),Es=k(()=>e("br",null,null,-1)),Ns=s(" Ces points de solf\xE8ge sont d\xE9velopp\xE9s au fur et \xE0 mesure de la progression du piano. "),Os=k(()=>e("div",{class:"p-10"},[s(" Un cours d'essai vous est offert."),e("br"),s(" N'h\xE9sitez pas \xE0 nous contacter pour de plus amples renseignements."),e("br")],-1));function Ds(t,c,o,_,l,i){const r=m("LessonValueBox");return u(),p(B,null,[Ms,e("section",null,[e("div",Rs,[e("div",Ts,[Ss,n(r,{title:"Un choix de morceaux adapt\xE9",class:"w-full md:w-1/2 3xl:w-1/4 py-5",color:"#906533",row:""},{default:a(()=>[As]),_:1}),n(r,{title:"Une approche instantan\xE9e de l'instrument",class:"w-full md:w-1/2 3xl:w-1/4 py-5",color:"#906533",row:""},{default:a(()=>[zs]),_:1}),n(r,{title:"Des cours de piano collectifs",class:"w-full md:w-1/2 3xl:w-1/4 py-5",color:"#906533",row:""},{default:a(()=>[Is,Vs,Hs]),_:1}),n(r,{title:"Un cours de piano diversifi\xE9",class:"w-full md:w-1/2 3xl:w-1/4 py-5",color:"#906533",row:""},{default:a(()=>[Ps,Es,Ns]),_:1}),Os])])])],64)}var Us=h(js,[["render",Ds],["__scopeId","data-v-99c07718"]]);const Fs={name:"Prices",components:{Title:w,CatchPhrase:$}},A=t=>(g("data-v-0a3d4d82"),t=t(),b(),t),Gs=A(()=>e("h1",{class:"h-80 flex justify-center items-center text-center w-full"},"Tarifs et Horaires des cours de piano",-1)),Qs={class:"p-10 flex flex-wrap"},Ws={class:"w-full md:w-1/2 p-5"},Ys=L('<p data-v-0a3d4d82> Le tarif des cours est calcul\xE9 sur l&#39;ann\xE9e scolaire et divis\xE9 en mensualit\xE9s.<br data-v-0a3d4d82> De ce fait, le tarif est le m\xEAme pour tous les mois de l&#39;ann\xE9e scolaire.<br data-v-0a3d4d82> Dans le cas o\xF9 vous souhaiteriez interrompre l&#39;apprentissage en cours d&#39;ann\xE9e, vous n&#39;\xEAtes pas engag\xE9 pour une ann\xE9e scolaire enti\xE8re.<br data-v-0a3d4d82><br data-v-0a3d4d82></p><table class="my-5" data-v-0a3d4d82><tbody data-v-0a3d4d82><tr class="bg-irish text-white" data-v-0a3d4d82><td data-v-0a3d4d82><div class="flex justify-center items-center" data-v-0a3d4d82><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" aria-hidden="true" data-v-0a3d4d82><path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" data-v-0a3d4d82></path></svg></div></td><td class="p-5" data-v-0a3d4d82><div data-v-0a3d4d82>Enfants</div><div data-v-0a3d4d82>(8 \xE0 14 ans)</div></td><td class="p-5" data-v-0a3d4d82><div data-v-0a3d4d82>Adultes</div><div data-v-0a3d4d82>(&gt; 14 ans)</div></td></tr><tr data-v-0a3d4d82><td class="bg-irish text-white p-5" data-v-0a3d4d82><div data-v-0a3d4d82>Cours de groupe</div><div data-v-0a3d4d82>1H / semaine</div></td><td class="p-5 text-center" data-v-0a3d4d82> 96 \u20AC </td><td class="p-5 text-center" data-v-0a3d4d82> 96 \u20AC </td></tr><tr data-v-0a3d4d82><td class="bg-irish text-white p-5" data-v-0a3d4d82><div data-v-0a3d4d82>Cours individuels</div><div data-v-0a3d4d82>45min / semaine</div></td><td class="p-5 text-center" data-v-0a3d4d82> - </td><td class="p-5 text-center" data-v-0a3d4d82> 96 \u20AC </td></tr></tbody></table>',2),Zs={class:"w-full md:w-1/2 p-5"},Js=A(()=>e("div",null,[s(" Lundi 10H00 - 21H30"),e("br"),s(" Mardi 10H00 - 21H30"),e("br"),s(" Mercredi 10H00 - 21H30"),e("br"),s(" Jeudi 10H00 - 21H30"),e("br"),s(" Vendredi 10H00 - 20H00"),e("br"),e("br"),s(" Les cours se font uniquement sur rendez-vous, avec le m\xEAme horaire pour chaque semaine."),e("br"),s(" Les cours sont dispens\xE9s tout au long de la journ\xE9e jusqu'en soir\xE9e."),e("br"),s(" Il y a possibilit\xE9 d'avoir cours entre midi et 14h, et le soir apr\xE8s le travail."),e("br"),e("br")],-1));function Ks(t,c,o,_,l,i){const r=m("CatchPhrase"),v=m("Title");return u(),p(B,null,[n(r,{"bg-class":"bg-pricing"},{default:a(()=>[Gs]),_:1}),e("section",Qs,[e("div",Ws,[n(v,{text:"Tarifs"}),Ys]),e("div",Zs,[n(v,{text:"Horaires"}),Js])])],64)}var Xs=h(Fs,[["render",Ks],["__scopeId","data-v-0a3d4d82"]]);const eo={name:"Contact",components:{Title:w}},C=t=>(g("data-v-3667e856"),t=t(),b(),t),to=C(()=>e("div",{class:"relative align-right w-full h-80"},[e("div",{class:"gmap_canvas"},[e("iframe",{width:"100%",height:"320px",id:"gmap_canvas",src:"https://maps.google.com/maps?q=15%20rue%20Laganne%2031300%20Toulouse&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"})])],-1)),so=C(()=>e("div",{class:"mx-auto w-3/4 md:w-1/2 p-10 text-center"}," Espace Musical des Blanchers vous accueille dans le quartier de St Cyprien de Toulouse, dans le d\xE9partement de la Haute-Garonne, pour des cours de musique (piano, piano num\xE9rique, claviona, ou clavier). ",-1)),oo={class:"flex flex-wrap p-10"},no={class:"w-full md:w-1/2 px-5 pb-10 flex flex-col items-center text-center"},ao=C(()=>e("div",{class:"my-3"},[s(" Espace Musical des Blanchers"),e("br"),s(" 15 rue Laganne"),e("br"),s(" 31300 Toulouse"),e("br")],-1)),ro=s(" 05 62 48 38 33"),lo=C(()=>e("br",null,null,-1)),io=C(()=>e("a",{href:"mailto:espace.blanchers@gmail.com"},"espace.blanchers@gmail.com",-1)),co={class:"w-full md:w-1/2 px-5 flex flex-col items-center text-center"},uo=L('<div class="my-1" data-v-3667e856>Tramway ligne T1 - T2, arr\xEAt Fer \xE0 Cheval \xE0 1 minutes</div><div class="my-1" data-v-3667e856>M\xE9tro ligne A, arr\xEAt St Cyprien \xE0 10 minutes</div><div class="my-1" data-v-3667e856>Bus ligne 13 - 14 - 31, (50 m\xE8tres)</div><div class="my-1" data-v-3667e856>V\xE9lo libre service (50 m\xE8tres)</div><div class="my-1" data-v-3667e856>Parking Cours Dillon</div>',5);function po(t,c,o,_,l,i){const r=m("Title");return u(),p("section",null,[to,so,e("div",oo,[e("div",no,[n(r,{text:"Adresse"}),ao,ro,lo,io]),e("div",co,[n(r,{text:"Moyen d'acc\xE8s"}),uo])])])}var _o=h(eo,[["render",po],["__scopeId","data-v-3667e856"]]);const ho={name:"OnlineLesson"},vo=L('<section class="flex items-center mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-online" data-v-4a25125b><div class="h-80 flex justify-center items-center text-center w-full goup" data-v-4a25125b>Cours de piano \xE0 distance</div></section><section data-v-4a25125b><div class="container mx-auto mb-10" data-v-4a25125b><div class="flex flex-wrap justify-stretch mx-5 md:mx-10 lg:mx-20" data-v-4a25125b><p class="p-10" data-v-4a25125b> En compl\xE9ment des cours traditionnels, ils ont lieu \xE0 distance via WhatsApp, FaceTime, Zoom,\u2026 avec votre smartphone ou tablette,\u2026 quelque soit votre niveau ou votre \xE2ge. Pas besoin d\u2019\xE9quipement particulier. Ces cours sont accessibles de fa\xE7on r\xE9guli\xE8re ou ponctuelle, en cas d\u2019incapacit\xE9 de se d\xE9placer pour un cours en pr\xE9sentiel. Des fichiers audios vous sont transmis pour compl\xE9ter le travail personnel. </p></div></div></section>',2);function mo(t,c,o,_,l,i){return vo}var fo=h(ho,[["render",mo],["__scopeId","data-v-4a25125b"]]);const xo=[{path:"/",component:Et,meta:{title:"Ecole de piano Blanchers sur Toulouse"}},{path:"/adult",meta:{title:"Cours de piano pour adultes"},component:Bs},{path:"/children",meta:{title:"Cours de piano pour enfants"},component:Us},{path:"/online",meta:{title:"Cours de piano en ligne"},component:fo},{path:"/pricing",meta:{title:"Tarif des cours de piano"},component:Xs},{path:"/contact",meta:{title:"Contact \xE9cole de piano"},component:_o},{path:"/:path(.*)",component:Gt}],z=H(Ie),I=P({history:E("/cours-piano/"),routes:xo,scrollBehavior(t,c,o){return t.hash?{el:t.hash}:o||{top:0,x:0,y:0}}}),go="Ecole de piano Blanchers sur Toulouse";I.beforeEach(t=>{document.title=t.meta.title||go});z.use(I);z.mount("#app");