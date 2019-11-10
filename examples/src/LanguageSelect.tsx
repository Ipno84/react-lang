import React from "react";
import useAvailableLanguagesSelector from "./../../src/hooks/useAvailableLanguagesSelector";
import useCurrentLanguageSelector from "./../../src/hooks/useCurrentLanguageSelector";

const LanguageSelect: React.FC = () => {
    const availableLanguages = useAvailableLanguagesSelector();
    const { currentLanguage, setLang } = useCurrentLanguageSelector();
    return (
        <select value={currentLanguage} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLang(e.target.value)}>
            {availableLanguages.map(lang => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelect;
