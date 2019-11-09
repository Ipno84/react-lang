import { PREFIX, SET_LANG, SET_MESSAGES } from "./constants";

import TranslationContext from "./context/TranslationContext";
import TranslationProvider from "./providers/TranslationProvider";
import Translator from "./components/Translator";
import get from "./helpers/get";
import useAvailableLanguagesSelector from "./hooks/useAvailableLanguagesSelector";
import useCurrentLanguageSelector from "./hooks/useCurrentLanguageSelector";
import useTranslationReducer from "./hooks/useTranslationReducer";
import useTranslationSelector from "./hooks/useTranslationSelector";

export {
    PREFIX,
    SET_LANG,
    SET_MESSAGES,
    TranslationContext,
    TranslationProvider,
    get,
    useAvailableLanguagesSelector,
    useCurrentLanguageSelector,
    useTranslationReducer,
    useTranslationSelector
};

export default Translator;
