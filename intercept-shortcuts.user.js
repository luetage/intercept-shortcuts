// ==UserScript==
// @name       Intercept Shortcuts
// @homepageURL https://github.com/luetage/intercept-shortcuts
// @description Stops websites from hijacking keyboard shortcuts.
// @version    0.7
// @match      *://*/*
// @run-at     document-start

{
    'use strict';
    const keycodes = [9, 13, 16, 20, 27, 32, 37, 38, 39, 40]; //whitelists tab, enter, shift, capslock, escape, space and all arrow keys
    document.addEventListener('keydown', e => {
        // console.log(e.keyCode);
        if (keycodes.indexOf(e.keyCode) === -1) {
            e.cancelBubble = true;
            e.stopImmediatePropagation();
        }
        return false;
    })
}
