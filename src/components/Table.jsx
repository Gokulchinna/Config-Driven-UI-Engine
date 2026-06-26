import React from "react";

export default function Table({
  columns,
  filters: configFilters,
  search: configSearch,
  data,
  rawData,
  filters,
  setFilters,
  searchQuery,
  setSearchQuery,
  sortConfig,
  setSortConfig,
}) {
  const handleSort = (columnKey) => {
    setSortConfig((prev) => {
      if (prev && prev.key === columnKey) {
        return {
          key: columnKey,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key: columnKey, direction: "asc" };
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="card table-card">
      <div className="table-controls">
        {/* Search Input */}
        {configSearch && configSearch.enabled && (
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery || ""}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        )}

        {/* Dropdown Filters */}
        {configFilters && configFilters.length > 0 && (
          <div className="filters-container">
            {configFilters.map((filter) => {
              // Extract unique options from rawData
              const options = [
                ...new Set((rawData || []).map((row) => row[filter.key])),
              ].filter(Boolean);

              return (
                <div key={filter.key} className="filter-select-wrapper">
                  <label className="filter-label">{filter.label}</label>
                  <select
                    value={filters[filter.key] || ""}
                    onChange={(e) =>
                      handleFilterChange(filter.key, e.target.value)
                    }
                    className="filter-select"
                  >
                    <option value="">All {filter.label}s</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Table Data */}
      <div className="table-responsive">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="sortable-header"
                >
                  <div className="header-content">
                    <span>{col.label}</span>
                    <span className="sort-icon">
                      {sortConfig?.key === col.key
                        ? sortConfig.direction === "asc"
                          ? " ▲"
                          : " ▼"
                        : " ↕"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={row.id || idx}>
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.key === "placedStatus" ||
                      col.key === "slaStatus" ||
                      col.key === "ticketStatus" ? (
                        <span
                          className={`badge badge-${String(row[col.key])
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          {row[col.key]}
                        </span>
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="no-data">
                  No records match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
