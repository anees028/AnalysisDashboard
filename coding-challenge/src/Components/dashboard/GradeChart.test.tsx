import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { GradeChart } from "./GradeChart";
import type { Structure } from "../../types";

// 🛠️ THE FIX: Force ResponsiveContainer to have a physical size in JSDOM
vi.mock("recharts", async () => {
  const OriginalRecharts =
    await vi.importActual<typeof import("recharts")>("recharts");
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: 800, height: 400 }}>{children}</div>
    ),
  };
});

describe("GradeChart Component", () => {
  const mockData: Structure[] = [
    {
      id: 1,
      name: "Rheinbrücke A1",
      area: 12500,
      grade: 2.1,
      status: "active",
    },
    {
      id: 2,
      name: "Tunnel Westportal",
      area: 4200,
      grade: 3.4,
      status: "warning",
    },
    {
      id: 3,
      name: "Überführung K40",
      area: 1100,
      grade: 4.0,
      status: "critical",
    },
  ];

  it("renders the chart container successfully", () => {
    const { container } = render(<GradeChart data={mockData} />);
    // Since we mocked ResponsiveContainer to a standard div, we check for our chart wrapper
    expect(container.querySelector(".h-full")).toBeInTheDocument();
  });

  it("renders the custom legend with all status types", () => {
    render(<GradeChart data={mockData} />);

    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("Critical")).toBeInTheDocument();
  });

  it("handles empty data arrays gracefully", () => {
    const { container } = render(<GradeChart data={[]} />);

    expect(container.querySelector(".h-full")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });
});
