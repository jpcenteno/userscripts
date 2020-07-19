// ==UserScript==
// @name         Reduce Pinterest.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove distractions from Pinterest.
// @author       You
// @match        *://*.pinterest.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addStyle(styleString) {
        const style = document.createElement('style');
        style.textContent = styleString;
        document.head.append(style);
    }

    addStyle('[data-test-id="homefeed-feed"] { display: none; }')

})();
