const languageToggle = document.querySelector("[data-language-toggle]");

const setLanguage = (language) => {
  const isChinese = language === "zh-CN";
  document.documentElement.lang = isChinese ? "zh-CN" : "en";
  languageToggle.textContent = isChinese ? "English" : "中文";
  languageToggle.setAttribute(
    "aria-label",
    isChinese ? "Switch to English" : "切换至中文",
  );
};

setLanguage("en");

languageToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "zh-CN" ? "en" : "zh-CN");
});
