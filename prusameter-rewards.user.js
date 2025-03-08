// ==UserScript==
// @name Prusameter Rewards
// @description Extract all Prusameter rewards
// @match https://www.printables.com/prusameter/rewards
// @license Apache-2.0
// ==/UserScript==

// Unfinished script. Paste into console.

[...document.querySelectorAll('article')].map(e => {
    return {
        title: e.querySelector('h5').innerText,
        description: e.querySelector('.description').innerText,
        points: parseInt(e.querySelector('.points').innerText.replace(' ', '')),
        img: e.querySelector('img').src,
        srcset: e.querySelector('source').srcset,
    }
})