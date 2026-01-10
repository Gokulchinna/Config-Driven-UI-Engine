export function filterData(data, filters, searchQuery, searchKeys) {
    return data.filter((row) => {
        // structured filters (selects)
        const structuredMatch = Object.entries(filters).every(
            ([key, value]) => {
                if (!value) return true;
                return row[key] === value;
            }
        );

        if (!structuredMatch) return false;

        // text search
        if (!searchQuery) return true;

        const query = searchQuery.toLowerCase();

        return searchKeys.some((key) =>
            String(row[key]).toLowerCase().includes(query)
        );
    });
}
