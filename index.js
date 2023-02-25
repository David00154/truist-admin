const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// app.use((req, res, next) => {
// 	// console.log(req.originalUrl);
// 	let urlEndsWithSlash = req.url.endsWith("/");
// 	let urlEndsWithSlash2 = req.originalUrl.endsWith("/");
// 	if (!urlEndsWithSlash || !urlEndsWithSlash2) {
// 		req.url = req.url + "/";
// 		req.originalUrl = req.originalUrl + "/";
// 		next();
// 	} else {
// 		next();
// 	}
// });
app.use(
	"*",
	createProxyMiddleware({
		target: "https://x11.horizonexpress.online/",
		changeOrigin: true,
// 		pathRewrite: {
// 			"/admin": "/admin/",
// 		},
	})
);

const PORT = process.env.PORT || 8005;

app.listen(PORT, () => {
	console.log("Server started on http://localhost:%s", PORT);
});

module.exports = app;
