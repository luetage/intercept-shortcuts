# Intercept Shortcuts

This is a simple userscript stopping websites from hijacking shortcuts intended for the browser. The original solution to this problem can be found here: [https://superuser.com/questions/168087/how-to-forbid-keyboard-shortcut-stealing-by-websites-in-firefox](https://superuser.com/questions/168087/how-to-forbid-keyboard-shortcut-stealing-by-websites-in-firefox).

I adapted the script for my personal needs in Vivaldi browser. I’m using single key shortcuts and websites like Github or Discord often interfere with navigation. The script intercepts all shortcuts but whitelisted ones and introduces a shortcut to let the next shortcut pass, which makes it possible to still send any shortcut to the website, should the need arise. Writing in input fields is not affected and the whitelisted keys allow for basic actions such as toggling playback (space), leaving fullscreen (esc), navigating menus (arrow keys) and jumping from element to element (tab, shift).
