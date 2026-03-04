import { useState, useEffect, useMemo } from "react";
import type { Structure, DashboardStats } from "../types";
import { fetchStructures } from "../service/api";

export const useStructures = (filter: string) => {
  const [data, setData] = useState<Structure[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchStructures();
        setData(response);
      } catch (err) {
        setError(`Failed to load infrastructure data. ${err}`);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((s) =>
      s.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [data, filter]);

  const stats: DashboardStats = useMemo(() => {
    const sum = filteredData.reduce((acc, curr) => acc + curr.grade, 0);
    return {
      count: filteredData.length,
      averageGrade: filteredData.length > 0 ? sum / filteredData.length : 0,
    };
  }, [filteredData]);

  return { filteredData, loading, error, stats };
};
