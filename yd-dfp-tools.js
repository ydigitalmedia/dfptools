/*! Package version 3.8.0 - Created by YDigital Media 2017-10-06 */!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define("ydigital/dfptools",[],a());else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.YD=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){"use strict";b.exports=function(b){if(!a.googletag.display)return!1;var c=a.googletag.display,d=function(){a.googletag.display=function(d){var e;e="string"==typeof d||d instanceof String?b("#"+d):d instanceof b?e:b(d);var f=c.call(this,d);return e.hasClass("out-of-page-slot")?(a.googletag.pubads().addEventListener("slotRenderEnded",function(a){var c=e.find("div:first");c.css({visibility:"hidden",width:"100vw",height:"100vh",position:"fixed",top:"0px",left:"0px","background-color":"rgba(0, 0, 0, 0.70)"}),c.find("iframe").first().css({width:"100%",height:"100%","background-color":"transparent"}),c.append(b('<img id="yd_dsp_close_btn" src="//assets.ydigitalmedia.com/images/close.png" />').css({position:"absolute",top:"1px",right:"16px",left:"auto",bottom:"auto",width:"auto",height:"auto",cursor:"pointer",display:"block"}).click(function(a){return b(a.target).parent().remove(),a.cancelBubble&&(a.cancelBubble=!0),a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation(),!1})),c.css("visibility","visible")}),f):f}};if(b)d();else{var e=a.document.createElement("script");e.type="text/javascript",e.src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",e.onload=function(){b=a.jQuery,d()},a.document.head.appendChild(e)}}(a.jQuery||a.Zepto||null)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});