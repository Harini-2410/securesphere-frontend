import { useEffect, useRef } from 'react';

function FileViewPage() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.font = '20px Arial';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.rotate(-0.4);
    
    for (let i = 0; i < 6; i++) {
      const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const email = localStorage.getItem('receiverEmail') || 'receiver@email.com';
      ctx.fillText(`Receiver • ${email} • ${today}`, 
        -100 + (i * 100), 200 + (i * 150));
    }
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0d0d1a",
    fontFamily: "Arial", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center" }}>

      <div style={{ backgroundColor: "#1a1a2e", borderRadius: "16px",
      padding: "40px", width: "100%", maxWidth: "700px",
      boxShadow: "0 0 30px rgba(0,212,255,0.1)" }}>

        <h1 style={{ color: "#00d4ff", textAlign: "center" }}>
          📄 Secure File Viewer
        </h1>
        <p style={{ color: "#888", textAlign: "center" }}>
          This file is protected. Your identity is watermarked.
        </p>

        <div style={{ position: "relative", marginTop: "30px",
        backgroundColor: "#fff", borderRadius: "8px", 
        minHeight: "400px", overflow: "hidden" }}>
          
          <div style={{ padding: "40px", color: "#333" }}>
            <h2>Confidential Document</h2>
            <p>This is a secure file shared via SecureSphere.</p>
            <p>Only authorized receivers can view this content.</p>
            <p>Any unauthorized sharing will be traced back to you.</p>
          </div>

          <canvas ref={canvasRef} width={700} height={400}
          style={{ position: "absolute", top: 0, left: 0, 
          pointerEvents: "none" }} />

        </div>

        <button 
          onClick={() => window.location.href='/dashboard'} 
          style={{ marginTop: "20px", width: "100%", padding: "14px", 
          background: "linear-gradient(90deg, #ff0000, #aa0000)", 
          color: "white", border: "none", borderRadius: "8px", 
          fontSize: "16px", cursor: "pointer", fontWeight: "bold" }}>
          📊 GO TO DASHBOARD
        </button>

      </div>
    </div>
  )
}

export default FileViewPage;