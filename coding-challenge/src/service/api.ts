import type { Structure } from "../types";

const MockData: Structure[] = [
        { id: 1, name: 'Rheinbrücke A1', area: 12500, grade: 2.1, status: 'active' },
        { id: 2, name: 'Tunnel Westportal', area: 4200, grade: 3.4, status: 'warning' },
        { id: 3, name: 'Talbrücke Nord', area: 8900, grade: 1.8, status: 'active' },
        { id: 4, name: 'Überführung K40', area: 1100, grade: 4.0, status: 'critical' },
        { id: 5, name: 'Mainsteg Ost', area: 2500, grade: 2.5, status: 'active' },
        { id: 7, name: 'Talbrücke', area: 0, grade: 0, status: 'inactive' },
      ]

      
export const fetchStructures = async (): Promise<Structure[]> => {
  // Simulating a network request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockData);
    }, 800);
  });
};