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
    // Using mousenter and mouseleave rather than onmouseover
    // so this event is not triggered when child elements of elem
    // are entered or exited.
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

function for_each_do(node_list, fn) {
    var node_list_len = node_list.length;
    for (var i = 0; i < node_list_len; ++i) {
        fn(node_list[i]);
    }
}
