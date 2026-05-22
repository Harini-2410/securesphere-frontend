import { QRCodeSVG } from 'qrcode.react';

function QRPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a",
    fontFamily: "Arial", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center" }}>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px",
      padding: "40px", width: "100%", maxWidth: "500px",
      boxShadow: "0 0 30px rgba(0,212,255,0.1)", textAlign: "center" }}>

        <h1 style={{ color: "#00d4ff" }}>📱 Scan to Access File</h1>
        <p style={{ color: "#888" }}>Share this QR code with the receiver</p>

        <div style={{ backgroundColor: "#fff", padding: "20px",
        borderRadius: "12px", display: "inline-block", marginTop: "20px" }}>
          <QRCodeSVG value="https://securesphere.app/file/abc123" size={200} />
        </div>

        <p style={{ color: "#555", marginTop: "16px", fontSize: "13px" }}>
          https://securesphere.app/file/abc123
        </p>

        <button style={{ marginTop: "20px", width: "100%", padding: "14px",
        background: "linear-gradient(90deg, #00d4ff, #0077ff)",
        color: "white", border: "none", borderRadius: "8px",
        fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
          📋 COPY LINK
        </button>

      </div>
    </div>
  )
}

export default QRPage;