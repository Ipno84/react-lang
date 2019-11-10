"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationContext_1 = require("../context/TranslationContext");
var get_1 = require("../helpers/get");
var react_2 = require("react");
function useTranslationSelector(_a) {
    var s = _a.s, l = _a.l, vs = _a.vs, fs = _a.fs;
    var state = react_2.useContext(TranslationContext_1.default).state;
    if (!l) {
        l = state.l;
    }
    var m = {};
    if (state.m[l]) {
        m = state.m[l];
    }
    else if (Object.keys(state.m).length) {
        m = state.m[Object.keys(state.m)[0]];
    }
    try {
        var translation = get_1.default(m, s);
        if (typeof translation !== "string" || translation === "") {
            throw new Error("Translation for " + s + " not well formatted. You are trying to render " + JSON.stringify(translation));
        }
        var parentesisRegex_1 = /({[^\}]+})/;
        var translationSplitted_1 = translation.split(parentesisRegex_1).filter(function (e) { return e; });
        if (typeof vs === "object" && translationSplitted_1.length > 1) {
            translationSplitted_1.forEach(function (v, i) {
                var index = v.replace(/[{()}]/g, "");
                if (v.match(parentesisRegex_1) && index) {
                    translationSplitted_1[i] = vs[index] ? vs[index] : v;
                }
            });
            translation = translationSplitted_1.join("");
        }
        if (!translation && fs) {
            return react_1.default.createElement(react_1.default.Fragment, null, fs);
        }
        return react_1.default.createElement(react_1.default.Fragment, null, translation);
    }
    catch (error) {
        console.warn(error.message);
        if (fs) {
            return react_1.default.createElement(react_1.default.Fragment, null, fs);
        }
        return null;
    }
}
exports.default = useTranslationSelector;
