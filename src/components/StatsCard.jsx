import React from "react";

export default function StatsCard({
  title,
  metric,
  targetField,
  targetValue,
  data,
}) {
  const computeValue = () => {
    if (!data || data.length === 0) return 0;

    if (metric === "count") {
      if (targetField && targetValue !== undefined) {
        return data.filter(
          (row) => String(row[targetField]) === String(targetValue)
        ).length;
      }
      return data.length;
    }

    if (metric === "average") {
      if (!targetField) return 0;
      const sum = data.reduce(
        (acc, row) => acc + (Number(row[targetField]) || 0),
        0
      );
      return (sum / data.length).toFixed(2);
    }

    if (metric === "sum") {
      if (!targetField) return 0;
      return data.reduce((acc, row) => acc + (Number(row[targetField]) || 0), 0);
    }

    return 0;
  };

  return (
    <div className="card stats-card">
      <div className="stats-info">
        <h4 className="stats-title">{title}</h4>
        <div className="stats-value">{computeValue()}</div>
      </div>
      <div className="stats-icon">📈</div>
    </div>
  );
}
