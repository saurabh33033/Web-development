// console.log("Hello World")
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nagivation</title>
        <style>
            .navbar{
                background-color:#6e6577;
                border-radius: 50px;
            }
            .navbar ul{
                overflow: auto;
            }
            .navbar li{
                float: left;
                list-style: none;
                margin: 16px 20px;
            }
            .navbar a{
                padding: 3px 3px;
                text-decoration: none;
                color: white;
            }
            .search{
                float: right;
                color: white;
                padding: 3px 3px;
                margin: 13px 60px;
            }
            .navbar input{
                border: 2px solid black;
                border-radius: 10px;
                padding: 3px 17px;
            }
        </style>
    </head>
    <body>
        <header>
            <nav class="navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <div class="search">
                        <input type="text" name="search" id="search" placeholder="Search Here">
                    </div>
                </ul>
            </nav>
        </header>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});