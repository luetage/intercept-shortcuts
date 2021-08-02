// ==UserScript==
// @name       Intercept Shortcuts
// @homepageURL https://github.com/luetage/intercept-shortcuts
// @description Stops websites from hijacking keyboard shortcuts.
// @version    0.9
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
    const keycodes = ['Escape', 'Tab', 'Enter', ' ', 'Shift', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'ArrowRight']; //whitelist
    document.addEventListener('keydown', e => {
        // console.log(e.key);
        if (e.key === 'j' && e.altKey) { //shortcut for letting the next shortcut pass (alt-j)
            si = 1;
            document.addEventListener('keyup', pass);
        }
        else if (si === 0 && keycodes.indexOf(e.key) === -1) {
            e.cancelBubble = true;
            e.stopImmediatePropagation();
        }
        return false;
    })
}
