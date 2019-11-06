import TranslationContext from "../context/TranslationContext";
import { useContext } from "react";

export default function useAvailableLanguagesSelector() {
    const { state } = useContext(TranslationContext);
    return Object.keys(state.m);
}
