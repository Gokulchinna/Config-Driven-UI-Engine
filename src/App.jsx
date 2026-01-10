import { useState } from "react";
import { data } from "./data";
import { tableConfig } from "./tableConfig";
import { sortData } from "./utils/sortData";
import { filterData } from "./utils/filterData";


function App() {
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});


  // const sortedData = sortData(data, sortConfig);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData = filterData(
    data,
    filters,
    searchQuery,
    tableConfig.search.keys
  );
  const sortedData = sortData(filteredData, sortConfig);



  return (
    <div>
      <h2>Config Driven Dashboard</h2>

      {tableConfig.search.enabled && (
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      )}


      <div>
        {tableConfig.filters.map((filter) => (
          <select
            key={filter.key}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                [filter.key]: e.target.value,
              }))
            }
          >
            <option value="">All {filter.label}</option>

            {[...new Set(data.map((row) => row[filter.key]))].map(
              (value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            )}
          </select>
        ))}
      </div>


      <table border="1">
        <thead>
          <tr>
            {tableConfig.columns.map((col) => (
              <th
                key={col.key}
                onClick={() => {
                  setSortConfig((prev) => {
                    if (prev && prev.key === col.key) {
                      return {
                        key: col.key,
                        direction:
                          prev.direction === "asc" ? "desc" : "asc",
                      };
                    }
                    return { key: col.key, direction: "asc" };
                  });
                }}
              >
                {col.label}
                {sortConfig?.key === col.key &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              {tableConfig.columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
