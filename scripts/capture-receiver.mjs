// Small local sink for the capture runs. The Playwright MCP executes its snippets in a
// sandbox with no filesystem access, so the captured DOM is POSTed out of the page and
// written here instead. Only ever bound to the loopback interface, and only while a
// capture is running.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || process.cwd();
const port = Number(process.argv[3] || 4599);

const server = http.createServer((req, res) => {
  const cors = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
  };
  if (req.method === "OPTIONS") return res.writeHead(204, cors).end();
  if (req.method !== "POST") return res.writeHead(405, cors).end();

  const target = new URL(req.url, "http://127.0.0.1").searchParams.get("path");
  // Keep writes inside the project no matter what the page sends.
  const dest = path.resolve(root, target || "");
  if (!target || !dest.startsWith(path.resolve(root) + path.sep)) {
    return res.writeHead(400, cors).end("path outside project");
  }

  const chunks = [];
  req.on("data", c => chunks.push(c));
  req.on("end", () => {
    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.concat(chunks));
      console.log(`wrote ${path.relative(root, dest)} (${Buffer.concat(chunks).length} bytes)`);
      res.writeHead(200, cors).end("ok");
    } catch (error) {
      console.error(`failed ${target}: ${error.message}`);
      res.writeHead(500, cors).end(String(error));
    }
  });
});

server.listen(port, "127.0.0.1", () => console.log(`capture receiver on http://127.0.0.1:${port} -> ${root}`));
