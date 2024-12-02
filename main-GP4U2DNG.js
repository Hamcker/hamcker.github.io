import{O as re,T as oe,V as ae,X as ie,a as V,b as Y,c as Z,d as b,e as j,f as W,h as K,i as q,j as G,l as X,m as Q,n as ee,o as te,q as ne}from"./chunk-WZG2JKIK.js";import{f as se,g as M,h as C,m as le,n as S,p as ue,u as pe}from"./chunk-YOD2ZW5S.js";import{$a as v,Ea as m,Eb as a,Fb as i,Gb as s,Ha as F,Jb as U,Tb as A,W as R,Xa as $,Z as f,Za as I,_ as T,aa as k,ca as h,da as c,ea as x,fa as g,fc as L,gb as d,hb as B,na as _,sa as z,uc as D,va as y,wb as J,wc as p}from"./chunk-LDI2C3N3.js";var N=class{http;prefix;suffix;constructor(e,t="/assets/i18n/",r=".json"){this.http=e,this.prefix=t,this.suffix=r}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};var de=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-E7NUX53O.js").then(n=>n.PageResumeComponent)}];var Ne=(()=>{class n extends S{constructor(t,r,o){super(t,r,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(r){return new(r||n)(h(D),h(M),h(C))};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})();function Pe(){return new le}function Ee(n,e,t){return new pe(n,e,t)}var me=[{provide:C,useFactory:Pe},{provide:S,useClass:Ne},{provide:v,useFactory:Ee,deps:[b,S,y]}],ce=[{provide:M,useFactory:()=>new ue},{provide:m,useValue:"BrowserAnimations"},...me],we=[{provide:M,useClass:se},{provide:m,useValue:"NoopAnimations"},...me],Me=(()=>{class n{static withConfig(t){return{ngModule:n,providers:t.disableAnimations?we:ce}}static \u0275fac=function(r){return new(r||n)};static \u0275mod=B({type:n});static \u0275inj=T({providers:ce,imports:[W]})}return n})();var He="@",Fe=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=c(z,{optional:!0});loadingSchedulerFn=c(Oe,{optional:!0});_engine;constructor(t,r,o,l,u){this.doc=t,this.delegate=r,this.zone=o,this.animationType=l,this.moduleImpl=u}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-OP65VV6Y.js").then(o=>o),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(o=>{throw new R(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:l})=>{this._engine=o(this.animationType,this.doc);let u=new l(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(t,r){let o=this.delegate.createRenderer(t,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new O(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let Se=u.createRenderer(t,r);l.use(Se),this.scheduler?.notify(11)}).catch(u=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(r){I()};static \u0275prov=f({token:n,factory:n.\u0275fac})}return n})(),O=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(He)}},Oe=new k("");function fe(n="animations"){return F("NgAsyncAnimations"),x([{provide:v,useFactory:(e,t,r)=>new Fe(e,t,r,n),deps:[D,b,y]},{provide:m,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Re(n){return new N(n,"./i18n/",".json")}var Te=()=>({loader:{provide:Q,useFactory:Re,deps:[V]},missingTranslationHandler:{provide:ee,useValue:{handle:n=>(console.warn("Missing translation",n.key),n.key.split(".").pop()||n.key)}}}),he={providers:[L({eventCoalescing:!0}),X(de),q(K()),ne(Te()),g(Me),Y(Z()),fe(),{provide:oe,useValue:{fontSet:"material-icons-outlined"}},g(ie.forRoot()),g(re)]};function ke(n){let e=n,t=Math.floor(Math.abs(n)),r=n.toString().replace(/^[^.]*\.?/,"").length;return t===1&&r===0?1:5}var ge=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",ke];function xe(n){return n===1?1:5}var ye=["tr",[["\xF6\xF6","\xF6s"],["\xD6\xD6","\xD6S"],void 0],[["\xD6\xD6","\xD6S"],void 0,void 0],[["P","P","S","\xC7","P","C","C"],["Paz","Pzt","Sal","\xC7ar","Per","Cum","Cmt"],["Pazar","Pazartesi","Sal\u0131","\xC7ar\u015Famba","Per\u015Fembe","Cuma","Cumartesi"],["Pa","Pt","Sa","\xC7a","Pe","Cu","Ct"]],void 0,[["O","\u015E","M","N","M","H","T","A","E","E","K","A"],["Oca","\u015Eub","Mar","Nis","May","Haz","Tem","A\u011Fu","Eyl","Eki","Kas","Ara"],["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"]],void 0,[["M\xD6","MS"],void 0,["Milattan \xD6nce","Milattan Sonra"]],1,[6,0],["d.MM.y","d MMM y","d MMMM y","d MMMM y EEEE"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","%#,##0","\xA4#,##0.00","#E0"],"TRY","\u20BA","T\xFCrk Liras\u0131",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],THB:["\u0E3F"],TRY:["\u20BA"],TWD:["NT$"]},"ltr",xe];function _e(n){let e=n,t=Math.floor(Math.abs(n)),r=n.toString().replace(/^[^.]*\.?/,"").length;return t===1&&r===0?1:5}var ve=["de",[["AM","PM"],void 0,void 0],void 0,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],void 0,void 0],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,"{1} 'um' {0}",void 0],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{ATS:["\xF6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[void 0,"\u0440."],CUC:[void 0,"Cub$"],DEM:["DM"],FKP:[void 0,"Fl\xA3"],GHS:[void 0,"\u20B5"],GNF:[void 0,"F.G."],KMF:[void 0,"FC"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],RWF:[void 0,"F.Rw"],SYP:[],THB:["\u0E3F"],TWD:["NT$"],XXX:[],ZMW:[void 0,"K"]},"ltr",_e];function ze(n){let e=n;return 5}var Ae=["zh",[["\u4E0A\u5348","\u4E0B\u5348"],void 0,void 0],void 0,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],void 0,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],void 0,[["\u516C\u5143\u524D","\u516C\u5143"],void 0,void 0],0,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",void 0,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],CNY:["\xA5"],ILR:["ILS"],JPY:["JP\xA5","\xA5"],KRW:["\uFFE6","\u20A9"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",ze];function $e(n){let e=n;return e===0?0:e===1?1:e===2?2:e%100===Math.floor(e%100)&&e%100>=3&&e%100<=10?3:e%100===Math.floor(e%100)&&e%100>=11&&e%100<=99?4:5}var De=["ar",[["\u0635","\u0645"],void 0,void 0],[["\u0635","\u0645"],void 0,["\u0635\u0628\u0627\u062D\u064B\u0627","\u0645\u0633\u0627\u0621\u064B"]],[["\u062D","\u0646","\u062B","\u0631","\u062E","\u062C","\u0633"],["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0627\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"],void 0,["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"]],void 0,[["\u064A","\u0641","\u0645","\u0623","\u0648","\u0646","\u0644","\u063A","\u0633","\u0643","\u0628","\u062F"],["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],void 0],void 0,[["\u0642.\u0645","\u0645"],void 0,["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F","\u0645\u064A\u0644\u0627\u062F\u064A"]],6,[5,6],["d\u200F/M\u200F/y","dd\u200F/MM\u200F/y","d MMMM y","EEEE\u060C d MMMM y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} \u0641\u064A {0}",void 0],[".",",",";","\u200E%\u200E","\u200E+","\u200E-","E","\xD7","\u2030","\u221E","\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"EGP","\u062C.\u0645.\u200F","\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A",{AED:["\u062F.\u0625.\u200F"],ARS:[void 0,"AR$"],AUD:["AU$"],BBD:[void 0,"BB$"],BHD:["\u062F.\u0628.\u200F"],BMD:[void 0,"BM$"],BND:[void 0,"BN$"],BSD:[void 0,"BS$"],BYN:[void 0,"\u0440."],BZD:[void 0,"BZ$"],CAD:["CA$"],CLP:[void 0,"CL$"],CNY:["CN\xA5"],COP:[void 0,"CO$"],CUP:[void 0,"CU$"],DOP:[void 0,"DO$"],DZD:["\u062F.\u062C.\u200F"],EGP:["\u062C.\u0645.\u200F","E\xA3"],FJD:[void 0,"FJ$"],GBP:["UK\xA3"],GYD:[void 0,"GY$"],HKD:["HK$"],IQD:["\u062F.\u0639.\u200F"],IRR:["\u0631.\u0625."],JMD:[void 0,"JM$"],JOD:["\u062F.\u0623.\u200F"],JPY:["JP\xA5"],KWD:["\u062F.\u0643.\u200F"],KYD:[void 0,"KY$"],LBP:["\u0644.\u0644.\u200F","L\xA3"],LRD:[void 0,"$LR"],LYD:["\u062F.\u0644.\u200F"],MAD:["\u062F.\u0645.\u200F"],MRU:["\u0623.\u0645."],MXN:["MX$"],NZD:["NZ$"],OMR:["\u0631.\u0639.\u200F"],PHP:[void 0,"\u20B1"],QAR:["\u0631.\u0642.\u200F"],SAR:["\u0631.\u0633.\u200F"],SBD:[void 0,"SB$"],SDD:["\u062F.\u0633.\u200F"],SDG:["\u062C.\u0633."],SRD:[void 0,"SR$"],SYP:["\u0644.\u0633.\u200F","\xA3"],THB:["\u0E3F"],TND:["\u062F.\u062A.\u200F"],TTD:[void 0,"TT$"],TWD:["NT$"],USD:["US$"],UYU:[void 0,"UY$"],YER:["\u0631.\u064A.\u200F"]},"rtl",$e];function Ie(n){let e=n;return Math.floor(Math.abs(n))===0||e===1?1:5}var be=["fa",[["\u0642","\u0628"],["\u0642.\u0638.","\u0628.\u0638."],["\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631","\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631"]],void 0,[["\u06CC","\u062F","\u0633","\u0686","\u067E","\u062C","\u0634"],["\u06CC\u06A9\u0634\u0646\u0628\u0647","\u062F\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200C\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067E\u0646\u062C\u0634\u0646\u0628\u0647","\u062C\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],void 0,["\u06F1\u0634","\u06F2\u0634","\u06F3\u0634","\u06F4\u0634","\u06F5\u0634","\u062C","\u0634"]],void 0,[["\u0698","\u0641","\u0645","\u0622","\u0645","\u0698","\u0698","\u0627","\u0633","\u0627","\u0646","\u062F"],["\u0698\u0627\u0646\u0648\u06CC\u0647","\u0641\u0648\u0631\u06CC\u0647","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"],["\u0698\u0627\u0646\u0648\u06CC\u0647\u0654","\u0641\u0648\u0631\u06CC\u0647\u0654","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647\u0654","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647\u0654","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"]],[["\u0698","\u0641","\u0645","\u0622","\u0645","\u0698","\u0698","\u0627","\u0633","\u0627","\u0646","\u062F"],["\u0698\u0627\u0646\u0648\u06CC\u0647","\u0641\u0648\u0631\u06CC\u0647","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"],void 0],[["\u0642","\u0645"],["\u0642.\u0645.","\u0645."],["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F","\u0645\u06CC\u0644\u0627\u062F\u06CC"]],6,[5,5],["y/M/d","d MMM y","d MMMM y","EEEE d MMMM y"],["H:mm","H:mm:ss","H:mm:ss (z)","H:mm:ss (zzzz)"],["{1}\u060C\u200F {0}",void 0,"{1}\u060C \u0633\u0627\u0639\u062A {0}",void 0],[".",",",";","%","\u200E+","\u200E\u2212","E","\xD7","\u2030","\u221E","\u0646\u0627\u0639\u062F\u062F",":"],["#,##0.###","#,##0%","\u200E\xA4\xA0#,##0.00","#E0"],"IRR","\u0631\u06CC\u0627\u0644","\u0631\u06CC\u0627\u0644 \u0627\u06CC\u0631\u0627\u0646",{AFN:["\u060B"],BYN:[void 0,"\u0440."],CAD:["$CA","$"],CNY:["\xA5CN","\xA5"],HKD:["$HK","$"],IRR:["\u0631\u06CC\u0627\u0644"],MXN:["$MX","$"],NZD:["$NZ","$"],PHP:[void 0,"\u20B1"],THB:["\u0E3F"],XCD:["$EC","$"],XOF:["\u0641\u0631\u0627\u0646\u06A9\u202FCFA"]},"rtl",Ie];var E=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["app-hamcker-logo"]],decls:15,vars:0,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 426.13 95.3",1,"h-full"],["id","Layer_2","data-name","Layer 2"],["id","HamckerTypeLogo"],["id","Logo"],["id","Hamcker"],["id","H","d","M45.35,14.29H62.27V89.47H45.35V57.58H16.92V89.47H0V14.29H16.92V43H45.35Z",1,"cls-1"],["id","a","d","M95.79,30.89a37.37,37.37,0,0,1,11.94,1.63,18.47,18.47,0,0,1,7.64,4.66,17.22,17.22,0,0,1,4.07,7.38,36.18,36.18,0,0,1,1.19,9.65V87.84q-3.47.76-9.65,1.79a92.4,92.4,0,0,1-15,1,47.57,47.57,0,0,1-10-1,21.79,21.79,0,0,1-7.75-3.2,14.56,14.56,0,0,1-5-5.81,19.94,19.94,0,0,1-1.74-8.78,16.67,16.67,0,0,1,2-8.47,15.55,15.55,0,0,1,5.37-5.53,24.24,24.24,0,0,1,7.7-3,42.8,42.8,0,0,1,9-.92,51.41,51.41,0,0,1,5.59.27,24.67,24.67,0,0,1,4,.7V53.45a8.94,8.94,0,0,0-2.49-6.61q-2.5-2.51-8.68-2.5a55,55,0,0,0-8.14.6,35.14,35.14,0,0,0-6.94,1.68l-2.06-13c.94-.29,2.11-.6,3.52-.92s3-.61,4.61-.87,3.42-.47,5.27-.65S93.91,30.89,95.79,30.89Zm1.3,47.3c1.59,0,3.11,0,4.56-.11a29.67,29.67,0,0,0,3.47-.33V65.5a29.53,29.53,0,0,0-2.93-.44,33.76,33.76,0,0,0-3.58-.22,31.94,31.94,0,0,0-4.28.28,11.07,11.07,0,0,0-3.53,1,5.92,5.92,0,0,0-2.38,2.06,5.65,5.65,0,0,0-.87,3.25c0,2.53.85,4.29,2.55,5.26A14,14,0,0,0,97.09,78.19Z",1,"cls-1"],["id","m","d","M163.38,59.2q0-7.8-2-11.06c-1.34-2.17-3.63-3.26-6.89-3.26a31.09,31.09,0,0,0-3.14.17c-1.09.11-2.14.23-3.15.38v44H132V34.36c1.37-.36,3-.74,4.82-1.14s3.8-.76,5.86-1.08,4.18-.58,6.35-.76,4.3-.27,6.4-.27a26.87,26.87,0,0,1,10,1.57,22.91,22.91,0,0,1,6.35,3.74,30.25,30.25,0,0,1,16.27-5.31A28.62,28.62,0,0,1,199.34,33a17,17,0,0,1,7,5.37,20.46,20.46,0,0,1,3.58,8.25,53.31,53.31,0,0,1,1,10.63V89.47H194.73V59.2q0-7.8-2-11.06c-1.34-2.17-3.63-3.26-6.89-3.26a14.73,14.73,0,0,0-3.63.65,14.28,14.28,0,0,0-3.85,1.63,24.85,24.85,0,0,1,1,5.26q.23,2.78.22,5.92V89.47H163.38Z",1,"cls-1"],["id","c","d","M219.57,60.94a33.58,33.58,0,0,1,2-11.66,27.3,27.3,0,0,1,15-16A30.38,30.38,0,0,1,249,30.89a40.2,40.2,0,0,1,8.36.81A40.84,40.84,0,0,1,264.71,34L261.34,47a39.78,39.78,0,0,0-5-1.52,25.74,25.74,0,0,0-6.07-.65q-7.17,0-10.69,4.44t-3.53,11.72q0,7.71,3.31,11.93t11.56,4.23a39.8,39.8,0,0,0,6.29-.54,26.94,26.94,0,0,0,6.18-1.73l2.28,13.23a37.68,37.68,0,0,1-7.05,2.06,46.4,46.4,0,0,1-9.33.87,35.19,35.19,0,0,1-13.45-2.33,25.36,25.36,0,0,1-9.28-6.35,24.73,24.73,0,0,1-5.31-9.49A40,40,0,0,1,219.57,60.94Z",1,"cls-1"],["id","k","d","M289.44,52.9c1.59-1.73,3.23-3.52,4.93-5.39s3.34-3.72,4.93-5.56,3.09-3.57,4.5-5.23,2.62-3.09,3.63-4.31h19.22Q320.89,39,315.42,45t-12,12.39a76.44,76.44,0,0,1,6.73,7q3.46,4.08,6.72,8.43t6,8.69q2.72,4.35,4.56,7.93H308.82c-1.16-1.88-2.47-4-3.95-6.25s-3.05-4.57-4.71-6.85-3.41-4.48-5.25-6.58a45.13,45.13,0,0,0-5.47-5.33v25H273.27V7.89l16.17-2.6Z",1,"cls-1"],["id","e","d","M326.21,61.37a35,35,0,0,1,2.33-13.29,28.64,28.64,0,0,1,6.13-9.49,25.61,25.61,0,0,1,8.74-5.75,27.36,27.36,0,0,1,10.14-2q12.15,0,19.2,7.43t7.05,21.86c0,.94,0,2-.1,3.09s-.15,2.12-.22,3H342.81a10.73,10.73,0,0,0,4.67,7.92q4.11,2.94,11.06,2.93a46.79,46.79,0,0,0,8.73-.81,32.56,32.56,0,0,0,7-2l2.17,13.13a22.26,22.26,0,0,1-3.47,1.3,43.1,43.1,0,0,1-4.83,1.14q-2.65.5-5.69.81a56.3,56.3,0,0,1-6.08.33A36,36,0,0,1,343,88.71a26.09,26.09,0,0,1-9.43-6.24A24.75,24.75,0,0,1,328,73.09,37.28,37.28,0,0,1,326.21,61.37Zm38-6.18a16.94,16.94,0,0,0-.7-4,10.13,10.13,0,0,0-1.85-3.48,9.85,9.85,0,0,0-3.14-2.49,10.28,10.28,0,0,0-4.72-1,10.81,10.81,0,0,0-4.67.93,9.5,9.5,0,0,0-3.25,2.44,10.81,10.81,0,0,0-2,3.52,23.57,23.57,0,0,0-1,4.07Z",1,"cls-1"],["id","r","d","M423.42,46.73q-2.18-.54-5.1-1.14A31.41,31.41,0,0,0,412,45a29.29,29.29,0,0,0-3.63.27,20.75,20.75,0,0,0-3.2.6V89.47H389v-54a95.84,95.84,0,0,1,10.25-2.88,59.25,59.25,0,0,1,13.18-1.36c.87,0,1.91.06,3.14.17s2.46.25,3.69.43,2.46.4,3.69.65a18.17,18.17,0,0,1,3.15.92Z",1,"cls-1"],["id","cBox","d","M267.93,0H216.75a1.5,1.5,0,0,0-1.5,1.49V93.8a1.5,1.5,0,0,0,1.5,1.5h51.18a1.5,1.5,0,0,0,1.5-1.5V1.49A1.5,1.5,0,0,0,267.93,0Zm-9.31,90.12a46.37,46.37,0,0,1-9.32.87,35.24,35.24,0,0,1-13.46-2.33,25.32,25.32,0,0,1-9.27-6.35,24.62,24.62,0,0,1-5.32-9.49,40.32,40.32,0,0,1-1.68-11.88,33.58,33.58,0,0,1,2-11.66,27.24,27.24,0,0,1,15-16A30.47,30.47,0,0,1,249,30.89a40,40,0,0,1,8.35.81A40.81,40.81,0,0,1,264.7,34l-3.36,12.91a42.12,42.12,0,0,0-5-1.51,25.83,25.83,0,0,0-6.08-.65q-7.16,0-10.68,4.44t-3.53,11.72q0,7.71,3.31,11.93c2.2,2.82,6.06,4.23,11.55,4.23a39.7,39.7,0,0,0,6.29-.54,26.39,26.39,0,0,0,6.19-1.74l2.28,13.24A37.81,37.81,0,0,1,258.62,90.12Z",1,"cls-1"]],template:function(t,r){t&1&&(_(),a(0,"svg",0)(1,"defs"),s(2,"style"),i(),a(3,"g",1)(4,"g",2)(5,"g",3)(6,"g",4),s(7,"path",5)(8,"path",6)(9,"path",7)(10,"path",8)(11,"path",9)(12,"path",10)(13,"path",11),i(),s(14,"path",12),i()()()())},encapsulation:2})};var w=class n{onPrint(){window.print()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["app-navbar"]],decls:11,vars:1,consts:[[1,"prompt"],[1,"h-7"],[1,"flex","flex-1","justify-center","gap-3","opacity-70"],[1,"flex","cursor-pointer","items-center","gap-1","rounded-md","px-3","text-white","opacity-60","shadow-lg","hover:bg-white","hover:text-primary-800","print:hidden",3,"click"],[3,"size"],[1,"text-xl","font-black"],["id","effect"]],template:function(t,r){t&1&&(a(0,"nav")(1,"span",0),A(2,"\u276F"),i(),s(3,"app-hamcker-logo",1)(4,"div",2),a(5,"button",3),U("click",function(){return r.onPrint()}),a(6,"app-icon",4),A(7,"print"),i(),a(8,"span",5),A(9," PDF "),i()()(),s(10,"div",6)),t&2&&($(6),J("size",25))},dependencies:[E,ae],styles:['[_nghost-%COMP%]{position:relative;display:block;--tw-bg-opacity: 1;background-color:rgb(31 49 72 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}@media print{[_nghost-%COMP%]{display:none}}[_nghost-%COMP%]{box-shadow:inset 0 -5px 13px #000000bf;font:1.3rem Inconsolata,monospace;text-shadow:0 0 5px #c8c8c8}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{margin:auto;display:flex;width:100%;align-items:center;gap:.5rem;padding:.5rem .25rem;--tw-backdrop-blur: blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}@media (min-width: 768px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{width:21.7cm}}@media (min-width: 1024px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{width:25.5cm}}@media (min-width: 1280px){[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{width:29.1cm}}[_nghost-%COMP%]   .prompt[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(143 193 218 / var(--tw-text-opacity, 1));font-size:1.6rem;opacity:.7}[_nghost-%COMP%]   #effect[_ngcontent-%COMP%]{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.15),rgba(255,255,255,.15) 1px,transparent 1px,transparent 2px);pointer-events:none;z-index:10}[_nghost-%COMP%]     .cls-1{fill:#fff;opacity:.7;filter:drop-shadow(0 0 5px #c8c8c8)}[_nghost-%COMP%]     #cBox{animation:_ngcontent-%COMP%_blink 1s infinite;fill:#ff0;filter:drop-shadow(0 0 5px yellow)}[_nghost-%COMP%]     #singleC, [_nghost-%COMP%]     #c{animation:_ngcontent-%COMP%_blink-reverse 1s infinite}@keyframes _ngcontent-%COMP%_blink{0%,to{opacity:.7}50%{opacity:0}}@keyframes _ngcontent-%COMP%_blink-reverse{0%,to{opacity:0}50%{opacity:.7}}']})};p(ge);p(ye);p(ve);p(Ae);p(De);p(be);var H=class n{#e=c(te);constructor(){this.#e.use("en")}#t=e=>e.split("-")[0];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=d({type:n,selectors:[["app-root"]],hostAttrs:[1,"block"],decls:3,vars:0,template:function(t,r){t&1&&(s(0,"app-navbar"),a(1,"div"),s(2,"router-outlet"),i())},dependencies:[G,w],encapsulation:2})};j(H,he).catch(n=>console.error(n));
