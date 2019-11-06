export default function get(obj: { [s: string]: any }, path: string, defaultValue: string = "") {
    const result = String.prototype.split
        .call(path, /[,[\].]+?/)
        .filter(Boolean)
        .reduce((res: any, key: any) => (res !== null && res !== undefined ? res[key] : res), obj);
    return result === undefined || result === obj ? defaultValue : result;
}
