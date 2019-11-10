"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var constants_1 = require("../constants");
var TranslationContext_1 = require("../context/TranslationContext");
function useCurrentMessagesSelector() {
    var _a = react_1.useContext(TranslationContext_1.default), state = _a.state, dispatch = _a.dispatch;
    var setMessages = react_1.useCallback(function (m) { return dispatch && dispatch({ type: constants_1.SET_MESSAGES, m: m }); }, [dispatch]);
    return { currentMessages: state.m, setMessages: setMessages };
}
exports.default = useCurrentMessagesSelector;
