let http = require("http");

http.createServer(function (request,response){
    console.log("Url:" + request.url);
    console.log("Тип запиту" + request.method);
    console.log("User-Agent" + request.headers["user.agent"]);
    console.log("Усі заголовки");
    console.log(request.headers);

    response.end();
}).listen(3000);