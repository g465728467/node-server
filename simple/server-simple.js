var http = require('http')
var sever = http.createServer(function(request,response){
    setTimeout(function(){
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.writeHead(404,'Not Found')
        response.write('<html><head><meta charset="gbk"/step4></head>')
        response.write('<body>')
        response.write('<h1>你好</h1>')
        response.write('</body>')
        response.write('</html>')

        response.end()
    },2000)
})

console.log('open http://localhost:8080')
sever.listen(8080)