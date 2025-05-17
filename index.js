// const http=require("http");
// const fs=require("fs");
// const url=require("url");
const express=require("express"); 

const app=express();
app.get('/',(req,res)=>{
    return res.send("hello its home")
})
app.get('/about',(req,res)=>{
    return res.send(`hello ${req.query.myname}${req.query.age}`);
})

app.get('/contact',(req,res)=>{
    return res.send("hello from contact");
})

app.listen(8000,()=>{
    console.log("server started");
})
// function myHandler(req,res){
// if(req.url === '/favicon.ico') return res.end();  

//     const log=`${Date.now()}:${req.method}${req.url}:new req recievd\n`
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("./log.txt",log,(err,result)=>{
    
//      switch(myUrl.pathname){
//         case '/': 
//         if(req.method === 'GET') res.end("home mai hun");
//         break;
//         case '/about':
//         const username = myUrl.query.myname;    
//         res.end(`${username}:this side`);
//         break;
//         case '/signup':
//         if(req.method === 'GET') res.end("this is a signup form");
//         else if(req.method === 'POST'){
//             //db query
//             res.end("success");
//         }
//         break;
//         default:
//         res.end("404");
//     }
//     });
// }
// const myServer = http.createServer(app);
    


// myServer.listen(8000,()=>{
//     console.log("server started");
// }) 