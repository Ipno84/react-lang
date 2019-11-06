import LanguageSelect from "./LanguageSelect";
import React from "react";
import TranslationContext from "react-lang/TranslationContext";
import Translator from "react-lang/Translator";
import useTranslationReducer from "react-lang/useTranslationReducer";

const App: React.FC = () => {
    const [state, dispatch] = useTranslationReducer();
    console.log("test");
    return (
        <TranslationContext.Provider value={{ state, dispatch }}>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a plain translation</h3>
                <Translator s="Translations.Plain" />
            </section>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a plain translation with forced language</h3>
                <Translator s="Translations.Plain" l="es" />
            </section>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a translation with variables</h3>
                <Translator s="Translations.WithVariables" vs={{ name: "Porco dio" }} />
            </section>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a translation with variables and forced language</h3>
                <Translator s="Translations.WithVariables" l="es" vs={{ name: "Puerco dios" }} />
            </section>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a translation with variables array</h3>
                <Translator s="Translations.WithVariablesArray" vs={["Porco dio"]} />
            </section>
            <section style={{ marginTop: "4rem" }}>
                <h3>Here's a translation with variables array and forced language</h3>
                <Translator s="Translations.WithVariablesArray" l="es" vs={["Puerco dios"]} />
            </section>
            <LanguageSelect />
        </TranslationContext.Provider>
    );
};

export default App;