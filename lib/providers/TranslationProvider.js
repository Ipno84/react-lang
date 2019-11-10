"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var TranslationContext_1 = require("./../context/TranslationContext");
var useTranslationReducer_1 = require("./../hooks/useTranslationReducer");
var useTranslationReducer_2 = require("./../hooks/useTranslationReducer");
var TranslationProvider = function (_a) {
    var children = _a.children, initialState = _a.initialState;
    var _b = useTranslationReducer_2.default(initialState ? initialState : useTranslationReducer_1.defaultState), state = _b[0], dispatch = _b[1];
    return react_1.default.createElement(TranslationContext_1.default.Provider, { value: { state: state, dispatch: dispatch } }, children);
};
exports.default = TranslationProvider;
