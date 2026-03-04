import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useStructures } from '../hooks/useStructures';
import { GradeChart } from '../Components/dashboard/GradeChart';
import {StructureTable} from '../Components/dashboard/StructureTable';
import Footer from '../Components/Footer/Footer';

const DashboardPage = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState('');
  const { filteredData, loading, error, stats } = useStructures(filter);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  if (loading) return <div className="p-20 text-center animate-pulse text-slate-500 font-medium">{t('loading')}</div>;
  if (error) return <div className="p-20 text-center animate-pulse text-slate-500 font-medium">{t('error')}</div>;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title & Language Switch */}
        <header className="flex justify-between items-end border-b-2 border-slate-900 pb-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{t('title')}</h1>
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-sm font-semibold rounded border border-slate-300 transition-colors"
          >
            {i18n.language === 'en' ? '🇩🇪 DE' : '🇺🇸 EN'}
          </button>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <input 
            type="text"
            className="w-full p-4 border border-slate-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder={t('searchPlaceholder')} 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        {/* Two-Column Layout (Matching your original design) */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDEBAR: KPIs & Chart */}
          <div className="lg:w-1/3 bg-slate-50 p-6 rounded-lg border border-slate-200 flex flex-col gap-8 h-fit">
            
            {/* KPIs */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('kpis.title', 'KPIs')}</h3>
              <div className="space-y-2 text-slate-700">
                <p className="flex justify-between font-medium">
                  <span>{t('kpis.count')}:</span> 
                  <span>{stats.count}</span>
                </p>
                <p className="flex justify-between font-medium">
                  <span>{t('kpis.avgGrade')}:</span> 
                  <span>{stats.averageGrade.toFixed(2)}</span>
                </p>
              </div>
            </div>

            <hr className="border-slate-300" />

            {/* Professional Recharts Visualization */}
            <div>
              <h4 className="text-lg font-bold mb-6">{t('visualization')}</h4>
              <div className="h-[250px] w-full">
                <GradeChart data={filteredData} />
              </div>
            </div>
          </div>

          {/* RIGHT MAIN: Table */}
          <div className="lg:w-2/3">
            <StructureTable data={filteredData} />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage