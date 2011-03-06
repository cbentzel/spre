function prefetchTitle(title) {
    var big_div = title.parentElement;
    var href = title.childNodes[1].getAttribute("href");
    addPreloadToElement(big_div, href);
}

function prefetchTopStories() {
    var titles = document.getElementsByClassName("title sel");
    for_each_do(titles, prefetchTitle);
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
    for_each_do(blended_wrappers, prefetchBlendedWrapper);
}

prefetchTopStories();
prefetchBlendedWrappers();
