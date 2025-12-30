const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    // IST timezone ke liye
    const currentTime = new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'medium'
    });
    
    res.send(`
        <html>
        <head><title>CI/CD Demo v2.0</title>
        <style>
            body { font-family: Arial; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                   display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .container { background: white; padding: 50px; border-radius: 20px; text-align: center; 
                        box-shadow: 0 10px 40px rgba(0,0,0,0.3); }
            h1 { color: #667eea; }
            .badge { background: #28a745; color: white; padding: 10px 20px; 
                    border-radius: 25px; margin: 10px; display: inline-block; }
        </style></head>
        <body>
            <div class="container">
                <h1>🚀 CI/CD Success v2.0!</h1>
                <p>Jenkins + Docker + ECR + EC2</p>
                <div>
                    <span class="badge">✅ Jenkins</span>
                    <span class="badge">🐳 Docker</span>
                    <span class="badge">☁️ AWS ECR</span>
                    <span class="badge">⚙️ EC2</span>
                </div>
                <p class="build-time"><strong>Build Time:</strong> ${currentTime}</p>
                <div class="greeting">
                    कैसे हो पवन कोली 🙏
                </div>
                <p><strong>Build:</strong> ${new Date().toLocaleString()}</p>
            </div>
        </body></html>
    `);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => console.log('Server running on port 3000'));