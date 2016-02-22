/*
 AngularJS v1.4.9
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(E,l,Va){'use strict';function xa(a,b,c){if(!a)throw Ka("areq",b||"?",c||"required");return a}function ya(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;aa(a)&&(a=a.join(" "));aa(b)&&(b=b.join(" "));return a+" "+b}function La(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function W(a,b,c){var d="";a=aa(a)?a:a&&R(a)&&a.length?a.split(/\s+/):[];u(a,function(a,m){a&&0<a.length&&(d+=0<m?" ":"",d+=c?b+a:a+b)});return d}function Ma(a){if(a instanceof I)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return I(oa(a))}if(1===a.nodeType)return I(a)}function oa(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Na(a,b,c){u(b,function(b){a.addClass(b,c)})}function Oa(a,b,c){u(b,function(b){a.removeClass(b,c)})}function T(a){return function(b,c){c.addClass&&(Na(a,b,c.addClass),c.addClass=null);c.removeClass&&(Oa(a,b,c.removeClass),c.removeClass=null)}}function la(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ea(a,b){za(a,b);Aa(a,b)}function za(a,b){b.from&&(a.css(b.from),b.from=null)}function Aa(a,b){b.to&&(a.css(b.to),b.to=null)}function U(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),f=(b.removeClass||"")+" "+(c.removeClass||"");a=Pa(a.attr("class"),d,f);c.preparationClasses&&(b.preparationClasses=ba(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==P?b.domOperation:
null;Ba(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Pa(a,b,c){function d(a){R(a)&&(a=a.split(" "));var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);u(b,function(a,b){f[b]=1});c=d(c);u(c,function(a,b){f[b]=1===f[b]?null:-1});var m={addClass:"",removeClass:""};u(f,function(b,c){var d,f;1===b?(d="addClass",f=!a[c]):-1===b&&(d="removeClass",f=a[c]);f&&(m[d].length&&(m[d]+=" "),m[d]+=c)});
return m}function F(a){return a instanceof l.element?a[0]:a}function Qa(a,b,c){var d="";b&&(d=W(b,"ng-",!0));c.addClass&&(d=ba(d,W(c.addClass,"-add")));c.removeClass&&(d=ba(d,W(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ma(a,b){var c=b?"-"+b+"s":"";ia(a,[ja,c]);return[ja,c]}function pa(a,b){var c=b?"paused":"",d=X+"PlayState";ia(a,[d,c]);return[d,c]}function ia(a,b){a.style[b[0]]=b[1]}function ba(a,b){return a?b?a+" "+b:a:b}function Ca(a,b,c){var d=Object.create(null),
f=a.getComputedStyle(b)||{};u(c,function(a,b){var c=f[a];if(c){var D=c.charAt(0);if("-"===D||"+"===D||0<=D)c=Ra(c);0===c&&(c=null);d[b]=c}});return d}function Ra(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function qa(a){return 0===a||null!=a}function Da(a,b){var c=S,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Ea(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Fa(a,b,c){u(c,function(c){a[c]=Y(a[c])?a[c]:b.style.getPropertyValue(c)})}var P=l.noop,Ga=l.copy,Ba=l.extend,I=l.element,u=l.forEach,aa=l.isArray,R=l.isString,ra=l.isObject,O=l.isUndefined,Y=l.isDefined,Ha=l.isFunction,sa=l.isElement,S,ta,X,ua;O(E.ontransitionend)&&Y(E.onwebkittransitionend)?(S="WebkitTransition",ta="webkitTransitionEnd transitionend"):
(S="transition",ta="transitionend");O(E.onanimationend)&&Y(E.onwebkitanimationend)?(X="WebkitAnimation",ua="webkitAnimationEnd animationend"):(X="animation",ua="animationend");var na=X+"Delay",va=X+"Duration",ja=S+"Delay";E=S+"Duration";var Ka=l.$$minErr("ng"),Sa={transitionDuration:E,transitionDelay:ja,transitionProperty:S+"Property",animationDuration:va,animationDelay:na,animationIterationCount:X+"IterationCount"},Ta={transitionDuration:E,transitionDelay:ja,animationDuration:va,animationDelay:na};
l.module("ngAnimate",[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;l.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),J=0;J<b.length;J++)b[J]();f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&
f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);u(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return m[a].some(function(a){return a(b,c,d)})}function f(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var m=this.rules={skip:[],
cancel:[],join:[]};m.join.push(function(a,b,c){return!b.structural&&f(b.options)});m.skip.push(function(a,b,c){return!b.structural&&!f(b.options)});m.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});m.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});m.cancel.push(function(a,b,c){return c.structural&&b.structural});m.cancel.push(function(a,b,c){return 2===c.state&&b.structural});m.cancel.push(function(a,b,d){a=b.options.addClass;b=b.options.removeClass;var f=
d.options.addClass;d=d.options.removeClass;return O(a)&&O(b)||O(f)&&O(d)?!1:c(a,d)||c(b,f)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,D,m,h,l,x,z,v,k){function N(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function y(a,b,c){var e=F(b),d=F(a),g=[];(a=G[c])&&u(a,function(a){s.call(a.node,e)?g.push(a.callback):"leave"===c&&s.call(a.node,d)&&g.push(a.callback)});
return g}function w(a,e,g){function w(c,e,g,d){D(function(){var c=y(q,a,e);c.length&&b(function(){u(c,function(b){b(a,g,d)})})});c.progress(e,g,d)}function k(b){var c=a,e=n;e.preparationClasses&&(c.removeClass(e.preparationClasses),e.preparationClasses=null);e.activeClasses&&(c.removeClass(e.activeClasses),e.activeClasses=null);Ja(a,n);ea(a,n);n.domOperation();s.complete(!b)}var n=Ga(g),G,q;if(a=Ma(a))G=F(a),q=a.parent();var n=la(n),s=new x,D=N();aa(n.addClass)&&(n.addClass=n.addClass.join(" "));
n.addClass&&!R(n.addClass)&&(n.addClass=null);aa(n.removeClass)&&(n.removeClass=n.removeClass.join(" "));n.removeClass&&!R(n.removeClass)&&(n.removeClass=null);n.from&&!ra(n.from)&&(n.from=null);n.to&&!ra(n.to)&&(n.to=null);if(!G)return k(),s;g=[G.className,n.addClass,n.removeClass].join(" ");if(!Ua(g))return k(),s;var v=0<=["enter","move","leave"].indexOf(e),h=!H||m[0].hidden||B.get(G);g=!h&&t.get(G)||{};var z=!!g.state;h||z&&1==g.state||(h=!r(a,q,e));if(h)return k(),s;v&&wa(a);h={structural:v,element:a,
event:e,close:k,options:n,runner:s};if(z){if(d("skip",a,h,g)){if(2===g.state)return k(),s;U(a,g.options,n);return g.runner}if(d("cancel",a,h,g))if(2===g.state)g.runner.end();else if(g.structural)g.close();else return U(a,g.options,h.options),g.runner;else if(d("join",a,h,g))if(2===g.state)U(a,n,{});else return Qa(a,v?e:null,n),e=h.event=g.event,n=U(a,g.options,h.options),g.runner}else U(a,n,{});(z=h.structural)||(z="animate"===h.event&&0<Object.keys(h.options.to||{}).length||f(h.options));if(!z)return k(),
L(a),s;var M=(g.counter||0)+1;h.counter=M;A(a,1,h);c.$$postDigest(function(){var b=t.get(G),c=!b,b=b||{},g=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||f(b.options));if(c||b.counter!==M||!g){c&&(Ja(a,n),ea(a,n));if(c||v&&b.event!==e)n.domOperation(),s.end();g||L(a)}else e=!b.structural&&f(b.options,!0)?"setClass":b.event,A(a,2),b=l(a,e,b.options),b.done(function(b){k(!b);(b=t.get(G))&&b.counter===M&&L(F(a));w(s,e,"close",{})}),s.setHost(b),w(s,e,"start",{})});return s}function wa(a){a=
F(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=t.get(a);if(c)switch(b){case 2:c.runner.end();case 1:t.remove(a)}})}function L(a){a=F(a);a.removeAttribute("data-ng-animate");t.remove(a)}function q(a,b){return F(a)===F(b)}function r(a,b,c){c=I(m[0].body);var e=q(a,c)||"HTML"===a[0].nodeName,g=q(a,D),d=!1,H,w=B.get(F(a));for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){g||(g=q(b,D));var k=b[0];if(1!==k.nodeType)break;a=t.get(k)||{};
if(!d){k=B.get(k);if(!0===k&&!1!==w){w=!0;break}else!1===k&&(w=!1);d=a.structural}if(O(H)||!0===H)a=b.data("$$ngAnimateChildren"),Y(a)&&(H=a);if(d&&!1===H)break;e||(e=q(b,c));if(e&&g)break;if(!g&&(a=b.data("$ngAnimatePin"))){b=a;continue}b=b.parent()}return(!d||H)&&!0!==w&&g&&e}function A(a,b,c){c=c||{};c.state=b;a=F(a);a.setAttribute("data-ng-animate",b);c=(b=t.get(a))?Ba(b,c):c;t.put(a,c)}var t=new h,B=new h,H=null,e=c.$watch(function(){return 0===z.totalPendingRequests},function(a){a&&(e(),c.$$postDigest(function(){c.$$postDigest(function(){null===
H&&(H=!0)})}))}),G={},g=a.classNameFilter(),Ua=g?function(a){return g.test(a)}:function(){return!0},Ja=T(v),s=Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)};return{on:function(a,b,c){b=oa(b);G[a]=G[a]||[];G[a].push({node:b,callback:c})},off:function(a,b,c){function e(a,b,c){var g=oa(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}var g=G[a];g&&(G[a]=1===arguments.length?null:e(g,b,c))},pin:function(a,b){xa(sa(a),"element","not an element");
xa(sa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,e){c=c||{};c.domOperation=e;return w(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!H;else if(sa(a)){var e=F(a),g=B.get(e);1===c?b=!g:B.put(e,!b)}else b=H=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",
function(a,f,m,J,ha,D){function Q(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,k=d.parentNode;f.put(d,a);for(var q;k;){if(q=f.get(k)){q.processed||(q=b(q));break}k=k.parentNode}(q||c).children.push(a);return a}var c={children:[]},d,f=new ha;for(d=0;d<a.length;d++){var h=a[d];f.put(h.domNode,a[d]={domNode:h.domNode,fn:h.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var k=
0,f=[];for(d=0;d<c.length;d++){var t=c[d];0>=a&&(a=k,k=0,b.push(f),f=[]);f.push(t.fn);t.children.forEach(function(a){k++;c.push(a)});a--}f.length&&b.push(f);return b}(c)}var h=[],l=T(a);return function(x,z,v){function k(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function N(a){var b=[],c={};u(a,function(a,g){var d=F(a.element),H=0<=["enter","move"].indexOf(a.event),
d=a.structural?k(d):[];if(d.length){var f=H?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][f]={animationID:g,element:I(a)}})}else b.push(a)});var g={},d={};u(c,function(c,f){var k=c.from,w=c.to;if(k&&w){var B=a[k.animationID],t=a[w.animationID],A=k.animationID.toString();if(!d[A]){var h=d[A]={structural:!0,beforeStart:function(){B.beforeStart();t.beforeStart()},close:function(){B.close();t.close()},classes:y(B.classes,t.classes),from:B,to:t,anchors:[]};h.classes.length?
b.push(h):(b.push(B),b.push(t))}d[A].anchors.push({out:k.element,"in":w.element})}else k=k?k.animationID:w.animationID,w=k.toString(),g[w]||(g[w]=!0,b.push(a[k]))});return b}function y(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var k=a[d];if("ng-"!==k.substring(0,3))for(var w=0;w<b.length;w++)if(k===b[w]){c.push(k);break}}return c.join(" ")}function w(a){for(var b=c.length-1;0<=b;b--){var d=c[b];if(m.has(d)&&(d=m.get(d)(a)))return d}}function wa(a,c){a.from&&a.to?(b(a.from.element).setHost(c),
b(a.to.element).setHost(c)):b(a.element).setHost(c)}function L(){var a=b(x);!a||"leave"===z&&v.$$domOperationFired||a.end()}function q(b){x.off("$destroy",L);x.removeData("$$animationRunner");l(x,v);ea(x,v);v.domOperation();B&&a.removeClass(x,B);x.removeClass("ng-animate");A.complete(!b)}v=la(v);var r=0<=["enter","move","leave"].indexOf(z),A=new J({end:function(){q()},cancel:function(){q(!0)}});if(!c.length)return q(),A;x.data("$$animationRunner",A);var t=ya(x.attr("class"),ya(v.addClass,v.removeClass)),
B=v.tempClasses;B&&(t+=" "+B,v.tempClasses=null);h.push({element:x,classes:t,event:z,structural:r,options:v,beforeStart:function(){x.addClass("ng-animate");B&&a.addClass(x,B)},close:q});x.on("$destroy",L);if(1<h.length)return A;f.$$postDigest(function(){var a=[];u(h,function(c){b(c.element)?a.push(c):c.close()});h.length=0;var c=N(a),d=[];u(c,function(a){d.push({domNode:F(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var e=
w(a);e&&(c=e.start)}c?(c=c(),c.done(function(a){d(!a)}),wa(a,c)):d()}})});D(Q(d))});return A}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ea(),c=Ea();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,m,J,l,D,Q,h){function Ia(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++N))+"-"+a.getAttribute("class")+"-"+b}function x(k,h,L,q){var r;0<b.count(L)&&(r=c.get(L),
r||(h=W(h,"-stagger"),f.addClass(k,h),r=Ca(a,k,q),r.animationDuration=Math.max(r.animationDuration,0),r.transitionDuration=Math.max(r.transitionDuration,0),f.removeClass(k,h),c.put(L,r)));return r||{}}function z(a){y.push(a);Q.waitUntilQuiet(function(){b.flush();c.flush();for(var a=l(),d=0;d<y.length;d++)y[d](a);y.length=0})}function v(c,k,f){k=b.get(f);k||(k=Ca(a,c,Sa),"infinite"===k.animationIterationCount&&(k.animationIterationCount=1));b.put(f,k);c=k;f=c.animationDelay;k=c.transitionDelay;c.maxDelay=
f&&k?Math.max(f,k):f||k;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var k=T(f),N=0,y=[];return function(a,c){function d(){r()}function q(){r(!0)}function r(b){if(!(l||ha&&N)){l=!0;N=!1;e.$$skipPreparationClasses||f.removeClass(a,ca);f.removeClass(a,ba);pa(g,!1);ma(g,!1);u(y,function(a){g.style[a[0]]=""});k(a,e);ea(a,e);Object.keys(G).length&&u(G,function(a,b){a?g.style.setProperty(b,a):g.style.removeProperty(b)});if(e.onDone)e.onDone();da&&da.length&&
a.off(da.join(" "),B);E&&E.complete(!b)}}function A(a){p.blockTransition&&ma(g,a);p.blockKeyframeAnimation&&pa(g,!!a)}function t(){E=new m({end:d,cancel:q});z(P);r();return{$$willAnimate:!1,start:function(){return E},end:d}}function B(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-T,0)>=O&&b>=K&&(ha=!0,r())}function H(){function b(){if(!l){A(!1);u(y,function(a){g.style[a[0]]=a[1]});k(a,e);f.addClass(a,ba);if(p.recalculateTimingStyles){ka=
g.className+" "+ca;fa=Ia(g,ka);C=v(g,ka,fa);Z=C.maxDelay;n=Math.max(Z,0);K=C.maxDuration;if(0===K){r();return}p.hasTransitions=0<C.transitionDuration;p.hasAnimations=0<C.animationDuration}p.applyAnimationDelay&&(Z="boolean"!==typeof e.delay&&qa(e.delay)?parseFloat(e.delay):Z,n=Math.max(Z,0),C.animationDelay=Z,$=[na,Z+"s"],y.push($),g.style[$[0]]=$[1]);O=1E3*n;R=1E3*K;if(e.easing){var d,h=e.easing;p.hasTransitions&&(d=S+"TimingFunction",y.push([d,h]),g.style[d]=h);p.hasAnimations&&(d=X+"TimingFunction",
y.push([d,h]),g.style[d]=h)}C.transitionDuration&&da.push(ta);C.animationDuration&&da.push(ua);T=Date.now();var t=O+1.5*R;d=T+t;var h=a.data("$$animateCss")||[],H=!0;if(h.length){var s=h[0];(H=d>s.expectedEndTime)?J.cancel(s.timer):h.push(r)}H&&(t=J(c,t,!1),h[0]={timer:t,expectedEndTime:d},h.push(r),a.data("$$animateCss",h));if(da.length)a.on(da.join(" "),B);e.to&&(e.cleanupStyles&&Fa(G,g,Object.keys(e.to)),Aa(a,e))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!l)if(g.parentNode){var d=function(a){if(ha)N&&a&&(N=!1,r());else if(N=!a,C.animationDuration)if(a=pa(g,N),N)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},h=0<Y&&(C.transitionDuration&&0===V.transitionDuration||C.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);h?J(b,Math.floor(h*Y*1E3),!1):b();I.resume=function(){d(!0)};I.pause=function(){d(!1)}}else r()}var e=c||{};e.$$prepared||(e=la(Ga(e)));var G={},g=F(a);
if(!g||!g.parentNode||!h.enabled())return t();var y=[],Q=a.attr("class"),s=La(e),l,N,ha,E,I,n,O,K,R,T,da=[];if(0===e.duration||!D.animations&&!D.transitions)return t();var ga=e.event&&aa(e.event)?e.event.join(" "):e.event,U="",M="";ga&&e.structural?U=W(ga,"ng-",!0):ga&&(U=ga);e.addClass&&(M+=W(e.addClass,"-add"));e.removeClass&&(M.length&&(M+=" "),M+=W(e.removeClass,"-remove"));e.applyClassesEarly&&M.length&&k(a,e);var ca=[U,M].join(" ").trim(),ka=Q+" "+ca,ba=W(ca,"-active"),Q=s.to&&0<Object.keys(s.to).length;
if(!(0<(e.keyframeStyle||"").length||Q||ca))return t();var fa,V;0<e.stagger?(s=parseFloat(e.stagger),V={transitionDelay:s,animationDelay:s,transitionDuration:0,animationDuration:0}):(fa=Ia(g,ka),V=x(g,ca,fa,Ta));e.$$skipPreparationClasses||f.addClass(a,ca);e.transitionStyle&&(s=[S,e.transitionStyle],ia(g,s),y.push(s));0<=e.duration&&(s=0<g.style[S].length,s=Da(e.duration,s),ia(g,s),y.push(s));e.keyframeStyle&&(s=[X,e.keyframeStyle],ia(g,s),y.push(s));var Y=V?0<=e.staggerIndex?e.staggerIndex:b.count(fa):
0;(ga=0===Y)&&!e.skipBlocking&&ma(g,9999);var C=v(g,ka,fa),Z=C.maxDelay;n=Math.max(Z,0);K=C.maxDuration;var p={};p.hasTransitions=0<C.transitionDuration;p.hasAnimations=0<C.animationDuration;p.hasTransitionAll=p.hasTransitions&&"all"==C.transitionProperty;p.applyTransitionDuration=Q&&(p.hasTransitions&&!p.hasTransitionAll||p.hasAnimations&&!p.hasTransitions);p.applyAnimationDuration=e.duration&&p.hasAnimations;p.applyTransitionDelay=qa(e.delay)&&(p.applyTransitionDuration||p.hasTransitions);p.applyAnimationDelay=
qa(e.delay)&&p.hasAnimations;p.recalculateTimingStyles=0<M.length;if(p.applyTransitionDuration||p.applyAnimationDuration)K=e.duration?parseFloat(e.duration):K,p.applyTransitionDuration&&(p.hasTransitions=!0,C.transitionDuration=K,s=0<g.style[S+"Property"].length,y.push(Da(K,s))),p.applyAnimationDuration&&(p.hasAnimations=!0,C.animationDuration=K,y.push([va,K+"s"]));if(0===K&&!p.recalculateTimingStyles)return t();if(null!=e.delay){var $;"boolean"!==typeof e.delay&&($=parseFloat(e.delay),n=Math.max($,
0));p.applyTransitionDelay&&y.push([ja,$+"s"]);p.applyAnimationDelay&&y.push([na,$+"s"])}null==e.duration&&0<C.transitionDuration&&(p.recalculateTimingStyles=p.recalculateTimingStyles||ga);O=1E3*n;R=1E3*K;e.skipBlocking||(p.blockTransition=0<C.transitionDuration,p.blockKeyframeAnimation=0<C.animationDuration&&0<V.animationDelay&&0===V.animationDuration);e.from&&(e.cleanupStyles&&Fa(G,g,Object.keys(e.from)),za(a,e));p.blockTransition||p.blockKeyframeAnimation?A(K):e.skipBlocking||ma(g,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!l)return I={end:d,cancel:q,resume:null,pause:null},E=new m(I),z(H),E}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,m,J,l){function D(a){return a.replace(/\bng-\S+\b/g,"")}function Q(a,b){R(a)&&(a=a.split(" "));R(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function h(c,f,h){function m(a){var b={},c=F(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=z.scrollTop;break;case "left":d+=z.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function l(){var c=D(h.attr("class")||""),d=Q(c,r),c=Q(r,c),d=a(q,{to:m(h),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function J(){q.remove();f.removeClass("ng-animate-shim");h.removeClass("ng-animate-shim")}var q=
I(F(f).cloneNode(!0)),r=D(q.attr("class")||"");f.addClass("ng-animate-shim");h.addClass("ng-animate-shim");q.addClass("ng-anchor");v.append(q);var A;c=function(){var c=a(q,{addClass:"ng-anchor-out",delay:!0,from:m(f)});return c.$$willAnimate?c:null}();if(!c&&(A=l(),!A))return J();var t=c||A;return{start:function(){function a(){c&&c.end()}var b,c=t.start();c.done(function(){c=null;if(!A&&(A=l()))return c=A.start(),c.done(function(){c=null;J();b.complete()}),c;J();b.complete()});return b=new d({end:a,
cancel:a})}}}function E(a,b,c,f){var m=x(a,P),D=x(b,P),q=[];u(f,function(a){(a=h(c,a.out,a["in"]))&&q.push(a)});if(m||D||0!==q.length)return{start:function(){function a(){u(b,function(a){a.end()})}var b=[];m&&b.push(m.start());D&&b.push(D.start());u(q,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function x(c){var d=c.element,f=c.options||{};c.structural&&(f.event=c.event,f.structural=!0,f.applyClassesEarly=!0,"leave"===c.event&&(f.onDone=
f.domOperation));f.preparationClasses&&(f.event=ba(f.event,f.preparationClasses));c=a(d,f);return c.$$willAnimate?c:null}if(!m.animations&&!m.transitions)return P;var z=l[0].body;c=F(f);var v=I(c.parentNode&&11===c.parentNode.nodeType||z.contains(c)?c:z);T(J);return function(a){return a.from&&a.to?E(a.from,a.to,a.classes,a.anchors):x(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=aa(c)?c:c.split(" ");
for(var d=[],f={},m=0;m<c.length;m++){var h=c[m],l=a.$$registeredAnimations[h];l&&!f[h]&&(d.push(b.get(l)),f[h]=!0)}return d}var m=T(d);return function(a,b,d,l){function h(){l.domOperation();m(a,l)}function F(a,b,d,f,e){switch(d){case "animate":b=[b,f.from,f.to,e];break;case "setClass":b=[b,k,E,e];break;case "addClass":b=[b,k,e];break;case "removeClass":b=[b,E,e];break;default:b=[b,e]}b.push(f);if(a=a.apply(a,b))if(Ha(a.start)&&(a=a.start()),a instanceof c)a.done(e);else if(Ha(a))return a;return P}
function x(a,b,d,f,e){var h=[];u(f,function(f){var k=f[e];k&&h.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=F(k,a,b,d,function(a){h(!1===a)});return e})});return h}function z(a,b,d,f,e){var h=x(a,b,d,f,e);if(0===h.length){var g,k;"beforeSetClass"===e?(g=x(a,"removeClass",d,f,"beforeRemoveClass"),k=x(a,"addClass",d,f,"beforeAddClass")):"setClass"===e&&(g=x(a,"removeClass",d,f,"removeClass"),k=x(a,"addClass",
d,f,"addClass"));g&&(h=h.concat(g));k&&(h=h.concat(k))}if(0!==h.length)return function(a){var b=[];h.length&&u(h,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}var v=!1;3===arguments.length&&ra(d)&&(l=d,d=null);l=la(l);d||(d=a.attr("class")||"",l.addClass&&(d+=" "+l.addClass),l.removeClass&&(d+=" "+l.removeClass));var k=l.addClass,E=l.removeClass,y=f(d),w,I;if(y.length){var L,q;"leave"==b?(q="leave",L="afterLeave"):(q="before"+b.charAt(0).toUpperCase()+
b.substr(1),L=b);"enter"!==b&&"move"!==b&&(w=z(a,b,l,y,q));I=z(a,b,l,y,L)}if(w||I){var r;return{$$willAnimate:!0,end:function(){r?r.end():(v=!0,h(),ea(a,l),r=new c,r.complete(!0));return r},start:function(){function b(c){v=!0;h();ea(a,l);r.complete(c)}if(r)return r;r=new c;var d,f=[];w&&f.push(function(a){d=w(a)});f.length?f.push(function(a){h();a(!0)}):h();I&&f.push(function(a){d=I(a)});r.setHost({end:function(){v||((d||P)(void 0),b(void 0))},cancel:function(){v||((d||P)(!0),b(!0))}});c.chain(f,
b);return r}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),l=d(a.to);if(b||l)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());l&&d.push(l.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
