import "../../../assets/js/modulepreload-polyfill.0c213636.js";
try {
    chrome.devtools.panels.create("Dev Tools", "icon.png", "src/pages/panel/index.html")
} catch (e) {
    console.error(e)
}