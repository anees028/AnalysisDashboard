import type { Structure } from '../../types';
import { useTranslation } from 'react-i18next';

export const StructureTable = ({ data }: { data: Structure[] }) => {
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto border border-slate-200 rounded">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-4 font-bold text-sm">{t('table.id')}</th>
            <th className="p-4 font-bold text-sm">{t('table.building')}</th>
            <th className="p-4 font-bold text-sm text-right">{t('table.area')}</th>
            <th className="p-4 font-bold text-sm text-right">{t('table.grade')}</th>
            <th className="p-4 font-bold text-sm">{t('table.status')}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {data.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50">
              <td className="p-4 text-sm text-slate-600">{s.id}</td>
              <td className="p-4 text-sm font-medium text-slate-900">{s.name}</td>
              <td className="p-4 text-sm text-right tabular-nums">{s.area.toLocaleString()}</td>
              <td className="p-4 text-sm text-right font-medium">{s.grade.toFixed(1)}</td>
              <td className="p-4">
                <span className={`font-bold text-sm uppercase ${
                  s.status === 'critical' ? 'text-red-600' : 'text-slate-900'
                }`}>
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="p-8 text-center text-slate-500">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};