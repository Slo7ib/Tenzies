import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`absolute top-4 bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:scale-110 transition duration-300 ease-in-out shadow-lg z-10 ${
        language === "ar" ? "left-4" : "right-4"
      }`}
      aria-label="Switch language"
    >
      {language === "en" ? "العربية" : "English"}
    </button>
  );
}

