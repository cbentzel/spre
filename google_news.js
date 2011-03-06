function prefetchTitle(title) {
    var big_div = title.parentElement;
    var href = title.childNodes[1].getAttribute("href");
    addPreloadToElement(big_div, href);
}

function prefetchTopStories() {
    var titles = document.getElementsByClassName("title sel");
    var title_length = titles.length;
    for (var i = 0; i < title_length; ++i) {
        prefetchTitle(titles[i]);
    }
}

function prefetchBlendedWrapper(blended_wrapper) {
    var titles = blended_wrapper.getElementsByClassName("title");
    if (titles.length != 1) {
        return;
    }
    var href = titles[0].childNodes[1].getAttribute("href");
    addPreloadToElement(blended_wrapper, href);
}

function prefetchBlendedWrappers() {
    var blended_wrappers = document.getElementsByClassName("blended-wrapper");
    var blended_wrappers_length = blended_wrappers.length;
    for (var i = 0; i < blended_wrappers_length; ++i) {
        prefetchBlendedWrapper(blended_wrappers[i]);
    }
}

prefetchTopStories();
prefetchBlendedWrappers();
