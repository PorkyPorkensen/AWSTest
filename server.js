const http = require("node:http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello! My application is running on AWS Elastic Beanstalk! This is my second version!");
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
