var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import SecureLS from 'secure-ls';
var developing = process.env.NODE_ENV === 'development';
var defaultOpts = {
    encodingType: developing ? '' : 'aes',
    isCompression: developing ? false : true,
    encryptionSecret: 'aitmed@lucas@23332',
    encryptionNamespace: null,
};
var secureLs = (function () {
    var ls;
    // Keep cache of fetched data so we can improve performance
    var cache = {};
    // Keep record of removed keys for convenience purposes
    var removed = [];
    function _createEncrypter(opts) {
        if (opts === void 0) { opts = {}; }
        try {
            ls = new SecureLS(__assign(__assign({}, defaultOpts), opts));
            return ls;
        }
        catch (error) {
            return ls;
        }
    }
    ls = _createEncrypter();
    return {
        set: function (key, data) {
            try {
                ls.set(key, data);
                cache[key] = data;
                return ls;
            }
            catch (error) {
                throw error;
            }
        },
        get: function (key) {
            // Gets data back from specified key from the localStorage library. If the key is not provided, the library will warn
            var data;
            try {
                data = ls.get(key);
                if (!cache[key]) {
                    cache[key] = data;
                }
            }
            catch (err) {
                console.error(err);
                return null;
            }
            return data || null;
        },
        remove: function (key) {
            // Removes the value of a key from the localStorage.
            ls.remove(key);
            removed.push(key);
            return ls;
        },
        clear: function () {
            // Removes all the keys ever created for that particular domain. Remember localStorage works differently for http and https protocol
            ls.clear();
            return ls;
        },
        getAllKeys: function () {
            // Gets the list of keys that were created using the secure-ls library. Helpful when data needs to be retrieved for all the keys or when keys name are not known(dynamically created keys)
            // Return type: string[]
            return ls.getAllKeys();
        },
        removeAll: function () {
            // Removes all the keys that were created by the secure-ls library, even the meta key
            ls.removeAll();
            return ls;
        },
        changeEncodingType: function (encodingType) {
            if (!encodingType)
                return;
            ls = _createEncrypter({ encodingType: encodingType });
            return ls;
        },
        createNewEncrypter: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _createEncrypter.apply(void 0, args);
        },
    };
})();
export default secureLs;
//# sourceMappingURL=secureLs.js.map