const http = require('http');

// بنحدد البورت اللي السيرفر هيشتغل عليه (اللي إحنا رابطينه في الدوكر)
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from GitHub Actions! CI/CD Pipeline is working perfectly 😎\n');
});

// بنخلي السيرفر يشتغل على 0.0.0.0 عشان يقبل اتصالات من بره الكونتينر
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running and listening on port ${PORT}`);
});