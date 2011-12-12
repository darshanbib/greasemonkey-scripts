// ==UserScript==
// @name          Gmail AdBlock
// @description   Removes ads from Gmail and Google Apps Mail
// @include       https://*.google.com/*
// ==/UserScript==

var ads = document.getElementsByClassName('mq');
for (i=0; i<ads.length; i++) {
  ads[i].style.height = '1px';
  ads[i].style.visibility = 'none';
  ads[i].style.margin = '0px';  
  ads[i].style.padding = '0px';
}
