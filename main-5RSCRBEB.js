import{O as K,T as G,X,a as b,b as I,c as B,d as y,e as J,f as w,h as U,i as _,j as Y,l as x,m as L,n as k,o as j,q as W}from"./chunk-JMEYUEHG.js";import{f as Z,g as d,h as g,m as V,n as A,p as Q,u as q}from"./chunk-7U3RZFSQ.js";import{Da as l,Fb as $,Ga as N,W as C,Ya as T,Z as m,_ as F,_a as f,aa as R,ca as p,da as u,ea as v,fa as c,fb as H,fc as O,gb as z,ra as P,ua as M,uc as h,wc as s}from"./chunk-KMMMZ3GE.js";var D=class{http;prefix;suffix;constructor(e,t="/assets/i18n/",n=".json"){this.http=e,this.prefix=t,this.suffix=n}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}};var ee=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-CFCRSGZG.js").then(r=>r.PageResumeComponent)}];var Me=(()=>{class r extends A{constructor(t,n,o){super(t,n,o)}ngOnDestroy(){this.flush()}static \u0275fac=function(n){return new(n||r)(p(h),p(d),p(g))};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})();function fe(){return new V}function he(r,e,t){return new q(r,e,t)}var ne=[{provide:g,useFactory:fe},{provide:A,useClass:Me},{provide:f,useFactory:he,deps:[y,A,M]}],te=[{provide:d,useFactory:()=>new Q},{provide:l,useValue:"BrowserAnimations"},...ne],ye=[{provide:d,useClass:Z},{provide:l,useValue:"NoopAnimations"},...ne],oe=(()=>{class r{static withConfig(t){return{ngModule:r,providers:t.disableAnimations?ye:te}}static \u0275fac=function(n){return new(n||r)};static \u0275mod=z({type:r});static \u0275inj=F({providers:te,imports:[w]})}return r})();var ge="@",Ae=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=u(P,{optional:!0});loadingSchedulerFn=u(De,{optional:!0});_engine;constructor(t,n,o,i,a){this.doc=t,this.delegate=n,this.zone=o,this.animationType=i,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-YSR5ZYEX.js").then(o=>o),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(o=>{throw new C(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(t,n){let o=this.delegate.createRenderer(t,n);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new E(o);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let ce=a.createRenderer(t,n);i.use(ce),this.scheduler?.notify(11)}).catch(a=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(n){T()};static \u0275prov=m({token:r,factory:r.\u0275fac})}return r})(),E=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,o){this.delegate.insertBefore(e,t,n,o)}removeChild(e,t,n){this.delegate.removeChild(e,t,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,o){this.delegate.setAttribute(e,t,n,o)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,o){this.delegate.setStyle(e,t,n,o)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,n)),this.delegate.listen(e,t,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ge)}},De=new R("");function ie(r="animations"){return N("NgAsyncAnimations"),v([{provide:f,useFactory:(e,t,n)=>new Ae(e,t,n,r),deps:[h,y,M]},{provide:l,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Se(r){return new D(r,"./i18n/",".json")}var Ne=()=>({loader:{provide:L,useFactory:Se,deps:[b]},missingTranslationHandler:{provide:k,useValue:{handle:r=>(console.warn("Missing translation",r.key),r.key.split(".").pop()||r.key)}}}),ae={providers:[O({eventCoalescing:!0}),x(ee),_(U()),W(Ne()),c(oe),I(B()),ie(),{provide:G,useValue:{fontSet:"material-icons-outlined"}},c(X.forRoot()),c(K)]};function Ee(r){let e=r,t=Math.floor(Math.abs(r)),n=r.toString().replace(/^[^.]*\.?/,"").length;return t===1&&n===0?1:5}var se=["en",[["a","p"],["AM","PM"],void 0],[["AM","PM"],void 0,void 0],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],void 0,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} 'at' {0}",void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",Ee];function Ce(r){return r===1?1:5}var ue=["tr",[["\xF6\xF6","\xF6s"],["\xD6\xD6","\xD6S"],void 0],[["\xD6\xD6","\xD6S"],void 0,void 0],[["P","P","S","\xC7","P","C","C"],["Paz","Pzt","Sal","\xC7ar","Per","Cum","Cmt"],["Pazar","Pazartesi","Sal\u0131","\xC7ar\u015Famba","Per\u015Fembe","Cuma","Cumartesi"],["Pa","Pt","Sa","\xC7a","Pe","Cu","Ct"]],void 0,[["O","\u015E","M","N","M","H","T","A","E","E","K","A"],["Oca","\u015Eub","Mar","Nis","May","Haz","Tem","A\u011Fu","Eyl","Eki","Kas","Ara"],["Ocak","\u015Eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011Fustos","Eyl\xFCl","Ekim","Kas\u0131m","Aral\u0131k"]],void 0,[["M\xD6","MS"],void 0,["Milattan \xD6nce","Milattan Sonra"]],1,[6,0],["d.MM.y","d MMM y","d MMMM y","d MMMM y EEEE"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}",void 0,void 0,void 0],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","%#,##0","\xA4#,##0.00","#E0"],"TRY","\u20BA","T\xFCrk Liras\u0131",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],THB:["\u0E3F"],TRY:["\u20BA"],TWD:["NT$"]},"ltr",Ce];function Fe(r){let e=r,t=Math.floor(Math.abs(r)),n=r.toString().replace(/^[^.]*\.?/,"").length;return t===1&&n===0?1:5}var le=["de",[["AM","PM"],void 0,void 0],void 0,[["S","M","D","M","D","F","S"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["S","M","D","M","D","F","S"],["So","Mo","Di","Mi","Do","Fr","Sa"],["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sept.","Okt.","Nov.","Dez."],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]],[["v. Chr.","n. Chr."],void 0,void 0],1,[6,0],["dd.MM.yy","dd.MM.y","d. MMMM y","EEEE, d. MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",void 0,"{1} 'um' {0}",void 0],[",",".",";","%","+","-","E","\xB7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","Euro",{ATS:["\xF6S"],AUD:["AU$","$"],BGM:["BGK"],BGO:["BGJ"],BYN:[void 0,"\u0440."],CUC:[void 0,"Cub$"],DEM:["DM"],FKP:[void 0,"Fl\xA3"],GHS:[void 0,"\u20B5"],GNF:[void 0,"F.G."],KMF:[void 0,"FC"],PHP:[void 0,"\u20B1"],RON:[void 0,"L"],RUR:[void 0,"\u0440."],RWF:[void 0,"F.Rw"],SYP:[],THB:["\u0E3F"],TWD:["NT$"],XXX:[],ZMW:[void 0,"K"]},"ltr",Fe];function Re(r){let e=r;return 5}var de=["zh",[["\u4E0A\u5348","\u4E0B\u5348"],void 0,void 0],void 0,[["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"],["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"]],void 0,[["1","2","3","4","5","6","7","8","9","10","11","12"],["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"]],void 0,[["\u516C\u5143\u524D","\u516C\u5143"],void 0,void 0],0,[6,0],["y/M/d","y\u5E74M\u6708d\u65E5",void 0,"y\u5E74M\u6708d\u65E5EEEE"],["HH:mm","HH:mm:ss","z HH:mm:ss","zzzz HH:mm:ss"],["{1} {0}",void 0,void 0,void 0],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"CNY","\xA5","\u4EBA\u6C11\u5E01",{AUD:["AU$","$"],BYN:[void 0,"\u0440."],CNY:["\xA5"],ILR:["ILS"],JPY:["JP\xA5","\xA5"],KRW:["\uFFE6","\u20A9"],PHP:[void 0,"\u20B1"],RUR:[void 0,"\u0440."],TWD:["NT$"],USD:["US$","$"],XXX:[]},"ltr",Re];function ve(r){let e=r;return e===0?0:e===1?1:e===2?2:e%100===Math.floor(e%100)&&e%100>=3&&e%100<=10?3:e%100===Math.floor(e%100)&&e%100>=11&&e%100<=99?4:5}var me=["ar",[["\u0635","\u0645"],void 0,void 0],[["\u0635","\u0645"],void 0,["\u0635\u0628\u0627\u062D\u064B\u0627","\u0645\u0633\u0627\u0621\u064B"]],[["\u062D","\u0646","\u062B","\u0631","\u062E","\u062C","\u0633"],["\u0627\u0644\u0623\u062D\u062F","\u0627\u0644\u0627\u062B\u0646\u064A\u0646","\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062E\u0645\u064A\u0633","\u0627\u0644\u062C\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062A"],void 0,["\u0623\u062D\u062F","\u0625\u062B\u0646\u064A\u0646","\u062B\u0644\u0627\u062B\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062E\u0645\u064A\u0633","\u062C\u0645\u0639\u0629","\u0633\u0628\u062A"]],void 0,[["\u064A","\u0641","\u0645","\u0623","\u0648","\u0646","\u0644","\u063A","\u0633","\u0643","\u0628","\u062F"],["\u064A\u0646\u0627\u064A\u0631","\u0641\u0628\u0631\u0627\u064A\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064A\u0644","\u0645\u0627\u064A\u0648","\u064A\u0648\u0646\u064A\u0648","\u064A\u0648\u0644\u064A\u0648","\u0623\u063A\u0633\u0637\u0633","\u0633\u0628\u062A\u0645\u0628\u0631","\u0623\u0643\u062A\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062F\u064A\u0633\u0645\u0628\u0631"],void 0],void 0,[["\u0642.\u0645","\u0645"],void 0,["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F","\u0645\u064A\u0644\u0627\u062F\u064A"]],6,[5,6],["d\u200F/M\u200F/y","dd\u200F/MM\u200F/y","d MMMM y","EEEE\u060C d MMMM y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",void 0,"{1} \u0641\u064A {0}",void 0],[".",",",";","\u200E%\u200E","\u200E+","\u200E-","E","\xD7","\u2030","\u221E","\u0644\u064A\u0633\xA0\u0631\u0642\u0645\u064B\u0627",":"],["#,##0.###","#,##0%","\xA4\xA0#,##0.00","#E0"],"EGP","\u062C.\u0645.\u200F","\u062C\u0646\u064A\u0647 \u0645\u0635\u0631\u064A",{AED:["\u062F.\u0625.\u200F"],ARS:[void 0,"AR$"],AUD:["AU$"],BBD:[void 0,"BB$"],BHD:["\u062F.\u0628.\u200F"],BMD:[void 0,"BM$"],BND:[void 0,"BN$"],BSD:[void 0,"BS$"],BYN:[void 0,"\u0440."],BZD:[void 0,"BZ$"],CAD:["CA$"],CLP:[void 0,"CL$"],CNY:["CN\xA5"],COP:[void 0,"CO$"],CUP:[void 0,"CU$"],DOP:[void 0,"DO$"],DZD:["\u062F.\u062C.\u200F"],EGP:["\u062C.\u0645.\u200F","E\xA3"],FJD:[void 0,"FJ$"],GBP:["UK\xA3"],GYD:[void 0,"GY$"],HKD:["HK$"],IQD:["\u062F.\u0639.\u200F"],IRR:["\u0631.\u0625."],JMD:[void 0,"JM$"],JOD:["\u062F.\u0623.\u200F"],JPY:["JP\xA5"],KWD:["\u062F.\u0643.\u200F"],KYD:[void 0,"KY$"],LBP:["\u0644.\u0644.\u200F","L\xA3"],LRD:[void 0,"$LR"],LYD:["\u062F.\u0644.\u200F"],MAD:["\u062F.\u0645.\u200F"],MRU:["\u0623.\u0645."],MXN:["MX$"],NZD:["NZ$"],OMR:["\u0631.\u0639.\u200F"],PHP:[void 0,"\u20B1"],QAR:["\u0631.\u0642.\u200F"],SAR:["\u0631.\u0633.\u200F"],SBD:[void 0,"SB$"],SDD:["\u062F.\u0633.\u200F"],SDG:["\u062C.\u0633."],SRD:[void 0,"SR$"],SYP:["\u0644.\u0633.\u200F","\xA3"],THB:["\u0E3F"],TND:["\u062F.\u062A.\u200F"],TTD:[void 0,"TT$"],TWD:["NT$"],USD:["US$"],UYU:[void 0,"UY$"],YER:["\u0631.\u064A.\u200F"]},"rtl",ve];function Pe(r){let e=r;return Math.floor(Math.abs(r))===0||e===1?1:5}var pe=["fa",[["\u0642","\u0628"],["\u0642.\u0638.","\u0628.\u0638."],["\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631","\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631"]],void 0,[["\u06CC","\u062F","\u0633","\u0686","\u067E","\u062C","\u0634"],["\u06CC\u06A9\u0634\u0646\u0628\u0647","\u062F\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200C\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067E\u0646\u062C\u0634\u0646\u0628\u0647","\u062C\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],void 0,["\u06F1\u0634","\u06F2\u0634","\u06F3\u0634","\u06F4\u0634","\u06F5\u0634","\u062C","\u0634"]],void 0,[["\u0698","\u0641","\u0645","\u0622","\u0645","\u0698","\u0698","\u0627","\u0633","\u0627","\u0646","\u062F"],["\u0698\u0627\u0646\u0648\u06CC\u0647","\u0641\u0648\u0631\u06CC\u0647","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"],["\u0698\u0627\u0646\u0648\u06CC\u0647\u0654","\u0641\u0648\u0631\u06CC\u0647\u0654","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647\u0654","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647\u0654","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"]],[["\u0698","\u0641","\u0645","\u0622","\u0645","\u0698","\u0698","\u0627","\u0633","\u0627","\u0646","\u062F"],["\u0698\u0627\u0646\u0648\u06CC\u0647","\u0641\u0648\u0631\u06CC\u0647","\u0645\u0627\u0631\u0633","\u0622\u0648\u0631\u06CC\u0644","\u0645\u0647","\u0698\u0648\u0626\u0646","\u0698\u0648\u0626\u06CC\u0647","\u0627\u0648\u062A","\u0633\u067E\u062A\u0627\u0645\u0628\u0631","\u0627\u06A9\u062A\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062F\u0633\u0627\u0645\u0628\u0631"],void 0],[["\u0642","\u0645"],["\u0642.\u0645.","\u0645."],["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F","\u0645\u06CC\u0644\u0627\u062F\u06CC"]],6,[5,5],["y/M/d","d MMM y","d MMMM y","EEEE d MMMM y"],["H:mm","H:mm:ss","H:mm:ss (z)","H:mm:ss (zzzz)"],["{1}\u060C\u200F {0}",void 0,"{1}\u060C \u0633\u0627\u0639\u062A {0}",void 0],[".",",",";","%","\u200E+","\u200E\u2212","E","\xD7","\u2030","\u221E","\u0646\u0627\u0639\u062F\u062F",":"],["#,##0.###","#,##0%","\u200E\xA4\xA0#,##0.00","#E0"],"IRR","\u0631\u06CC\u0627\u0644","\u0631\u06CC\u0627\u0644 \u0627\u06CC\u0631\u0627\u0646",{AFN:["\u060B"],BYN:[void 0,"\u0440."],CAD:["$CA","$"],CNY:["\xA5CN","\xA5"],HKD:["$HK","$"],IRR:["\u0631\u06CC\u0627\u0644"],MXN:["$MX","$"],NZD:["$NZ","$"],PHP:[void 0,"\u20B1"],THB:["\u0E3F"],XCD:["$EC","$"],XOF:["\u0641\u0631\u0627\u0646\u06A9\u202FCFA"]},"rtl",Pe];s(se);s(ue);s(le);s(de);s(me);s(pe);var S=class r{#e=u(j);constructor(){this.#e.use("en")}#t=e=>e.split("-")[0];static \u0275fac=function(t){return new(t||r)};static \u0275cmp=H({type:r,selectors:[["app-root"]],decls:1,vars:0,template:function(t,n){t&1&&$(0,"router-outlet")},dependencies:[Y],encapsulation:2})};J(S,ae).catch(r=>console.error(r));