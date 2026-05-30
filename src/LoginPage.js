import { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password
      });
      localStorage.setItem('token', response.data.token);
      alert('Login successful!');
      window.location.href = '/';
    } catch (error) {
      alert('Login failed! Check email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a",
    fontFamily: "Arial", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center" }}>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px",
      padding: "40px", width: "100%", maxWidth: "500px",
      boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}>

        <h1 style={{ color: "#00d4ff", textAlign: "center" }}>🔒 SecureSphere</h1>
        <p style={{ color: "#888", textAlign: "center" }}>Login to your account</p>

        <div style={{ marginTop: "24px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>📧 Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px",
            borderRadius: "8px", border: "1px solid #333",
            backgroundColor: "#0d0d1a", color: "#fff",
            fontSize: "14px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>🔑 Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px",
            borderRadius: "8px", border: "1px solid #333",
            backgroundColor: "#0d0d1a", color: "#fff",
            fontSize: "14px", boxSizing: "border-box" }}
          />
        </div>

        <button
          onClick={handleLogin}
          style={{ marginTop: "30px", width: "100%", padding: "14px",
          background: "linear-gradient(90deg, #00d4ff, #0077ff)",
          color: "white", border: "none", borderRadius: "8px",
          fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
          {loading ? '⏳ LOGGING IN...' : '🔐 LOGIN'}
        </button>

        <p style={{ color: "#888", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          Don't have an account?{" "}
          <span
            onClick={() => window.location.href='/register'}
            style={{ color: "#00d4ff", cursor: "pointer" }}>
            Register here
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;