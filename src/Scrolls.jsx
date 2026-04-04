import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";

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


const styles2 = {
  page: {
    height: "200vh",
  },
  background: {
    padding: "20px",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },
  modal: {
    height: "80vh",
    margin: "40px",
    background: "white",
    overflow: "hidden",
  },
  modalBody: {
    height: "100%",
    overflow: "auto", // ❌ still problematic
    WebkitOverflowScrolling: "touch",
  },
  content: {
    width: "1200px", // 👉 forces horizontal scroll
    padding: "10px",
  },
  row: {
    whiteSpace: "nowrap",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
};

export const BrokenFixed = function () {
  const navigate = useNavigate();

  return (
    <div style={styles2.page}>
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{ position: "fixed", top: 10, left: 10, zIndex: 1000 }}
      >
        ← Back
      </button>

      {/* Background content */}
      <div style={styles2.background}>
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i}>Background Content {i + 1}</p>
        ))}
      </div>

      {/* Fixed Modal */}
      <div style={styles2.overlay}>
        <div style={styles2.modal}>
          <div style={styles2.modalBody}>
            <div style={styles2.content}>
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} style={styles2.row}>
                  Row {i + 1} → → → → → → → → → → →
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const styles3 = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
  },
  modal: {
    height: "80vh",
    margin: "40px",
    background: "white",
    display: "flex",
    flexDirection: "column",
  },
  modalBody: {
    flex: 1,
    overflow: "auto", // ✅ single scroll owner
    WebkitOverflowScrolling: "touch",
    overscrollBehavior: "contain", // ✅ prevents scroll chaining
    padding: "20px",
  },
  content: {
    width: "1200px", // 👉 horizontal scroll
  },
  row: {
    whiteSpace: "nowrap",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
};

export const FixedCorrect = function () {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div style={styles3.overlay}>
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{ position: "fixed", top: 10, left: 10, zIndex: 1000 }}
      >
        ← Back
      </button>

      <div style={styles3.modal}>
        <div style={styles3.modalBody}>
          <div style={styles3.content}>
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} style={styles3.row}>
                Row {i + 1} → → → → → → → → → → →
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
