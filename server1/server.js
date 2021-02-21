var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

function staticRoot(staticPath,req,res){
    console.log(staticPath)
    console.log(req.url)
    //url.parse()可以将一个完整的URL地址，
    //分为很多部分，常用的有：host、port、pathname、path、query。
    var pathObj = url.parse(req.url,true)
    console.log(pathObj)
    //不用输入index.html 也可以进到这里
    if(pathObj.pathname === '/'){
        pathObj.pathname += 'index.html'
    }

    var filePath = path.join(staticPath,pathObj.pathname)

    fs.readFile(filePath,'binary',function(err, fileContent){
        if(err){
            console.log('404')
            res.writeHead(404,'not found')
            res.end('<h1>404 Not Found<h1>')
        }else{
            console.log('ok')
            res.writeHead(200,'OK')
            res.write(fileContent,'binary')
            res.end()
        }
    })

}

//path.join() 方法会将所有给定的 path 片段连接到一起
//（使用平台特定的分隔符作为定界符），然后规范化生成的路径。
console.log(path.join(__dirname,'static'))


var server = http.createServer(function(req,res){
    staticRoot(path.join(__dirname,'static'),req,res)
})
server.listen(8080)
console.log('visit http://localhost:8080')