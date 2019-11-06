"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TranslationContext_1 = require("../context/TranslationContext");
var react_1 = require("react");
function useAvailableLanguagesSelector() {
    var state = react_1.useContext(TranslationContext_1.default).state;
    return Object.keys(state.m);
}
exports.default = useAvailableLanguagesSelector;
