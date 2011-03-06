function addPreloadToStory(story) {
    var anchor = story.getElementsByTagName("a")[0];
    if (!anchor) {
        return;
    }
    var dest_url = anchor.getAttribute("href");
    if (!dest_url) {
        return;
    }
    addPreloadToElement(story, dest_url);
}

function preloadStories() {
    var stories = document.getElementsByClassName("story");
    for_each_do(stories, addPreloadToStory);
}

function addPreloadToAnchor(anchor) {
    addPreloadToElement(anchor, anchor.getAttribute("href"));
}

function addPreloadToAnchors(anchors) {
    for_each_do(anchors, addPreloadToAnchor);
}

function preloadNext() {
    var nextLinks = document.getElementsByClassName("next");
    addPreloadToAnchors(nextLinks);
}

function preloadPrevious() {
    var prevLinks = document.getElementsByClassName("previous");
    addPreloadToAnchors(prevLinks);
}

function addPreloadToTabEntry(tab_entry) {
    var a = tab_entry.getElementsByTagName("a");
    if (a.length != 1) {
        return;
    }
    addPreloadToElement(tab_entry, a[0].getAttribute("href"));
}

function addPreloadToTab(tab) {
    var entries = tab.getElementsByTagName("li");
    for_each_do(entries, addPreloadToTabEntry);
}

function preloadTabs() {
    var tabs = document.getElementsByClassName("tabs");
    for_each_do(tabs, addPreloadToTab);
}

preloadStories();
preloadNext();
preloadPrevious();
preloadTabs();
