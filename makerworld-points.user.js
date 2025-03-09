// ==UserScript==
// @name MakerWorld rewards
// @description Extract all MakerWorld rewards
// @match https://makerworld.com/en/points
// @license Apache-2.0
// ==/UserScript==

// TODO: unfinished script. Paste into console.

[...document.querySelector('#simple-tabpanel-PointsShop').querySelectorAll('.mw-css-1np7691')].map(e => {
    return {
        title: e.querySelector('h3').innerText,
        description: e.querySelector('p').innerText,
        points: e.querySelector('span').innerText.replace(',', ''),
        img: e.querySelector('img').src,
    }
});

// click on "Rules" before using this one
[...document.querySelectorAll('.mw-css-sbves9 .mw-css-0')].map(e => {
    return {
        title: e.querySelector('.mw-css-1tqg76h')?.innerText ?? e.nextSibling.querySelector('.mw-css-16nkflr')?.innerText,
        description: e.querySelector('.mw-css-7nqg11')?.innerText ?? e.querySelector('.mw-css-1jat8em')?.innerText ?? e.nextSibling.querySelector('.mw-css-1051sbq')?.innerText,
    }
})