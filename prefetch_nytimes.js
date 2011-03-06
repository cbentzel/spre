function addPreloadToElement(elem, url) {
    elem.onmouseover = function() {
        // Would be good to only do this when over for a bit.
        if (!elem.prefetchLink) {
            var prefetchLink = document.createElement("link");
            prefetchLink.setAttribute("rel", "prefetch");
            prefetchLink.setAttribute("href", url);
            elem.appendChild(prefetchLink);
            elem.prefetchLink = prefetchLink;
        }
    }
}

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
    var story_length = stories.length;
    for (var i = 0; i < story_length; ++i) {
        addPreloadToStory(stories[i]);
    }
}

function addPreloadToAnchor(anchor) {
    addPreloadToElement(anchor, anchor.getAttribute("href"));
}

function addPreloadToAnchors(anchors) {
    var anchor_length = anchors.length;
    for (var i = 0; i < anchor_length; ++i) {
        addPreloadToAnchor(anchors[i]);
    }
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
    var entry_length = entries.length;
    for (var i = 0; i < entry_length; ++i) {
        addPreloadToTabEntry(entries[i]);
    }
}

function preloadTabs() {
    var tabs = document.getElementsByClassName("tabs");
    var tab_length = tabs.length;
    for (var i = 0; i < tab_length; ++i) {
        addPreloadToTab(tabs[i]);
    }
}

preloadStories();
preloadNext();
preloadPrevious();
preloadTabs();
