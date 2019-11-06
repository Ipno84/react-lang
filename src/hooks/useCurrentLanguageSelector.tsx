import { useCallback, useContext } from "react";

import { SET_LANG } from "../constants";
import TranslationContext from "../context/TranslationContext";

export default function useCurrentLanguageSelector() {
    const { state, dispatch } = useContext(TranslationContext);
    const setLang = useCallback((l: string) => dispatch && dispatch({ type: SET_LANG, l }), [dispatch]);
    return { currentLanguage: state.l, setLang };
}
