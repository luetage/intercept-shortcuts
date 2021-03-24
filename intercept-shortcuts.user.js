// ==UserScript==
// @name       Intercept Shortcuts
// @homepageURL https://github.com/luetage/intercept-shortcuts
// @description Stops websites from hijacking keyboard shortcuts.
// @version    0.8
// @match      *://*/*
// @run-at     document-start

{
    'use strict';

    let pass = () => {
        si++;
        if (si > 3) {
            document.removeEventListener('keyup', pass);
            si = 0;
        }
    }

    let si = 0;
    const keycodes = [9, 13, 16, 27, 32, 37, 38, 39, 40]; //whitelists tab, enter, shift, escape, space and arrow keys
    document.addEventListener('keydown', e => {
        // console.log(e.keyCode);
        if (e.keyCode === 74 && e.altKey) { //shortcut for letting the next shortcut pass (alt-j)
            si = 1;
            document.addEventListener('keyup', pass);
        }
        else if (si === 0 && keycodes.indexOf(e.keyCode) === -1) {
            e.cancelBubble = true;
            e.stopImmediatePropagation();
        }
        return false;
    })
}
