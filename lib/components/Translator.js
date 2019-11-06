"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useTranslationSelector_1 = require("../hooks/useTranslationSelector");
var Translator = function (_a) {
    var s = _a.s, l = _a.l, vs = _a.vs;
    var translation = useTranslationSelector_1.default({ s: s, l: l, vs: vs });
    return react_1.useMemo(function () {
        return react_1.default.createElement(react_1.default.Fragment, null, translation);
    }, [translation]);
};
exports.default = react_1.memo(Translator);
