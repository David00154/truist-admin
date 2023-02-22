const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// app.get("/", (req, res) => res.send("WOop"));
app.use("*", createProxyMiddleware({ target: "https://x11.horizonexpress.online/", changeOrigin: true }));

const PORT = process.env.PORT || 1345;

app.listen(PORT, () => {
	console.log("Server started on http://localhost:%s", PORT);
});

module.exports = app;
