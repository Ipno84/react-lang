"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var constants_1 = require("../constants");
var TranslationContext_1 = require("../context/TranslationContext");
function useCurrentLanguageSelector() {
    var _a = react_1.useContext(TranslationContext_1.default), state = _a.state, dispatch = _a.dispatch;
    var setLang = react_1.useCallback(function (l) { return dispatch && dispatch({ type: constants_1.SET_LANG, l: l }); }, [dispatch]);
    return { currentLanguage: state.l, setLang: setLang };
}
exports.default = useCurrentLanguageSelector;
