function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial", maxWidth: "500px", margin: "0 auto" }}>
      <h1 style={{ color: "#1a1a2e" }}>🔒 SecureSphere</h1>
      <p style={{ color: "#555" }}>Share files securely.</p>

      {/* File Upload Box */}
      <div style={{
        border: "2px dashed #4a90e2",
        borderRadius: "10px",
        padding: "40px",
        textAlign: "center",
        marginTop: "30px",
        backgroundColor: "#f0f4ff"
      }}>
        <p>📂 Drag & drop your file here</p>
        <input type="file" style={{ marginTop: "10px" }} />
      </div>

      {/* Expiry Input */}
      <div style={{ marginTop: "20px" }}>
        <label>⏰ Expiry Time (hours)</label><br />
        <input
          type="number"
          placeholder="e.g. 24"
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Download Limit */}
      <div style={{ marginTop: "20px" }}>
        <label>⬇️ Max Download Limit</label><br />
        <input
          type="number"
          placeholder="e.g. 3"
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Button */}
      <button style={{
        marginTop: "30px",
        width: "100%",
        padding: "14px",
        backgroundColor: "#4a90e2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        🔗 Generate Secure Link
      </button>
    </div>
  );
}

export default App;