export function sortData(data, sortConfig) {
    if (!sortConfig) return data;

    const { key, direction } = sortConfig;

    return [...data].sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue < bValue) return direction === "asc" ? -1 : 1;
        if (aValue > bValue) return direction === "asc" ? 1 : -1;
        return 0;
    });
}

