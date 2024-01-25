const http = require("http")

http.createServer((req,res) => {

    let ls = ["hi srgs","testing machine","think srgs","247.ai","srgs automate","test"]

    let randomIndex = Math.floor(Math.random()*(ls.length-1));
    res.write(ls[randomIndex]);
    res.end();
}).listen(8080)
