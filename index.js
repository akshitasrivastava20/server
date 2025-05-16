const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url}:new req recievd\n`
    fs.appendFile("./log.txt",log,(err,result)=>{
     switch(req.url){
        case '/': res.end("home mai hun")
        break
        case '/about':res.end("about h yeh");
        break
        default:res.end("404");
     }
    })
    
   

});

myServer.listen(8000,()=>{
    console.log("server started");
})