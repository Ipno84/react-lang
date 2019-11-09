import { useCallback, useContext } from "react";

import { SET_LANG } from "../constants";
import TranslationContext from "../context/TranslationContext";

/**
 * @typedef {Object} CurrentLanguageContext
 * @property {string} currentLanguage - current language
 * @property {Function} setLang - a function to set the current language
 */

/**
 * A hook used to get the currently used language.
 * It returns also a method to set current language.
 *
 * @export
 * @returns {CurrentLanguageContext}
 */
export default function useCurrentLanguageSelector() {
    const { state, dispatch } = useContext(TranslationContext);
    const setLang = useCallback((l: string) => dispatch && dispatch({ type: SET_LANG, l }), [dispatch]);
    return { currentLanguage: state.l, setLang };
}
