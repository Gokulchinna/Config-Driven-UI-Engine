export const tableConfig = {
    columns: [
        { key: "name", label: "Name" },
        { key: "age", label: "Age" },
        { key: "role", label: "Role" },
        { key: "location", label: "Location" },
    ],
    filters: [
    { key: "role", label: "Role", type: "select" },
    { key: "location", label: "Location", type: "select" },
    ],
    search: {
    enabled: true,
    keys: ["name", "role", "location"],
    },
};
