import { useEffect, useRef } from 'react';

function FileViewPage() {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Watermark text
    ctx.font = '20px Arial';
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.rotate(-0.4);
    
    // Draw watermark multiple times diagonally
    for (let i = 0; i < 6; i++) {
      ctx.fillText('Harini • harini@gmail.com • 22-May-2026', 
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

        {/* File content + watermark */}
        <div style={{ position: "relative", marginTop: "30px",
        backgroundColor: "#fff", borderRadius: "8px", 
        minHeight: "400px", overflow: "hidden" }}>
          
          {/* Fake document content */}
          <div style={{ padding: "40px", color: "#333" }}>
            <h2>Confidential Document</h2>
            <p>This is a secure file shared via SecureSphere.</p>
            <p>Only authorized receivers can view this content.</p>
            <p>Any unauthorized sharing will be traced back to you.</p>
          </div>

          {/* Canvas watermark on top */}
          <canvas ref={canvasRef} width={700} height={400}
          style={{ position: "absolute", top: 0, left: 0, 
          pointerEvents: "none" }} />

        </div>

      </div>
    </div>
  )
}

export default FileViewPage;