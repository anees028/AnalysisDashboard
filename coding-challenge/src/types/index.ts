export type StructureStatus = "active" | "warning" | "critical" | "inactive";

export interface Structure {
  id: number;
  name: string;
  area: number;
  grade: number;
  status: StructureStatus;
}

export interface DashboardStats {
  count: number;
  averageGrade: number;
}
