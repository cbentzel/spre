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
