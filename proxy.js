const http = require("http");
const https = require("https");
const url = require("url");

const PORT = 8010;
const TARGET_HOST = "www.swiggy.com";

const server = http.createServer((req, res) => {
  // Allow CORS from localhost
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url);
  const targetPath = parsedUrl.path; // e.g. /proxy/mapi/menu/pl?...

  // Strip the leading /proxy from the path
  const swiggyPath = targetPath.replace(/^\/proxy/, "");

  console.log(`Proxying: https://${TARGET_HOST}${swiggyPath}`);

  const options = {
    hostname: TARGET_HOST,
    path: swiggyPath,
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "*/*",
      "Accept-Encoding": "identity", // ← force plain text, no gzip
      "Accept-Language": "en-US,en;q=0.9",
      Referer: "https://www.swiggy.com/",
    },
  };

  const proxyReq = https.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, {
      "Content-Type": proxyRes.headers["content-type"] || "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on("error", (err) => {
    console.error("Proxy error:", err.message);
    res.writeHead(500);
    res.end(JSON.stringify({ error: err.message }));
  });

  proxyReq.end();
});

server.listen(PORT, () => {
  console.log(`✅ Local Swiggy proxy running at http://localhost:${PORT}`);
  console.log(`   Requests to /proxy/* → https://${TARGET_HOST}/*`);
});
