// // 引入http模块
// const http =require('http');
// // 创建http服务器
// const server = http.createServer();
// // 监听http的request事件
// server.on('request',(req,res)=>{
//     res.sed("hello world")
// })
// // 开启http服务器，监听3000端口
// server.listen(3000,()=>{
//     console.log("running");
// })






// const http =require('http');
// // 引入fs模块;
// const fs = require('fs');
// // 引入处理路径的path模块
// const path = require('path');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     // 获取客户端的url
//     var url = req.url;
//     // 根据客户端的url拼接对应磁盘上的文件，这里我们将静态资源统一放到www文件夹下;
//     fs.readFile(path.join(__dirname,"www",url),(err,data)=>{
//         // 处理错误信息
//         if(err) return res.end(err.message);
//         // 将读取到的信息返回给客户端
//         res.end(data);
//     })
// })
// server.listen(3000,()=>{
//     console.log("running");
// })



// const http =require('http');
// const fs = require('fs');
// const path = require('path');
// const mime = require('mime');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     var url = req.url;
//     fs.readFile(path.join(__dirname,"www",url),(err,data)=>{
//         if(err) {
//             res.writeHeader(404)
//             return res.end("404")
//         };
//         let type = mime.getType(url);
//         if(type.includes("text")) type=`${type}; charset=utf8`
//         res.writeHeader(200,{
//             "Content-Type":type,
//             "clm1100":'3333'
//         })
//         res.end(data);
//     })
// })
// server.listen(3000,()=>{
//     console.log("running");
// })



const http =require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const server = http.createServer();
server.on('request',(req,res)=>{
    let url = req.url;
    let srcpath = path.join(__dirname,"www",url);
    if(fs.existsSync(srcpath)&&fs.statSync(srcpath).isFile()){
        let type = mime.getType(url);
        if(type.includes("text")) type=`${type}; charset=utf8`
        res.writeHeader(200,{
                    "Content-Type":type,
                    "clm1100":'3333'
                })
        fs.createReadStream(srcpath).pipe(res);
    }else{
        res.writeHeader(404)
        res.end("404")
    }

})
server.listen(3000,()=>{
    console.log("running");
})