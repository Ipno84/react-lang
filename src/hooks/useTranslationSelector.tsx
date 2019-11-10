import React from "react";
import TranslationContext from "../context/TranslationContext";
import get from "../helpers/get";
import { useContext } from "react";

interface Args {
    /**
     * Property that indicates a dotted string from the messages <object data="" type="" className=""></object>
     * So, if you want to get property value bar from the object below
     * {
     *      foo: {
     *          bar: 'fooBar'
     *      }
     * }
     * you need to pass 'foo.bar'
     */
    s: string;
    /**
     * Indicates the language string (i.e. 'en').
     * You can pass this param if you want to get a translation from a language different from the current one
     */
    l?: string;
    /**
     * A localized string can contains variables.
     * If you want to replace one of them with a specific value you need to pass that value in this param
     */
    vs?: GenericObject;
    fs?: string;
}
/**
 * A hook for getting the translation for a specific message
 *
 * @export
 * @param {Args} { s, l, vs, fs }
 * @returns {string|null}
 */
export default function useTranslationSelector({ s, l, vs, fs }: Args) {
    const { state } = useContext(TranslationContext);
    if (!l) {
        l = state.l;
    }
    let m = {};
    if (state.m[l]) {
        m = state.m[l];
    } else if (Object.keys(state.m).length) {
        m = state.m[Object.keys(state.m)[0]];
    }
    try {
        let translation = get(m, s);
        if (typeof translation !== "string" || translation === "") {
            throw new Error(`Translation for ${s} not well formatted. You are trying to render ${JSON.stringify(translation)}`);
        }
        const parentesisRegex = /({[^\}]+})/;
        let translationSplitted = translation.split(parentesisRegex).filter(e => e);
        if (typeof vs === "object" && translationSplitted.length > 1) {
            translationSplitted.forEach((v, i) => {
                const index = v.replace(/[{()}]/g, "");
                if (v.match(parentesisRegex) && index) {
                    translationSplitted[i] = vs[index] ? vs[index] : v;
                }
            });
            translation = translationSplitted.join("");
        }
        if (!translation && fs) {
            return <>{fs}</>;
        }
        return <>{translation}</>;
    } catch (error) {
        console.warn(error.message);
        if (fs) {
            return <>{fs}</>;
        }
        return null;
    }
}
