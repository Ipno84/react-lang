import LanguageSelect from "./LanguageSelect";
import React from "react";
import TranslationProvider from "./../../src/providers/TranslationProvider";
import Translator from "./../../src/components/Translator";

const App: React.FC = () => {
    return (
        <TranslationProvider>
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
        </TranslationProvider>
    );
};

export default App;
