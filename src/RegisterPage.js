import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/auth/register', {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });
      alert('Registration successful! Please login.');
      window.location.href = '/login';
    } catch (error) {
      alert('Registration failed! Try again.');
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
        <p style={{ color: "#888", textAlign: "center" }}>Create your account</p>

        <div style={{ marginTop: "24px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>👤 Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px",
            borderRadius: "8px", border: "1px solid #333",
            backgroundColor: "#0d0d1a", color: "#fff",
            fontSize: "14px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
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

        <div style={{ marginTop: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "14px" }}>🔑 Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "100%", padding: "12px", marginTop: "8px",
            borderRadius: "8px", border: "1px solid #333",
            backgroundColor: "#0d0d1a", color: "#fff",
            fontSize: "14px", boxSizing: "border-box" }}
          />
        </div>

        <button
          onClick={handleRegister}
          style={{ marginTop: "30px", width: "100%", padding: "14px",
          background: "linear-gradient(90deg, #00d4ff, #0077ff)",
          color: "white", border: "none", borderRadius: "8px",
          fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
          {loading ? '⏳ REGISTERING...' : '✅ REGISTER'}
        </button>

        <p style={{ color: "#888", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>
          Already have an account?{" "}
          <span
            onClick={() => window.location.href='/login'}
            style={{ color: "#00d4ff", cursor: "pointer" }}>
            Login here
          </span>
        </p>

      </div>
    </div>
  );
}

export default RegisterPage;