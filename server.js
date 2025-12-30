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
            body { 
                font-family: Arial, sans-serif; 
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
            }
            .container { 
                background: white; 
                padding: 50px; 
                border-radius: 20px; 
                text-align: center; 
                box-shadow: 0 10px 40px rgba(0,0,0,0.3); 
                max-width: 600px;
            }
            h1 { 
                color: #667eea; 
                margin-bottom: 10px;
            }
            .badge { 
                background: #28a745; 
                color: white; 
                padding: 10px 20px; 
                border-radius: 25px; 
                margin: 10px; 
                display: inline-block; 
                font-weight: bold;
            }
            .build-time {
                color: #666;
                font-size: 14px;
                margin: 20px 0;
            }
            .greeting {
                font-size: 24px;
                color: #764ba2;
                font-weight: bold;
                margin-top: 30px;
                padding: 20px;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
            }
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
            </div>
        </body></html>
    `);
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', uptime: process.uptime() });
});

app.listen(PORT, () => console.log('Server running on port 3000'));
```

---

### **Changes:**
```
✅ IST timezone (Asia/Kolkata)
✅ Real-time update (har refresh pe current time)
✅ "कैसे हो पवन कोली 🙏" - Beautiful gradient styling
✅ Better formatting
