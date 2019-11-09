import TranslationContext from "../context/TranslationContext";
import { useContext } from "react";
/**
 * A hook that implements a selector from TranslationContext.
 * It is used to get all available languages.
 *
 * @export
 * @returns {string[]}
 */
export default function useAvailableLanguagesSelector() {
    const { state } = useContext(TranslationContext);
    return Object.keys(state.m);
}
