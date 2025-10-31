import { useState, useEffect } from "react";

export default function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export const downloadCSV = (arrayOfObjects, filename = "export.csv") => {
  if (!arrayOfObjects || arrayOfObjects.length === 0) {
    alert("No data to export");
    return;
  }
  const header = Object.keys(arrayOfObjects[0]).join(",");
  const rows = arrayOfObjects.map((r) =>
    Object.values(r)
      .map((val) => {
        if (val === null || val === undefined) return "";
        if (typeof val === "object") return `"${JSON.stringify(val).replace(/"/g, '""')}"`;
        return `"${String(val).replace(/"/g, '""')}"`;
      })
      .join(",")
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


