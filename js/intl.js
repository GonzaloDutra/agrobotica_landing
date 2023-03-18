window.addEventListener("load", async (event) => {
    const lang = window.location.search.includes("lang=es") ? "es" : "en";
    const translations = await (await fetch(`./languages/${lang}.json`)).json();


    const elements = document.querySelectorAll("[data-intl]");

    for (const element of elements) {
        const key = element.dataset.intl;
        if (translations.hasOwnProperty(key)) {
            const translation = translations[key];
            element.innerText = translation;
        }
    }
});
