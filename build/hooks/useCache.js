// Hook used to interact with many refs or values in one interface
import React from 'react';
var useCache = function (initialCache) {
    if (initialCache === void 0) { initialCache = {}; }
    var cacheRef = React.useRef(initialCache);
    var cache = cacheRef.current;
    function cacheValue(key, value) {
        cache[key] = value;
    }
    // Utility to cache react elements on mount
    function onMountRef(key) {
        return function (e) {
            if (key) {
                // cacheValue(key, e)
                cache[key] = e;
            }
            else if (e.target && e.target.name) {
                // cacheValue(e.target.name, e)
                cache[e.target.name] = e;
            }
        };
    }
    return {
        cache: cache,
        cacheValue: cacheValue,
        onMountRef: onMountRef,
    };
};
export default useCache;
//# sourceMappingURL=useCache.js.map