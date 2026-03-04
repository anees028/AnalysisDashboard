import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import type { Structure } from "../../types";

export const GradeChart = ({ data }: { data: Structure[] }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
        >
          <XAxis type="number" domain={[0, 4]} hide />
          <YAxis
            dataKey="name"
            type="category"
            width={100}
            tick={{ fontSize: 11, fill: "#334155" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{ borderRadius: "4px", border: "1px solid #cbd5e1" }}
          />
          <Bar dataKey="grade" radius={[0, 4, 4, 0]} barSize={12}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.status == "active"
                    ? "#22c55e"
                    : entry.status == "warning"
                      ? "#f97316"
                      : "#ef4444"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {/* 🏷️ The New Legend UI */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-4 border-t border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#22c55e] shadow-sm"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Active
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#f97316] shadow-sm"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Warning
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444] shadow-sm"></span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            Critical
          </span>
        </div>
      </div>
    </div>
  );
};
