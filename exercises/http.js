/**
 * HTTP服务器
 */
var http=require('http');

// 调用createServer服务器方法，创建一个http服务器
var server=http.createServer();
// 监听request事件
server.on('request',function(req,res){
    // 写入http响应状态码和响应头
    res.writeHead(200,{'Content-Type':'text/plain'});
    // 回复内容
    res.write('Hello,world');
    // 用二进制回复内容
    // res.write(Buffer.from('sss'));
    console.log(req.url)
    res.end(req.url);
})
server.listen(4001);

/**
 * 简写形式
 */
// require('http').createServer(function(req,res){
//     // 写入http响应状态码和响应头
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     // 回复内容
//     res.write('Hello,world');
// }).listen(4000)