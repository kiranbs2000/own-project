// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Portfolio App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f0f2f5;
            color: #333;
            text-align: center;
            padding: 80px;
          }
          h1 {
            color: #1e90ff;
            font-size: 32px;
          }
          p {
            font-size: 18px;
            margin-top: 20px;
          }
          footer {
            margin-top: 50px;
            color: #777;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to Your DevOps Portfolio Project!</h1>
        <p>This app is running inside a Docker container on Kubernetes.</p>
        <p>Built with ❤️ using Node.js, Docker, and Kubernetes.</p>
        <footer>
          <p>© 2025 Your Name</p>
        </footer>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.send('✅ App is healthy');
});

app.listen(port, () => {
  console.log(`✅ UI is running at http://localhost:${port}`);
});

