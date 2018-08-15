/********** SETTINGS **********/	


var stickyHeader = true; // true or false - set to true if you want to heave sticky menu (stays always on the top of the srceen
var boxed = false; // true or false - set to true if you want to heave boxed layout (page width 1300px);
var imageDownloadEnabled = true;  // true or false - set to true if you want to allow visitors to download photos in lightGallery view
var mapStyle = [{"featureType":"landscape","stylers":[{	"hue":"#FFBB00"	},{	"saturation":43.400000000000006},{"lightness":37.599999999999994},{	"gamma":1}]},{"featureType":"road.highway",	"stylers":[	{"hue":"#FFC200"},{	"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},	{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},	{"featureType":"road.local",	"stylers":[	{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},	{"featureType":"water","stylers":[	{"hue":"#0078FF"	},	{"saturation":-13.200000000000003},	{"lightness":2.4000000000000057},{"gamma":1}]},	{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];
//mapStyle is a color scheme for google maps. You can choose or design your own scheme here: https://snazzymaps.com/
var disableMobileHover = true; //you can disable some on-hover feature like flipping offers, when browsing on the mobile.
var wowAnimationMobile = false; //you can WOW animations (sections sliding when on viewport) on mobile.



/********** SETTINGS END **********/	



"use strict";




/********** MOBILE AND IE DETECTION **********/		



/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-pointerevents-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var f in d)if(d.hasOwnProperty(f)){if(e=[],n=d[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),l.push((s?"":"no-")+r.join("-"))}}function i(e){var n=c.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?c.className.baseVal=n:c.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=a(p?"svg":"body"),e.fake=!0),e}function f(e,t,o,s){var i,f,l,d,u="modernizr",p=a("div"),v=r();if(parseInt(o,10))for(;o--;)l=a("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+u,(v.fake?v:p).appendChild(i),v.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,v.fake&&(v.style.background="",v.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(v)),f=t(p,e),v.fake?(v.parentNode.removeChild(v),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var l=[],d=[],u={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v;var h=function(){function e(e,n){var s;return e?(n&&"string"!=typeof n||(n=a(n||"div")),e="on"+e,s=e in n,!s&&o&&(n.setAttribute||(n=a("div")),n.setAttribute(e,""),s="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),s):!1}var o=!("onblur"in n.documentElement);return e}();u.hasEvent=h;var m="Moz O ms Webkit",g=u._config.usePrefixes?m.toLowerCase().split(" "):[];u._domPrefixes=g,Modernizr.addTest("pointerevents",function(){var e=!1,n=g.length;for(e=Modernizr.hasEvent("pointerdown");n--&&!e;)h(g[n]+"pointerdown")&&(e=!0);return e});var w=u.testStyles=f;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");w(o,function(e){t=9===e.offsetTop})}return t}),s(),i(l),delete u.addTest,delete u.addAsyncTest;for(var y=0;y<Modernizr._q.length;y++)Modernizr._q[y]();e.Modernizr=Modernizr}(window,document);

function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

var mobile = false; 
var ie = false;
var ie9 = false;
if (isIE() && isIE() <= 9) {
	ie9 = true;
	ie = true;
	jQuery('html').addClass('ie9');
} else if ( isIE() || navigator.appVersion.indexOf('Trident/') > 0 ){
	ie = true;
}
if( ( $('html').hasClass('pointerevents') || $('html').hasClass('touchevents' ) ) && !ie && w_width < 1025 ) {
	jQuery('html').addClass('mobile');
	mobile = true;
}




var w_height = jQuery(window).height();
var w_width = jQuery(window).width();
var estateMap = false;
var panorama = false;
var staticDescHeight = 0;

jQuery(document).ready(function($) {
	
	