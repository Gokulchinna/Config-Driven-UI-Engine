import { useState, useEffect } from "react";
import { registry } from "./engine/Registry";
import { Renderer } from "./engine/Renderer";
import { runPipeline } from "./engine/pipeline";
import Table from "./components/Table";
import StatsCard from "./components/StatsCard";

// Import schemas and data
import studentSchema from "./schemas/student.json";
import studentData from "./schemas/studentData.json";
import governmentSchema from "./schemas/government.json";
import governmentData from "./schemas/governmentData.json";

// Register components dynamically to keep the engine decoupled
registry.register("table", Table);
registry.register("stats-card", StatsCard);

function App() {
  const [activeDemo, setActiveDemo] = useState("student");
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState(null);

  // Determine active schema and raw dataset
  const activeSchema =
    activeDemo === "student" ? studentSchema : governmentSchema;
  const rawData = activeDemo === "student" ? studentData : governmentData;

  // Reset controls when toggling dashboards
  useEffect(() => {
    setFilters({});
    setSearchQuery("");
    setSortConfig(null);
  }, [activeDemo]);

  // Extract search configuration keys from the schema table layout
  const tableWidget = activeSchema.layout.find((w) => w.type === "table");
  const searchKeys = tableWidget?.props?.search?.keys || [];

  // Run the data pipeline: Filter -> Search -> Sort
  const processedData = runPipeline(rawData, {
    filters,
    searchQuery,
    searchKeys,
    sortConfig,
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="branding">
          <h1>Config-Driven UI Engine</h1>
          <p className="subtitle">
            Dynamic layout compiler powered by JSON schemas
          </p>
        </div>
        <div className="demo-switchers">
          <button
            className={`btn-switcher ${activeDemo === "student" ? "active" : ""}`}
            onClick={() => setActiveDemo("student")}
          >
            🎓 Student Analytics
          </button>
          <button
            className={`btn-switcher ${activeDemo === "government" ? "active" : ""}`}
            onClick={() => setActiveDemo("government")}
          >
            🏛️ Government Queue
          </button>
        </div>
      </header>

      <main className="app-main">
        <div className="dashboard-title-card">
          <h2>{activeSchema.title}</h2>
        </div>

        {/* Dynamic UI Rendering Engine */}
        <Renderer
          schema={activeSchema}
          data={processedData}
          rawData={rawData}
          filters={filters}
          setFilters={setFilters}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortConfig={sortConfig}
          setSortConfig={setSortConfig}
        />
      </main>
    </div>
  );
}

export default App;
