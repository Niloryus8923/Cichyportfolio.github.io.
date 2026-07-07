const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8894;
const BASE = __dirname;

const MIME = {
  ".html": "text/html;charset=utf-8",
  ".css": "text/css;charset=utf-8",
  ".js": "application/javascript;charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

http.createServer((req, res) => {
  // Default to index.html
  let filePath = req.url === "/" ? "index.html" : req.url.slice(1);
  filePath = path.normalize(path.join(BASE, filePath));
  
  // Security: ensure we stay within BASE
  if (!filePath.startsWith(BASE)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error: " + err.message);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log("Server running on http://127.0.0.1:" + PORT);
});
