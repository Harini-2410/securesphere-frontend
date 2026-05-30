import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import OTPPage from './OTPPage';
import QRPage from './QRPage';
import FileViewPage from './FileViewPage';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [expiry, setExpiry] = useState('24');
  const [downloads, setDownloads] = useState('3');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file!');

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login first!');
      window.location.href = '/login';
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('expiryHours', expiry);
    formData.append('maxDownloads', downloads);

    try {
  setLoading(true);
  const response = await axios.post(
    'http://localhost:5000/api/files/upload',
    formData,
    { headers: { 'Authorization': `Bearer ${token}` } }
  );
  
  alert('Response: ' + JSON.stringify(response.data));
  
  const fileId = response.data.file.fileId;
  localStorage.setItem('fileId', fileId);
  window.location.href = '/qr';

} catch (error) {
  alert('Error: ' + JSON.stringify(error.response?.data));
} finally {
  setLoading(false);
}  
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a", padding: "40px", fontFamily: "Arial", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ color: "#00d4ff", fontSize: "36px", margin: 0 }}>🔒 SecureSphere</h1>
        <p style={{ color: "#888", marginTop: "8px" }}>Share files securely. No leaks. No traces.</p>
      </div>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px", padding: "40px", width: "100%", maxWidth: "500px", boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}>
        
        <div style={{ border: "2px dashed #00d4ff", borderRadius: "12px", padding: "40px", textAlign: "center", backgroundColor: "#0d0d2e" }}>
          <p style={{ color: "#00d4ff", fontSize: "18px" }}>📂 Drag & drop your file here</p>
          <p style={{ color: "#555", fontSize: "13px" }}>or</p>
          <input 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])}
            style={{ color: "#aaa" }} 
          />
          {file && <p style={{ color: "#00d4ff", marginTop: "10px" }}>✅ {file.name}</p>}
        </div>

        <div style={{ marginTop: "24px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>⏰ Expiry Time (hours)</label>
          <input 
            type="number" 
            placeholder="e.g. 24"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#0d0d1a", color: "#fff", fontSize: "14px", boxSizing: "border-box" }} 
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>⬇️ Max Download Limit</label>
          <input 
            type="number" 
            placeholder="e.g. 3"
            value={downloads}
            onChange={(e) => setDownloads(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px", borderRadius: "8px", border: "1px solid #333", backgroundColor: "#0d0d1a", color: "#fff", fontSize: "14px", boxSizing: "border-box" }} 
          />
        </div>

        <button 
          onClick={handleUpload}
          style={{ marginTop: "30px", width: "100%", padding: "14px", background: "linear-gradient(90deg, #00d4ff, #0077ff)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold", letterSpacing: "1px" }}>
          {loading ? '⏳ UPLOADING...' : '🔗 GENERATE SECURE LINK'}
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/qr" element={<QRPage />} />
        <Route path="/file" element={<FileViewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;