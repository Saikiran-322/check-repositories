import React from "react";

const styles = {
  container: {
    height: "50vh",
    overflow: "auto", // ✅ handles both X and Y
    WebkitOverflowScrolling: "touch",
    border: "2px solid green",
  },
  content: {
    width: "1200px", // forces horizontal scroll
    padding: "10px",
  },
  row: {
    whiteSpace: "nowrap",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
};

export const Working = function () {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} style={styles.row}>
            Row {i + 1} — This is a very long content to force horizontal scroll →
            → → → → → → → → → →
          </div>
        ))}
      </div>
    </div>
  );
}


const styles1 = {
  outer: {
    height: "50vh",
    overflow: "auto", // ❌ scroll 1 (X + Y)
    border: "2px solid red",
  },
  inner: {
    height: "80vh",
    width: "1200px", // forces horizontal scroll
    overflow: "auto", // ❌ scroll 2 (X + Y)
    margin: "20px",
    background: "#f9f9f9",
  },
  row: {
    whiteSpace: "nowrap",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
};

export const Broken = function () {
  return (
    <div style={styles1.outer}>
      <div style={styles1.inner}>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} style={styles1.row}>
            Row {i + 1} — This is a very long content to force horizontal scroll →
            → → → → → → → → → →
          </div>
        ))}
      </div>
    </div>
  );
}