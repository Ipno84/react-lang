import { GenericObject } from "interfaces";
/**
 * Function for getting object property value from an object using a dotted string
 * It has been developed to avoid lodash/get dependency
 *
 * @export
 * @param {GenericObject} obj
 * @param {string} path
 * @param {string} [defaultValue=""]
 * @returns {string}
 */
export default function get(obj: GenericObject, path: string, defaultValue: string = "") {
    const result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res: any, key: any) => (res !== null && res !== undefined ? res[key] : res), obj);
    return result === undefined || result === obj ? defaultValue : result;
}
