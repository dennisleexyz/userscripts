// ==UserScript==
// @name Prusameter
// @description Extract all Prusameter rewards
// @match https://www.printables.com/prusameter
// @license Apache-2.0
// ==/UserScript==

// Unfinished script. Paste into console.

[...document.querySelectorAll('.box-rewards li')].map(e => {
    return {
        title: e.querySelector('span strong')?.innerText,
        description: e.querySelector('span')?.innerText.split('\n')[1] ?? e.lastElementChild.innerText,
        points: e.querySelector('.points').innerText,
    }
})