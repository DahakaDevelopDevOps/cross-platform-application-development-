const http = require("http");
const host = "localhost";
const port = 8000;
const requestListener = function (req, res) {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	function Headerr() {
		let result = "";
		let i = 0;
		for (const head in req.headers) {
			result += head + " ";
			i++;
			if (i % 2 === 1) {
				result += "; ";
			}
		}
		return result;
	}
	res.end(`
		<html>
			<head>
				<meta charSet="UTF-8"></meta>
			</head>
			<body>
				<h1>Hello World</h1>
                <h1>Метод:${req.method} </h1>
                <h1>Uri:${req.headers.host}  </h1>
                <h1>Версия протокола: </h1>
                <h1>Заголовки: ${Headerr()} </h1>
                <h1>Тело: ${res.result} </h1>
			</body>
            </html>`);
	console.log(req.headers);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
