"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var react_1 = require("react");
var defaultState = window.reactLang && window.reactLang.l && window.reactLang.m ? window.reactLang : { l: "en", m: { en: {} } };
function useTranslationReducer(initialState) {
    if (initialState === void 0) { initialState = defaultState; }
    var _a = react_1.useReducer(function (state, action) {
        switch (action.type) {
            case constants_1.SET_LANG:
                return __assign(__assign({}, state), { l: action.l });
            case constants_1.SET_MESSAGES:
                return __assign(__assign({}, state), { m: action.m });
            default:
                return state;
        }
    }, initialState), state = _a[0], dispatch = _a[1];
    return [state, dispatch];
}
exports.default = useTranslationReducer;
