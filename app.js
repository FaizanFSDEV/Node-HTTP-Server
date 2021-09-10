var http        = require('http')
var url         = require('url')
var querystring = require('querystring')
var fs          = require('fs')


http.createServer(function(request,response) {
  
  pathName = url.parse(request.url).pathname;

  fs.readFile(__dirname + pathName, function(err,data){
    if(err){
      response.writeHead(404,{'Content-Type':'text/plain'})
      response.write('Page was not Found' + JSON.stringify(err));
      response.end();
    }else{
      response.writeHead(200)
      response.write(data);
      response.end();
    }
  })

  query       = url.parse(request.url).query;
  queryAccess = querystring.parse(query).access

  console.log("pathName: " + pathName);
  console.log("query: " + query);
  console.log("queryAccess: " + queryAccess);
}).listen(3001);



// http.createServer(function(request,response) {
//   response.writeHead(200,{'Content-Type':'text/plain'})
//   response.write('Hello Node JS Server Response');
//   response.end();

//   pathName    = url.parse(request.url).pathname;
//   query       = url.parse(request.url).query;
//   queryAccess = querystring.parse(query).access

//   console.log("pathName: " + pathName);
//   console.log("query: " + query);
//   console.log("queryAccess: " + queryAccess);
// }).listen(3001);