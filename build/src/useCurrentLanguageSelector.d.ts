export default function useCurrentLanguageSelector(): {
    currentLanguage: string;
    setLang: (l: string) => void | undefined;
};
