import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de');
  };

  return (
    <header className="flex justify-between items-center pb-6 border-b border-slate-200 mb-8">
      <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
        {t('title')}
      </h1>
      <button 
        onClick={toggleLanguage}
        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors text-sm"
      >
        {i18n.language === 'de' ? '🇩🇪 DE' : '🇺🇸 EN'}
      </button>
    </header>
  );
};

export default Header