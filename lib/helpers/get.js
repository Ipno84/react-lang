"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function get(obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = ""; }
    var result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce(function (res, key) { return (res !== null && res !== undefined ? res[key] : res); }, obj);
    return result === undefined || result === obj ? defaultValue : result;
}
exports.default = get;
