function Dashboard() {

  const files = [
    { name: "project.pdf", opens: 3, device: "Chrome • Windows", alert: false },
    { name: "secret.docx", opens: 7, device: "Safari • iPhone", alert: true },
    { name: "report.xlsx", opens: 1, device: "Firefox • Mac", alert: false },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a",
    fontFamily: "Arial", padding: "40px" }}>

      <h1 style={{ color: "#00d4ff", textAlign: "center" }}>
        📊 Monitoring Dashboard
      </h1>
      <p style={{ color: "#888", textAlign: "center" }}>
        Track all your shared files in real time
      </p>

      <table style={{ width: "100%", marginTop: "40px",
      borderCollapse: "collapse" }}>

        <thead>
          <tr style={{ backgroundColor: "#1a1a2e" }}>
            <th style={{ color: "#00d4ff", padding: "16px", textAlign: "left" }}>File</th>
            <th style={{ color: "#00d4ff", padding: "16px", textAlign: "left" }}>Opens</th>
            <th style={{ color: "#00d4ff", padding: "16px", textAlign: "left" }}>Device</th>
            <th style={{ color: "#00d4ff", padding: "16px", textAlign: "left" }}>Alert</th>
            <th style={{ color: "#00d4ff", padding: "16px", textAlign: "left" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {files.map((file, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ color: "#fff", padding: "16px" }}>📄 {file.name}</td>
              <td style={{ color: "#aaa", padding: "16px" }}>{file.opens} times</td>
              <td style={{ color: "#aaa", padding: "16px" }}>{file.device}</td>
              <td style={{ padding: "16px" }}>
                {file.alert ? (
                  <span style={{ backgroundColor: "#ff0000",
                  color: "white", padding: "4px 10px",
                  borderRadius: "20px", fontSize: "12px" }}>
                    🔴 Suspicious
                  </span>
                ) : (
                  <span style={{ backgroundColor: "#00aa44",
                  color: "white", padding: "4px 10px",
                  borderRadius: "20px", fontSize: "12px" }}>
                    ✅ Safe
                  </span>
                )}
              </td>
              <td style={{ padding: "16px" }}>
                <button style={{ backgroundColor: "#ff0000",
                color: "white", border: "none", padding: "8px 16px",
                borderRadius: "8px", cursor: "pointer",
                fontWeight: "bold" }}>
                  🚨 REVOKE
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default Dashboard;