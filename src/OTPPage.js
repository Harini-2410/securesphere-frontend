function OTPPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a", 
    padding: "40px", fontFamily: "Arial", display: "flex", 
    flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px", 
      padding: "40px", width: "100%", maxWidth: "500px", 
      boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}>

        <h1 style={{ color: "#00d4ff", textAlign: "center" }}>
          🔐 Verify Your Identity
        </h1>
        <p style={{ color: "#888", textAlign: "center" }}>
          Enter your email to receive OTP
        </p>

        <input type="email" placeholder="Enter your email" 
        style={{ width: "100%", padding: "12px", marginTop: "20px", 
        borderRadius: "8px", border: "1px solid #333", 
        backgroundColor: "#0d0d1a", color: "#fff", boxSizing: "border-box" }} />

        <button style={{ marginTop: "16px", width: "100%", padding: "14px", 
        background: "linear-gradient(90deg, #00d4ff, #0077ff)", 
        color: "white", border: "none", borderRadius: "8px", 
        fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
          📨 SEND OTP
        </button>

        <input type="text" placeholder="Enter OTP" 
        style={{ width: "100%", padding: "12px", marginTop: "20px", 
        borderRadius: "8px", border: "1px solid #333", 
        backgroundColor: "#0d0d1a", color: "#fff", boxSizing: "border-box" }} />
      <button onClick={() => window.location.href='/file'} style={{ marginTop: "16px", width: "100%", padding: "14px", background: "linear-gradient(90deg, #00d4ff, #0077ff)", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
  ✅ VERIFY & ACCESS FILE
</button>

      </div>
    </div>
  )
}

export default OTPPage;