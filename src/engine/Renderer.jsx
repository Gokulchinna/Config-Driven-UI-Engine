import React from "react";
import { registry } from "./Registry";

export function Renderer({
  schema,
  data,
  rawData,
  filters,
  setFilters,
  searchQuery,
  setSearchQuery,
  sortConfig,
  setSortConfig,
}) {
  if (!schema || !schema.layout) {
    return <div className="engine-error">No valid layout schema loaded.</div>;
  }

  return (
    <div className="engine-layout">
      {schema.layout.map((widget) => {
        const Component = registry.get(widget.type);
        if (!Component) {
          return (
            <div key={widget.id} className="engine-widget-error">
              Widget type <strong>{widget.type}</strong> is not registered.
            </div>
          );
        }

        return (
          <div key={widget.id} className={`widget-wrapper widget-${widget.type}`}>
            <Component
              {...widget.props}
              data={data}
              rawData={rawData}
              filters={filters}
              setFilters={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortConfig={sortConfig}
              setSortConfig={setSortConfig}
              schema={schema}
            />
          </div>
        );
      })}
    </div>
  );
}
