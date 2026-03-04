import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StructureTable } from "./StructureTable";
import type { Structure } from "../../types";

describe("StructureTable Component", () => {
  const mockData: Structure[] = [
    {
      id: 1,
      name: "Rheinbrücke A1",
      area: 12500,
      grade: 2.1,
      status: "active",
    },
    {
      id: 4,
      name: "Überführung K40",
      area: 1100,
      grade: 4.0,
      status: "critical",
    },
  ];

  it("renders the correct number of rows", () => {
    render(<StructureTable data={mockData} />);

    // Check if the bridge names appear in the document
    expect(screen.getByText("Rheinbrücke A1")).toBeInTheDocument();
    expect(screen.getByText("Überführung K40")).toBeInTheDocument();
  });

  it("renders the correct status badges", () => {
    render(<StructureTable data={mockData} />);

    // Check if the status labels are rendered
    expect(screen.getByText("active")).toBeInTheDocument();
    expect(screen.getByText("critical")).toBeInTheDocument();
  });

  it("displays a fallback message when data is empty", () => {
    render(<StructureTable data={[]} />);

    expect(screen.getByText("No data found.")).toBeInTheDocument();
  });
});
