// ==UserScript==
// @name         DramaCool dark
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  try to make it a bit darker
// @author       Fabio1806
// @match        *://*.dramacool.ee/*
// @icon         https://dramacool.ee/favicon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* Constant for all the pages */
    var bg = "#181818";
    var body = document.querySelector("body");
    var blocks = document.querySelectorAll(".block");
    var charls = document.querySelector(".char-list");
    var social = document.querySelectorAll(".fanpage a");
    var details = document.querySelectorAll(".details .info p");
    var detLink = document.querySelectorAll(".details .info a");
    var relColor= document.querySelectorAll("#load_topivews ul li .reaslead");

    /* Change colors */
    body.style.background = bg;

    blocks.forEach(x => {x.style.background = bg});
    blocks.forEach(x => {x.style.border = "1px solid #545454aa"})

    charls.style.background = "#545454aa";

    social.forEach(x => {x.style.color= "white"})

    details.forEach(x => {x.style.color= "white"})
    detLink.forEach(x => {x.style.color= "white"})

    relColor.style.color = "#fff";

    /* Additional for drama pages*/
    document.querySelector("h1").style.color = "white";
})();
