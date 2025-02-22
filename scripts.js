function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-" + lang + "]");

    elements.forEach((element) => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.innerHTML = text;
        }
    });
}

// Define o idioma padrão como inglês ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en');
});