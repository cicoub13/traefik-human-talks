﻿!function i(a,l,s){function d(e,t){if(!l[e]){if(!a[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(u)return u(e,!0);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}var n=l[e]={exports:{}};a[e][0].call(n.exports,function(t){return d(a[e][1][t]||t)},n,n.exports,i,a,l,s)}return l[e].exports}for(var u="function"==typeof require&&require,t=0;t<s.length;t++)d(s[t]);return d}({1:[function(t,e,r){"use strict";!function(){function t(){var t=void 0,e=void 0,r=void 0;if(l.getElementsByClassName)t=l.getElementsByClassName("trustpilot-widget");else if(l.querySelectorAll)t=l.querySelectorAll(".trustpilot-widget");else{var o=[],n=new RegExp("(^| )trustpilot-widget( |$)"),i=l.body.getElementsByTagName("*");for(e=0,r=i.length;e<r;e++)n.test(i[e].className)&&o.push(i[e]);t=o}for(e=0;e<t.length;++e)for(var a=t[e];a.firstChild&&"IFRAME"!==a.firstChild.tagName;)a.removeChild(a.firstChild)}var l=document;"loading"!==l.readyState&&t(),l.addEventListener?l.addEventListener("DOMContentLoaded",t):window.attachEvent("onload",t);var e=("https:"===l.location.protocol?"https:":"http:")+"//widget.trustpilot.com",r=l.createElement("script");r.src=e+"/bootstrap/v5/tp.widget.bootstrap.min.js",r.async=!0,l.querySelector("head").appendChild(r)}()},{}]},{},[1]);
//# sourceMappingURL=tp.widget.sync.bootstrap.min.js.map
