import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OTPPage from './OTPPage';
import QRPage from './QRPage';

function UploadPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a", padding: "40px", fontFamily: "Arial", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#00d4ff", fontSize: "36px", margin: 0 }}>🔒 SecureSphere</h1>
        <p style={{ color: "#888", marginTop: "8px" }}>Share files securely. No leaks. No traces.</p>
      </div>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px", padding: "40px", width: "100%", maxWidth: "500px", boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}>
        
        <div style={{ border: "2px dashed #00d4ff", borderRadius: "12px", padding: "40px", textAlign: "center", backgroundColor: "#0d0d2e", cursor: "pointer" }}>
          <p style={{ color: "#00d4ff", fontSize: "18px" }}>📂 Drag & drop your file here</p>
          <p style={{ color: "#555", fontSize: "13px" }}>or</p>
          <input type="file" style={{ color: "#aaa" }} />
        </div>

        <div style={{ marginTop: "24px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>⏰ Expiry Time (hours)</label>
          <input type="number" placeholder="e.g. 24" style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#0d0d1a", color: "#fff", fontSize: "14px", boxSizing: "border-box" }} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>⬇️ Max Download Limit</label>
          <input type="number" placeholder="e.g. 3" style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#0d0d1a", color: "#fff", fontSize: "14px", boxSizing: "border-box" }} />
        </div>

        <button style={{ marginTop: "30px", width: "100%", padding: "14px", background: "linear-gradient(90deg, #00d4ff, #0077ff)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold", letterSpacing: "1px" }}>
          🔗 GENERATE SECURE LINK
        </button>

      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/qr" element={<QRPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;