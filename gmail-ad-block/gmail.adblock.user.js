// ==UserScript==
// @name          Gmail AdBlock
// @namespace     https://github.com/darshanbib/greasemonkey-scripts
// @description   Removes ads from Gmail and Google Apps Mail
// @include       https://*.google.com/*
// @version       0.1
// ==/UserScript==

var ads = document.getElementsByClassName('mq');
for (i=0; i<ads.length; i++) {
    ads[i].style.display = 'none';
}
