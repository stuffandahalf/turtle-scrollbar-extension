/*var url = window.location.href;

//if (!url.includes("disable_polymer=1")) {
if (url.indexOf("disable_polymer") === -1) {
    if (url.includes("?")) {
        console.log("contains parameters");
        url += "&";
    }
    else {
        console.log("no parameters");
        url += "?";
    }
    url += "disable_polymer=1";
    window.location.href = url;
}

console.log(url);
console.log(url.includes("disable_polymer=1"));
*/

//console.log("test");

var callback = function(details) {
    var url = details.url;
    var tabId = details.tabId;
    var support = url.includes(".css") ||
        url.includes(".js") ||
        url.includes("youtubei") ||
        url.includes("yts") ||
        url.includes("feed_ajax");
    //console.log(url.includes("feed_ajax"));
    //console.log(tabId);
    if (!support && !url.includes("disable_polymer")) {
        if (url.includes("?")) {
            //console.log("contains parameters");
            url += "&";
        }
        else {
            //console.log("no parameters");
            url += "?";
        }
        url += "disable_polymer=1";
        console.log(url);
        //return {redirectUrl: url};
        //return {redirectUrl: url};
        chrome.tabs.update(tabId, {url: url});
    }
};

//var filter = {urls: ["*youtube.com/*"]};
//var filter = {urls: ["http://*/*", "https://*/*"]};
//var filter = {urls: ["*://*/*"]};
//var filter = {urls: ["<all_urls>"]}
var filter = {urls: ["*://youtube.com/*", "*://www.youtube.com/*"]};

chrome.webRequest.onBeforeRequest.addListener(callback, filter);
