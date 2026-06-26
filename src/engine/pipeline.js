export function filterData(data, filters) {
  if (!filters || Object.keys(filters).length === 0) return data;
  return data.filter((row) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true; // Empty filter selection matches everything
      return String(row[key]).toLowerCase() === String(value).toLowerCase();
    });
  });
}

export function searchData(data, searchQuery, searchKeys) {
  if (!searchQuery || !searchKeys || searchKeys.length === 0) return data;
  const query = searchQuery.toLowerCase();
  return data.filter((row) => {
    return searchKeys.some((key) => {
      const val = row[key];
      return (
        val !== undefined &&
        val !== null &&
        String(val).toLowerCase().includes(query)
      );
    });
  });
}

export function sortData(data, sortConfig) {
  if (!sortConfig || !sortConfig.key) return data;
  const { key, direction } = sortConfig;
  return [...data].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];

    // Handle numeric or string comparison
    if (typeof aVal === "number" && typeof bVal === "number") {
      return direction === "asc" ? aVal - bVal : bVal - aVal;
    }

    const aStr = String(aVal).toLowerCase();
    const bStr = String(bVal).toLowerCase();

    if (aStr < bStr) return direction === "asc" ? -1 : 1;
    if (aStr > bStr) return direction === "asc" ? 1 : -1;
    return 0;
  });
}

export function runPipeline(
  data,
  { filters, searchQuery, searchKeys, sortConfig }
) {
  let result = data;
  result = filterData(result, filters);
  result = searchData(result, searchQuery, searchKeys);
  result = sortData(result, sortConfig);
  return result;
}
