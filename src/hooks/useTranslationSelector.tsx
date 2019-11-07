import { GenericObject } from "interfaces";
import TranslationContext from "../context/TranslationContext";
import get from "../helpers/get";
import { useContext } from "react";

interface Args {
    s: string;
    l?: string;
    vs?: GenericObject;
}

export default function useTranslationSelector({ s, l, vs }: Args) {
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
        return translation;
    } catch (error) {
        console.warn(error.message);
        return null;
    }
}
