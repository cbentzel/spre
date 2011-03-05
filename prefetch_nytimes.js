function addPreloadHook(story) {
    var anchor = story.getElementsByTagName("a")[0];
    if (!anchor) {
        return;
    }
    var dest_url = anchor.getAttribute("href");
    if (!dest_url) {
        return;
    }
    story.onmouseover = function() {
        if (!story.prefetchLink) {
            var prefetchLink = document.createElement("link");
            prefetchLink.setAttribute("rel", "prefetch");
            prefetchLink.setAttribute("href", dest_url);
            story.appendChild(prefetchLink);
            story.prefetchLink = prefetchLink;
        }
    }
}

var stories = document.getElementsByClassName("story");
var story_length = stories.length;
for (var i = 0; i < story_length; ++i) {
    addPreloadHook(stories[i]);
}
