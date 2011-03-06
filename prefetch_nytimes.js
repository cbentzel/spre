function addPreloadToElement(elem, url) {
    var removePrefetchLink = function() {
        if (elem.prefetchLink) {
            elem.removeChild(elem.prefetchLink);
            elem.prefetchLink = undefined;
        }
    }
    var createPrefetchLink = function() {
        removePrefetchLink();
        var prefetchLink = document.createElement("link");
        prefetchLink.setAttribute("rel", "prefetch");
        prefetchLink.setAttribute("href", url);
        elem.appendChild(prefetchLink);
        elem.prefetchLink = prefetchLink;
    }
    var hover_delay_milliseconds = 300;
    var jquery_obj = $(elem);
    jquery_obj.mouseenter(function() {
        elem.delayed_prefetch = setTimeout(function() {
            elem.delayed_prefetch = undefined;
            createPrefetchLink();
        }, hover_delay_milliseconds);        
    });
    jquery_obj.mouseleave(function() {
        if (elem.delayed_prefetch) {
            clearTimeout(elem.delayed_prefetch);
            elem.delayed_prefetch = undefined;
        }
        removePrefetchLink();
    });
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
