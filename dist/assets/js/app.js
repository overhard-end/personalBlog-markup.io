!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.getElementById("bur");o.addEventListener("click",(function(e){var t=e.target.getBoundingClientRect();0===t.x?console.log(t.x):console.log("else")})),document.querySelector(".burger-menu").addEventListener("click",(function(){"burger-menu--v"===o.classList.value?o.classList="burger-menu--h":o.classList="burger-menu--v"}));document.querySelector(".discussion-form-answer--h");var c=n(document.querySelectorAll("#click")).forEach((function(e){e.addEventListener("click",(function(){"discussion-form-answer--h"===c.classList.value?(c.classList.remove("discussion-form-answer--h"),c.classList.add("discussion-form-answer")):(c.classList.remove("discussion-form-answer"),c.classList.add("discussion-form-answer--h"))}))})),i=document.getElementById("modal-container"),s=document.querySelector(".contact-modal"),a=document.querySelector(".story-modal");i.addEventListener("click",(function(e){0===e.target.getBoundingClientRect().x&&(i.classList="modal-container--hidden",s.classList="contact-modal--hidden",a.classList="story-modal--hidden")})),document.querySelector(".back-btn").addEventListener("click",(function(){i.classList="modal-container--hidden",s.classList="contact-modal--hidden"})),document.querySelector(".contact-me").addEventListener("click",(function(){i.classList="modal-container",s.classList="contact-modal"}));n(document.querySelectorAll(".stories__item")).forEach((function(e){e.addEventListener("click",(function(){i.classList="modal-container",a.classList="story-modal--hidden",a.classList="story-modal"}))}))}]);